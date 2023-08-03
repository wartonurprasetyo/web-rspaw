import { useContext, useEffect, useState } from "react"
import { Button, Card, CardBody, CardText, CardTitle, Table } from "reactstrap"
import { deletePosting, getPostByGroup, reqToken } from "../../../../services/api_web";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faEdit, faRemove } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import LoadingContext from "../../../../contexts/LoadingContext";
import { toast } from "react-toastify";

const TabelPost = () => {
    const loading = useContext(LoadingContext)
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

    const history = useHistory()
    const [clienToken, setClienToken] = useState("")
    function deletePost(value: any) {
        let bodyContent = JSON.stringify({
            "post_id": value
        })
        deletePosting(bodyContent).then(resp => {
            getData()
            toast.success("Sukses Menghapus")
        }).catch(err => {
            console.log(err)
            toast.error("Internal serve Error")
        })

    }
    function getData() {

        loading.setLoading(true);
        let query = {
            post_group: "post",
            post_status: "1"
        }
        getPostByGroup(query).then(resp => {
            setData(resp.data.Data)


            loading.setLoading(false);

        }).catch(err => {
            console.log(err);
            setData([])
            loading.setLoading(false);
            toast.error("Internal serve Error")
            history.push("/login")
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
                        {data.length == 0 ?
                            <tr >
                                <td className="text-center" colSpan={5}>
                                    Data Tidak Ditemukan
                                </td>
                            </tr>
                            :
                            data.map((el, index) => (
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
                            ))
                        }



                    </tbody>
                </Table>
            </Card>
        </>
    )
}

export default TabelPost;