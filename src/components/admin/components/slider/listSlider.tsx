import { useContext, useEffect, useState } from "react"
import LoadingContext from "../../../../contexts/LoadingContext"
import { getListSlider } from "../../../../services/api_web"
import { Button, Card, CardBody, CardTitle, Table } from "reactstrap"
import { faEdit, faRemove } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import moment from "moment"
import { Link } from "react-router-dom"

const ListSlider = () => {
    const [data, setData]: any = useState([])

    const loading = useContext(LoadingContext)
    function deleteNav(e: any) {

    }
    function getData() {
        loading.setLoading(true)

        getListSlider().then(resp => {
            setData(resp.data.Data.data)
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
                        Data Slider
                    </CardTitle>
                    <Link to="/web-admin-paw/slider/add" className="btn btn-primary">Tambah</Link>
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
                                Caption
                            </th>
                            <th>
                                Source
                            </th>
                            <th>
                                Status
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
                            data.map((el: any, index: number) => (
                                <tr key={index}>
                                    <th scope="row">
                                        {index + 1}
                                    </th>
                                    <td>
                                        {el.slider_caption}
                                    </td>
                                    <td>
                                        {el.slider_src}
                                    </td>
                                    <td>
                                        {el.slider_status == 1 ? "Publish" : "Draft"}
                                    </td>
                                    <td>
                                        <Link to={"/web-admin-paw/slider/edit/" + el.slider_id} className="btn btn-primary ">

                                            <FontAwesomeIcon icon={faEdit} />
                                        </Link>

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

export default ListSlider;