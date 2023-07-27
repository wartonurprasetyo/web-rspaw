import moment from "moment"
import React, { useContext, useState } from "react"
import { Button, Card, CardBody, Col, Form, FormGroup, FormText, Input, Label } from "reactstrap"
import { addPostNews } from "../../../../services/api_web"
import LoadingContext from "../../../../contexts/LoadingContext"
function PostingBerita() {

    const loading = useContext(LoadingContext)
    const [author, setAuthor] = useState("")
    const [date, setDate] = useState("")
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")
    const [status, setStatus] = useState("0")
    const [url, setUrl] = useState("")
    const [kategori, setKategori] = useState("")

    function PostNews() {
        loading.setLoading(true)
        let query = {
            "post_id": "",
            "post_author": author,
            "post_date": date,
            "post_content": "<h3>" + content + "</h3>",
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
            window.location.replace("/web-admin-paw")

        }).catch(err => {
            console.log(err)
            loading.setLoading(false)
        })
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
                                        };
                                        setKategori(e.target.value)
                                    }}
                                    placeholder=""
                                    type="select"

                                >
                                    <option value="" disabled>Pilih Kategori</option>
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

                        <FormGroup row>
                            <Label
                                for="exampleText"
                                sm={2}
                            >
                                Content
                            </Label>
                            <Col sm={10}>
                                <Input
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    type="textarea"
                                    rows="10"
                                />
                            </Col>
                        </FormGroup>


                        <Col className="d-flex justify-content-end" >

                            <button onClick={() => PostNews()} className="btn btn-primary">
                                Tambah
                            </button>
                        </Col>
                    </Form>
                </CardBody>
            </Card>
        </div>
    )
}
export default PostingBerita