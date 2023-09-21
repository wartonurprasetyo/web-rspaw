import moment from "moment"
import React, { useContext, useRef, useState } from "react"
import { Button, Card, CardBody, Col, Form, FormGroup, FormText, Input, Label, Row } from "reactstrap"
import { addPostNews, uploadImage } from "../../../../services/api_web"
import LoadingContext from "../../../../contexts/LoadingContext"
import ReactQuill from "react-quill"
import { useHistory } from "react-router"
import 'react-quill/dist/quill.snow.css';
function PostingBerita() {

    const loading = useContext(LoadingContext)
    const [author, setAuthor] = useState("")
    const [date, setDate] = useState("")
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")
    const [status, setStatus] = useState("0")
    const [url, setUrl] = useState("")
    const history = useHistory()
    const [kategori, setKategori] = useState("")
    const [text, setText] = useState('');
    const [imagePreview, setImagePreview] = useState(null);

    const quillRef = useRef<ReactQuill>(null);
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
                    "post_id": "",
                    "post_author": author,
                    "post_date": date,
                    "post_content": text,
                    "post_title": title,
                    "post_status": status,
                    "post_created": moment().format("YYYY-MM-DD hh:mm:ss"),
                    "post_updated": moment().format("YYYY-MM-DD hh:mm:ss"),
                    "post_group": kategori,
                    "post_url": url
                }
                addPostNews(query).then(resp => {
                    console.log(resp)
                    setAuthor("")
                    setContent("")
                    setTitle("")
                    loading.setLoading(false)
                    history.goBack()

                }).catch(err => {
                    console.log(err)
                    loading.setLoading(false)
                })
            }).catch(err => console.log(err,)
            )
        }

    }
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
                                        }else if(e.target.value == "berita"){
                                            setUrl("/berita")   
                                        }else if(e.target.value == "artikel"){
                                            setUrl("/artikel")   
                                        }else if(e.target.value == "pengumuman"){
                                            setUrl("/berita")   
                                        }
                                        setKategori(e.target.value)
                                    }}
                                    placeholder=""
                                    type="select"

                                >
                                    <option value="" disabled>Pilih Kategori</option>
                                    <option value={"post"}>Umum</option>
                                    <option value={"berita"}>Berita</option>
                                    <option value={"artikel"}>Artikel</option>
                                    <option value={"pengumuman"}>Pengumuman</option>
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
                                    <option value="" disabled>Pilih Status</option>
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
                                    onChange={(e) => setDate(moment(e.target.value).format("YYYY-MM-DD hh:mm:ss"))}
                                    type="date"
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup >
                            <Label>Content</Label>
                            <ReactQuill value={text} onChange={setText}
                                ref={quillRef}
                                modules={modules}
                                formats={formats}
                                placeholder="Compose your text..."
                                style={{ height: '200%' }} />



                        </FormGroup>



                    </Form>
                    <Col className="d-flex justify-content-end mt-4" >

                        <Button color="primary" onClick={() => PostNews()} className="btn btn-primary">
                            Tambah
                        </Button>
                    </Col>
                </CardBody>
            </Card>
        </div>
    )
}
export default PostingBerita