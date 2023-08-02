import moment from "moment"
import { useContext, useEffect, useState } from "react"
import { Card, CardBody, Form, FormGroup, Label, Col, Input, Row, Button, CardTitle } from "reactstrap"
import LoadingContext from "../../../../contexts/LoadingContext"
import { addPage, addPostNews, getAllNavParent, listSubNav, uploadImage } from "../../../../services/api_web"
import { useHistory } from "react-router"
import { toast } from "react-toastify"

const AddPage = () => {
    const loading = useContext(LoadingContext)
    const [author, setAuthor] = useState("")
    const [date, setDate] = useState("")
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")
    const [status, setStatus] = useState("0")
    const [url, setUrl] = useState("")
    const [kategori, setKategori] = useState("")

    const [filePath, setFilePath] = useState("")

    const [navChildId, setNavChildId] = useState("")
    const [navId, setNavId] = useState("")
    const [navNumber, setNavNumber] = useState("")
    const [navParentId, setNavParentId] = useState("")

    const [urlParent, setUrlParent] = useState("")

    const [data, setData]: any = useState([])

    const [image, setImage] = useState<any>(null);
    const [fileName, setFileName] = useState<any>();

    function deleteNav(e: any) {

    }
    const history = useHistory()

    const [listParen, setListParen] = useState([{
        label: "",
        value: "",
        url: ""
    }])
    const [listChild, setListChild] = useState([{
        label: "",
        value: "",
        url: ""
    }])
    const getDataListParent = () => {
        loading.setLoading(true)
        getAllNavParent().then((response) => {
            var a: any[] = []
            response.data.Data.forEach((element: any) => {
                a.push({
                    label: element.nav_label,
                    value: element.nav_id,
                    url: element.nav_url
                })
            });
            setListParen(a)

            loading.setLoading(false)

        }).catch((err) => {
            loading.setLoading(false)
        });
    }
    const getDataListChild = (e: any) => {
        let query = {
            "nav_parent_id": e
        }
        loading.setLoading(true)
        listParen.forEach(element => {
            if (element.value === e) {
                setUrl(element.url)
                setUrlParent(element.url)
            }
        });
        listSubNav(query).then((response) => {
            var a: any[] = []
            console.log(response);
            if (response.data.Data.length !== 0) {


                response.data.Data.forEach((element: any) => {
                    a.push({
                        label: element.nav_label,
                        value: element.nav_id,
                        url: element.nav_url
                    })
                });
                setListChild(a)
                loading.setLoading(false)
            } else {
                loading.setLoading(false)
                setListChild([])
            }



        }).catch((err) => {
            loading.setLoading(false)
        });
    }

    const validImage = (e) => {
        // saveSlider()
        let file64 = e.replaceAll("data:image/jpeg;base64,", "")
        console.log(file64)

        let bodyContent = JSON.stringify({
            "filename": fileName,
            "filebasenampat": e

        })
        uploadImage(bodyContent, localStorage.getItem("token")).then(response => {
            setFilePath(response.data.Filepath)
        }).catch(err => console.log(err,)
        )
    }
    const postData = () => {
        // loading.setLoading(true)
        let bodyContent = JSON.stringify({
            "post_author": author,
            "post_date": date,
            "post_content": `<h3> ${content}  <img src="${filePath}" alt="" title="">  </h3>`,
            "post_title": title,
            "post_status": status,
            "post_created": moment().format("YYYY-MM-DD hh:mm:ss"),
            "post_updated": moment().format("YYYY-MM-DD hh:mm:ss"),
            "post_group": kategori,
            "post_url": url,
            "nav_parent_id": navParentId,
            "nav_child_id": navChildId
        }

        )


        addPage(bodyContent, localStorage.getItem("token")).then((response) => {
            console.log(response);
            toast.success("Sukses")
            history.goBack()

        }).catch((err) => {
            console.log(err);
            toast.error("Gagal")

        });
    }
    const handleImagePreview = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        console.log(file);
        setFileName(file?.name)


        if (file) {
            try {
                convertToBase64(file)
                    .then((base64String: any) => {
                        setImage(base64String)
                        validImage(base64String)
                    })
                    .catch((error) => console.error('Error converting to base64:', error));
            } catch (error) {
                console.error('Error reading image:', error);
            }
        }
    };

    const convertToBase64 = (file: any) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onloadend = () => {
                if (typeof reader.result === 'string') {
                    resolve(reader.result);
                } else {
                    reject(new Error('Failed to convert image to base64.'));
                }
            };

            reader.onerror = () => {
                reject(new Error('Error converting image to base64.'));
            };

            reader.readAsDataURL(file);
        });
    };


    useEffect(() => {
        getDataListParent()
    }, [])
    return (
        <>
            <Card className="my-2 border-0">
                <CardBody>
                    <CardTitle tag="h5">
                        Tamabah Page
                    </CardTitle>

                </CardBody>

            </Card>
            <Card className="shadow-sm p-3 mb-5 bg-white rounded border-0">
                <CardBody>

                    <Form>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label >
                                        Parent
                                    </Label>
                                    <Input
                                        placeholder="Select Parent"
                                        type="select"
                                        value={navParentId}
                                        onChange={(e) => {
                                            setNavParentId(e.target.value)
                                            getDataListChild(e.target.value)
                                        }}
                                    >
                                        <option value="" disabled>Select Parent</option>
                                        {listParen.map((el: any, ind: any) => (
                                            <option value={el?.value} key={ind} >{el?.label}</option>
                                        )
                                        )}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label >
                                        Child
                                    </Label>
                                    <Input
                                        placeholder="Select Child"
                                        type="select"
                                        value={navChildId}
                                        onChange={(e) => {
                                            setNavChildId(e.target.value);

                                            listChild.forEach(ele => {
                                                if (ele.value === e.target.value) {
                                                    setUrl(urlParent + ele.url)
                                                }
                                            });
                                        }}
                                    >
                                        <option value="" disabled>Select Child</option>
                                        {listChild.map((el: any, ind: any) => (
                                            <option value={el?.value} key={ind} >{el?.label}</option>
                                        )
                                        )}
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>

                                <FormGroup >
                                    <Label

                                    >
                                        Kategori
                                    </Label>

                                    <Input
                                        value={kategori}
                                        onChange={(e) => {

                                            setKategori(e.target.value)
                                        }}
                                        placeholder=""
                                        type="select"

                                    >
                                        <option value="" disabled>Pilih Kategori</option>
                                        <option value={"post"}>Berita</option>
                                        <option value={"page"}>Halaman Statis</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col>

                                <FormGroup >
                                    <Label
                                    >
                                        Author
                                    </Label>

                                    <Input
                                        value={author}
                                        onChange={(e) => setAuthor(e.target.value)}
                                        placeholder=""
                                        type="text"

                                    />
                                </FormGroup>
                            </Col>

                        </Row>
                        <Row>
                            <Col>

                                <FormGroup >
                                    <Label

                                    >
                                        Title
                                    </Label>
                                    <Input
                                        value={title}
                                        onChange={(e) => {
                                            setTitle(e.target.value)



                                        }}
                                        onBlur={(e) => {
                                            var post = url + "/"
                                            var tes = e.target.value.replaceAll(" ", "-").toLowerCase()
                                            setUrl(post + tes)
                                        }}
                                        placeholder=""
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col>

                                <FormGroup >
                                    <Label

                                    >
                                        URL
                                    </Label>
                                    <Input
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
                                        placeholder=""
                                        type="text"

                                    />
                                </FormGroup>
                            </Col>

                        </Row>
                        <Row>
                            <Col>

                                <FormGroup >
                                    <Label

                                    >
                                        Status
                                    </Label>
                                    <Input
                                        value={status}
                                        onChange={(e) => {

                                            setStatus(e.target.value)
                                        }}
                                        placeholder=""
                                        type="select"

                                    >
                                        <option value="" disabled>Pilih Status</option>
                                        <option value={"0"}>Draft</option>
                                        <option value={"1"}>Publish</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup >
                                    <Label
                                        for="examplePassword"
                                        sm={2}
                                    >
                                        Date
                                    </Label>
                                    <Input
                                        onChange={(e) => setDate(moment(e.target.value).format("YYYY-MM-DD hh:mm:ss"))}
                                        type="date"
                                    />
                                </FormGroup>

                            </Col>
                        </Row>
                        <Row>
                            <FormGroup>
                                <Label >
                                    Upload Image
                                </Label>
                                <Input type="file" onChange={handleImagePreview} accept="image/*" />

                                {/* Image preview */}
                                {image && (
                                    <div className="mt-4">
                                        <img src={image} alt="Preview" style={{ maxWidth: '300px' }} />
                                    </div>
                                )}
                            </FormGroup>

                        </Row>
                        <Row>

                            <FormGroup >
                                <Label
                                    for="exampleText"
                                    sm={2}
                                >
                                    Content
                                </Label>

                                <Input
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    type="textarea"
                                    rows="10"
                                />

                            </FormGroup>
                        </Row>


                        <Col className="d-flex justify-content-end" >

                            <Button color="primary" onClick={() => postData()} className="btn btn-primary">
                                Tambah
                            </Button>
                        </Col>
                    </Form>
                </CardBody>
            </Card>
        </>
    )
}
export default AddPage;