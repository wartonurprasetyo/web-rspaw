import { useContext, useEffect, useState } from "react"
import { Button, Card, CardBody, CardText, CardTitle, Table } from "reactstrap"
import { deletePosting, getAllMenus, getPostByGroup, reqToken } from "../../../../services/api_web";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faEdit, faRemove } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import LoadingContext from "../../../../contexts/LoadingContext";

const ListNavigasi = () => {
    const [data, setData]: any = useState([])

    const loading = useContext(LoadingContext)
    function deleteNav(e: any) {

    }
    function getData() {
        loading.setLoading(true)
        let query = {
            post_group: "post",
            post_status: "1"
        }
        getAllMenus().then(resp => {
            console.log(resp.data.nav, "h")
            setData(resp.data.nav)
            loading.setLoading(false)

        }).catch(err => {
            console.log(err);
            setData([])
            loading.setLoading(false)

        })
    }
    function childList(e: any) {
        return (<>
            <span>{e}</span><br />
        </>
        )
    }
    useEffect(() => {

        getData()
    }, []);
    return (
        <>
            <Card className="my-2 border-0">
                <CardBody>
                    <CardTitle tag="h5">
                        Data Menu
                    </CardTitle>
                    <Link to="/web-admin-paw/nav/add" className="btn btn-primary">Tambah</Link>
                </CardBody>

            </Card>
            <Card className="m-2 ">

                <Table striped>
                    <thead>
                        <tr>
                            <th style={{ maxWidth: 30 }}>
                                Nomor
                            </th>
                            <th>
                                Nama
                            </th>
                            <th>
                                URL
                            </th>
                            <th>
                                Sub Menu
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
                                      
                                        
                                          {el.parent_label}
                                       
                                    </td>
                                    <td className="align-middle">
                                        {el.parent_url}
                                    </td>
                                    <td>
                                        {el?.child?.map((element: any, idx: any) => (<div key={idx}>

                                            - {element.child_label}
                                        </div>
                                        ))}
                                    </td>
                                    <td className="align-middle">
                                        <Link to={"/web-admin-paw/news/edit/" + el.post_id} className="btn btn-primary ">

                                            <FontAwesomeIcon icon={faEdit} />
                                        </Link>
                                        <Button onClick={() => deleteNav(el.post_id)} className="btn btn-danger " style={{ marginLeft: 10 }}>
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
export default ListNavigasi;