import moment from "moment"
import React, { useContext, useEffect, useRef, useState } from "react"
import { Button, Card, CardBody, Col, Form, FormGroup, FormText, Input, Label, Row, Toast } from "reactstrap"
import { addPostNews, getPostById, updatePostNews, uploadImage } from "../../../../services/api_web"
import { useHistory, useParams } from "react-router"
import LoadingContext from "../../../../contexts/LoadingContext"
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css';

function EditBerita() {

    const [author, setAuthor] = useState("")
    const [date, setDate] = useState("")
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")
    let param: any = useParams()
    const [status, setStatus] = useState("0")
    const [url, setUrl] = useState("")
    const [kategori, setKategori] = useState("post")
    const [type, setType] = useState(false)

    const [data, setData]: any = useState()
    const history = useHistory()
    const [fileName, setFileName] = useState<any>();
    const quillRef = useRef<ReactQuill>(null);
    const loading = useContext(LoadingContext)

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'font': [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image', 'video'],
            ['clean'],
        ],
    };
    const formats = [
        'header',
        'font',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
    ];
    function PostNews() {
        loading.setLoading(true)
        if (quillRef.current) {
            const editor = quillRef.current.getEditor();
            const quillDelta = editor.getContents();
            const imageTags = quillDelta.ops.filter((op) => op.insert && op.insert.image);

            const imageUrls = imageTags.map((op) => {
                const imageUrl = op.insert.image;
                return typeof imageUrl === 'string' ? imageUrl : imageUrl.src;
            });
            let cek = imageUrls[0].replaceAll("data:image/jpeg;base64,", "")
            let bodyContent = JSON.stringify({
                "filename": title + ".jpeg",
                "filebasenampat": cek

            })
            uploadImage(bodyContent, localStorage.getItem("token")).then(response => {
                let query = {
                    "post_id": data.post_id,
                    "post_author": author,
                    "post_date": moment(date).format("YYYY-MM-DD hh:mm:ss"),
                    "post_content": content,
                    "post_title": title,
                    "post_status": status,
                    "post_created": data.post_created,
                    "post_updated": moment().format("YYYY-MM-DD hh:mm:ss"),
                    "post_group": kategori,
                    "post_url": url
                }
                updatePostNews(query).then(resp => {
                    console.log(resp)
                    setAuthor("")
                    setContent("")
                    setTitle("")
                    loading.setLoading(false)
                    window.location.replace("/web-admin-paw")


                }).catch(err => {
                    loading.setLoading(false)
                    console.log(err)

                })

            }).catch(err => console.log(err,)
            )
        }

    }
    useEffect(() => {
        loading.setLoading(true)
        let query = {
            post_id: param.id
        }
        console.log(param.id);

        getPostById(query).then(resp => {
            var conten = resp.data.Data.post_content.replaceAll("<h3>", "")
            var contenall = conten.replaceAll("</h3>", "")
            console.log(resp.data.Data, contenall);
            setAuthor(resp.data.Data.post_author)
            setDate(resp.data.Data.post_date)
            setContent(resp.data.Data.post_content)
            setTitle(resp.data.Data.post_title)
            setStatus(resp.data.Data.post_status)
            setUrl(resp.data.Data.post_url)
            setKategori(resp.data.Data.post_group)
            setData(resp.data.Data)
            loading.setLoading(false)
        }).catch(err => {
            console.log(err);
            window.location.replace("/web-admin-paw")


        })
    }, []);
    return (
        <div>
            <Card className="shadow-sm p-3 mb-5 bg-white rounded border-0">
                <CardBody>

                    <Form>
                        <FormGroup row>
                            <Label
                                for="exampleEmail"
                                sm={2}
                            >
                                Kategori
                            </Label>
                            <Col sm={4}>
                                <Input
                                    value={kategori}
                                    onChange={(e) => {
                                        if (e.target.value == "post") {
                                            setUrl("/post")
                                        };
                                        setKategori(e.target.value)
                                    }}
                                    placeholder=""
                                    type="select"

                                >
                                    <option disabled>Pilih Kategori</option>
                                    <option value={"post"}>Berita</option>
                                    <option value={"page"}>Halaman Statis</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label
                                for="exampleEmail"
                                sm={2}
                            >
                                Author
                            </Label>
                            <Col sm={10}>
                                <Input
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                    placeholder=""
                                    type="text"

                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label
                                for="exampleEmail"
                                sm={2}
                            >
                                Title
                            </Label>
                            <Col sm={10}>
                                <Input
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder=""
                                    type="text"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label
                                for="exampleEmail"
                                sm={2}
                            >
                                URL
                            </Label>
                            <Col sm={10}>
                                <Input
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    placeholder=""
                                    type="text"

                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label
                                for="exampleEmail"
                                sm={2}
                            >
                                Status
                            </Label>
                            <Col sm={4}>
                                <Input
                                    value={status}
                                    onChange={(e) => {

                                        setStatus(e.target.value)
                                    }}
                                    placeholder=""
                                    type="select"

                                >
                                    <option disabled>Pilih Status</option>
                                    <option value={"0"}>Draft</option>
                                    <option value={"1"}>Publish</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label
                                for="examplePassword"
                                sm={2}
                            >
                                Date
                            </Label>
                            <Col sm={4}>
                                <Input
                                    onClick={() => setType(true)}
                                    value={moment(date).format("DD MMMM YYYY")}
                                    onChange={(e) => setDate(e.target.value)}
                                    type={type ? "date" : "text"}
                                />
                            </Col>
                        </FormGroup>

                        <Row >
                            <Label>Content</Label>
                            <ReactQuill value={content} onChange={setContent}
                                ref={quillRef}
                                modules={modules}
                                formats={formats}
                                placeholder="Compose your text..."
                                style={{ height: '200%' }} />




                        </Row>
                        <Col className="d-flex justify-content-end mt-4" >

                            <Button color="primary" className="m-2" onClick={() => PostNews()} >
                                Update
                            </Button>
                            <Button color="danger" className="m-2" onClick={() => history.goBack()} >
                                Kembali
                            </Button>
                        </Col>



                    </Form>
                </CardBody>
            </Card>
        </div>
    )
}
export default EditBerita