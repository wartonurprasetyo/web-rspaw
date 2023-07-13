import { useEffect, useState } from "react"
import { Button, Card, CardBody, CardText, CardTitle, Table } from "reactstrap"
import { deletePosting, getPostByGroup, reqToken } from "../../../../services/api_web";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faEdit, faRemove } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const TabelPost = () => {
    const [data, setData] = useState([{
        nav_id: "",
        post_author: "",
        post_content: "",
        post_created: "",
        post_date: "",
        post_group: "",
        post_id: "",
        post_status: "",
        post_title: "",
        post_updated: "",
        post_url: ""
    }])

    const [clienToken, setClienToken] = useState("")
    function deletePost(value: any) {
        let query = {
            post_id: value
        }

        console.log(value)
        deletePosting(value).then(resp => {
            getData()
        }).catch(err => { console.log(err) })

    }
    function getData() {
        let query = {
            post_group: "post",
            post_status: "1"
        }
        getPostByGroup(query).then(resp => {
            console.log(resp.data.Data);
            setData(resp.data.Data)

        }).catch(err => {
            console.log(err);

        })
    }
    useEffect(() => {

        getData()
    }, []);
    return (
        <>
            <Card className="my-2 border-0">
                <CardBody>
                    <CardTitle tag="h5">
                        Data Info Dan Berita
                    </CardTitle>
                    <Link to="/web-admin-paw/news/add" className="btn btn-primary">Tambah</Link>
                </CardBody>

            </Card>
            <Card className="m-2 ">

                <Table striped>
                    <thead>
                        <tr>
                            <th>
                                Nomor
                            </th>
                            <th>
                                Nama Author
                            </th>
                            <th>
                                Judul
                            </th>
                            <th>
                                Tanggal Dibuat
                            </th>
                            <th>
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((el, index) => (
                            <tr key={index}>
                                <th scope="row">
                                    {index + 1}
                                </th>
                                <td>
                                    {el.post_author}
                                </td>
                                <td>
                                    {el.post_title}
                                </td>
                                <td>
                                    {moment(el.post_created).format("DD-MMMM-YYYY")}
                                </td>
                                <td>
                                    <Link to={"/web-admin-paw/news/edit/" + el.post_id} className="btn btn-primary ">

                                        <FontAwesomeIcon icon={faEdit} />
                                    </Link>
                                    <Button onClick={() => deletePost(el.post_id)} className="btn btn-danger " style={{ marginLeft: 10 }}>
                                        <FontAwesomeIcon icon={faRemove} />
                                    </Button>
                                </td>
                            </tr>
                        ))}


                    </tbody>
                </Table>
            </Card>
        </>
    )
}

export default TabelPost;