import moment from "moment"
import React, { useEffect, useState } from "react"
import { Button, Col, Form, FormGroup, FormText, Input, Label } from "reactstrap"
import { addPostNews, getPostById, updatePostNews } from "../../../../services/api_web"
import { useParams } from "react-router"
function EditBerita() {

    const [author, setAuthor] = useState("")
    const [date, setDate] = useState("")
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")
    let param: any = useParams()

    const [data, setData]: any = useState()


    function PostNews() {
        let query = {
            "post_id": data.post_id,
            "post_author": author,
            "post_date": date,
            "post_content": "<h3>" + content + "</h3>",
            "post_title": title,
            "post_status": data.post_status,
            "post_created": data.post_created,
            "post_updated": moment().format("YYYY-MM-DD hh:mm:ss"),
            "post_group": data.post_group,
            "post_url": data.post_url
        }
        updatePostNews(query).then(resp => {
            console.log(resp)
            setAuthor("")
            setContent("")
            setTitle("")
            window.location.replace("/web-admin-paw")


        }).catch(err => {
            console.log(err)

        })
    }
    useEffect(() => {

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
            setContent(contenall)
            setTitle(resp.data.Data.post_title)
            setData(resp.data.Data)

        }).catch(err => {
            console.log(err);

        })
    }, []);
    return (
        <div>
            <Form>
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
                        for="examplePassword"
                        sm={2}
                    >
                        Date
                    </Label>
                    <Col sm={2}>
                        <Input
                            onChange={(e) => setDate(moment(e.target.value).format("YYYY-MM-DD hh:mm:ss"))}
                            type="date"
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


                <FormGroup
                    check
                    row
                >
                    <Col
                        sm={{
                            offset: 2,
                            size: 10
                        }}
                    >
                        <Button onClick={() => PostNews()}>
                            Submit
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    )
}
export default EditBerita