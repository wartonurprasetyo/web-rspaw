import moment from "moment"
import React, { useState } from "react"
import { Button, Col, Form, FormGroup, FormText, Input, Label } from "reactstrap"
import { addPostNews } from "../../../../services/api_web"
function PostingBerita() {

    const [author, setAuthor] = useState("")
    const [date, setDate] = useState("")
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")

    function PostNews() {
        let query = {
            "post_id": "",
            "post_author": author,
            "post_date": date,
            "post_content": "<h3>" + content + "</h3>",
            "post_title": title,
            "post_status": "1",
            "post_created": "2023-07-01 03:03:11",
            "post_updated": moment().format("YYYY-MM-DD hh:mm:ss"),
            "post_group": "post",
            "post_url": "/post/test-header"
        }
        addPostNews(query).then(resp => {
            console.log(resp)
            setAuthor("")
            setContent("")
            setTitle("")

        }).catch(err => {
            console.log(err)

        })
    }
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
export default PostingBerita