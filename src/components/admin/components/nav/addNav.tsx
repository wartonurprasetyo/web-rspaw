import { useContext, useEffect, useState } from "react";
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { getAllMenus, listSubNav } from "../../../../services/api_web";
import LoadingContext from "../../../../contexts/LoadingContext";
function AddNav() {
    const loading = useContext(LoadingContext)
    const [data, setData] = useState<any>()
    const [listParen, setListParen] = useState([{
        label: "",
        value: ""
    }])
    const [listChild, setListChild] = useState([{
        label: "",
        value: ""
    }])
    const getDataListParent = () => {
        loading.setLoading(true)
        getAllMenus().then((response) => {
            var a: any[] = []
            response.data.nav.forEach((element: any) => {
                a.push({
                    label: element.parent_label,
                    value: element.parent_id
                })
            });
            setListParen(a)

            loading.setLoading(false)

        }).catch((err) => {
            loading.setLoading(false)
        });
    }
    const getDataListChild = (e: any) => {
        let query = {
            "nav_parent_id": e
        }
        loading.setLoading(true)
        listSubNav(query).then((response) => {
            var a: any[] = []
            console.log(response);

            response.data.Data.forEach((element: any) => {
                a.push({
                    label: element.nav_label,
                    value: element.nav_id
                })
            });
            setListChild(a)

            loading.setLoading(false)

        }).catch((err) => {
            loading.setLoading(false)
        });
    }

    const changeData = (e: any, type: any) => {
        setData((prev: any) => ({ ...prev, [type]: e }));
    };
    const updateData = () => {

    }

    useEffect(() => {
        getDataListParent()
    }, [])
    return (<>
        <Card>
            <CardHeader>
                <CardTitle tag="h5">
                    Tambah Menu
                </CardTitle>
            </CardHeader>
            <CardBody>

                <Form>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label >
                                    Parent
                                </Label>
                                <Input
                                    placeholder="Select Parent"
                                    type="select"
                                    value={data?.parent_id}
                                    onChange={(e) => {
                                        getDataListChild(e.target.value)
                                        changeData(e.target.value, "parent_id")
                                    }}
                                >
                                    <option value="" disabled>Select Parent</option>
                                    {listParen.map((el: any, ind: any) => (
                                        <option value={el?.value} key={ind} >{el?.label}</option>
                                    )
                                    )}
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label >
                                    Child
                                </Label>
                                <Input
                                    disabled={listChild[0].value == "" ? true : false}
                                    placeholder="Select Parent"
                                    type="select"
                                >
                                    <option value="" disabled>Select Child</option>
                                    {listChild.map((el: any, ind: any) => (
                                        <option value={el?.value} key={ind} >{el?.label}</option>
                                    )
                                    )}
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label >
                            Judul
                        </Label>
                        <Input
                            name="judul"
                            type="text"
                            placeholder="Input Judul"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label >
                            URL
                        </Label>
                        <Input
                            type="text"
                            placeholder="Input URL"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label >
                            Isi Postingan
                        </Label>
                        <Input
                            type="textarea"
                            placeholder="Input URL"
                        />
                    </FormGroup>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label >
                                    Status
                                </Label>
                                <Input
                                    placeholder="Select "
                                    type="select"
                                >
                                    <option value="" disabled>Select Parent</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label >
                                    Tanggal Post
                                </Label>
                                <Input
                                    placeholder="Select "
                                    type="datetime-local"
                                />

                            </FormGroup>
                        </Col>

                    </Row>
                    <Col className="d-flex justify-content-end" >
                        <button className="btn btn-primary">
                            Tambah
                        </button>
                    </Col>
                </Form>
            </CardBody>
        </Card>
    </>)
}
export default AddNav;