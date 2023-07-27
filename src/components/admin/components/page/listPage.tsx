import { useContext, useEffect, useState } from "react"
import LoadingContext from "../../../../contexts/LoadingContext"
import { useHistory } from "react-router"
import { deletePage, getAllPage } from "../../../../services/api_web"
import { faEdit, faRemove } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { Card, CardBody, CardTitle, Table, Button } from "reactstrap"
import { toast } from "react-toastify"

const ListPage = () => {
    const [data, setData]: any = useState([])

    const loading = useContext(LoadingContext)
    function deleteNav(e: any, nav: any) {
        // loading.setLoading(true)
        let bodyContent = JSON.stringify({
            "post_id": e,
            "nav_id": nav
        }

        )

        deletePage(bodyContent, localStorage.getItem("token")).then(resp => {
            getData()
            toast.success("Sukses Menghapus")
        }).catch(err => {
            console.log(err)
            toast.error("Internal serve Error")
        })

    }
    const history = useHistory()
    function getData() {
        loading.setLoading(true)

        getAllPage().then(resp => {
            setData(resp.data.Data)
            loading.setLoading(false)

        }).catch(err => {
            console.log(err);
            setData([])
            loading.setLoading(false)
            history.push('/login')

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
                        Data Page
                    </CardTitle>
                    <Link to="/web-admin-paw/page/add" className="btn btn-primary">Tambah</Link>
                </CardBody>

            </Card>
            <Card className="m-2 ">

                <Table striped>
                    <thead>
                        <tr>
                            <th style={{ maxWidth: 30 }}>
                                No
                            </th>
                            <th>
                                Judul
                            </th>
                            <th>
                                URL
                            </th>
                            <th>
                                Status
                            </th>
                            <th>
                                Author
                            </th>
                            <th>
                                No Navigasi
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
                            data.map((el: any, index: any) => (
                                <tr key={index}>
                                    <th scope="row" className="text-center align-middle">
                                        {index + 1}
                                    </th>
                                    <td className="align-middle">
                                        {el.post_title}
                                    </td>
                                    <td className="align-middle">
                                        {el.post_url}
                                    </td>
                                    <td>
                                        {el.post_status === "1" ? "Publish" : "Draft"}
                                    </td>
                                    <td className="align-middle">
                                        {el.post_author}
                                    </td>
                                    <td className="align-middle">
                                        {el.nav_number}
                                    </td>
                                    <td className="align-middle">
                                        <Link to={"/web-admin-paw/page/edit/" + el.post_id} className="btn btn-primary ">

                                            <FontAwesomeIcon icon={faEdit} />
                                        </Link>
                                        <Button onClick={() => deleteNav(el.post_id, el.nav_id)} className="btn btn-danger " style={{ marginLeft: 10 }}>
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
export default ListPage;