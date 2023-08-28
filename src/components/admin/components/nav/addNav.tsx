import { useContext, useEffect, useState } from "react";
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { addPostNav, getAllMenus, getNavParent, listSubNav } from "../../../../services/api_web";
import LoadingContext from "../../../../contexts/LoadingContext";
function AddNav() {
    const loading = useContext(LoadingContext)
    const [namaParent, setNamaParent] = useState("")
    const [nomorParent, setNomorParent] = useState("")
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
        getNavParent().then((response) => {
            var a: any[] = []
            // console.log(response.data)
            response.data.Data.forEach((element: any) => {
        
                a.push({
                    label: element.nav_label,
                    value: element.nav_id
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
            // console.log(response);
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

    function AddParent(){

        let query = {
            "nav_id": "",
            "nav_parent_id": "8",
            "nav_label": namaParent,
            "nav_url": "#",
            "nav_number": nomorParent,
            "nav_status": "1"
        }
       
        console.log(query)
        loading.setLoading(true)
        addPostNav(query).then((response) => {
            console.log(response)
            setNamaParent("")
            setNomorParent("")

            loading.setLoading(false)
          

        }).catch((err) => {
            loading.setLoading(false)
        });
    }

    const changeData = (e: any, type: any) => {
        setData((prev: any) => ({ ...prev, [type]: e }));
    };
    const updateData = () => {
        console.log(data);

    }

    useEffect(() => {
        // getDataListParent()
    }, [])
    return (<>
        <Card>
            <CardHeader>
                <CardTitle tag="h5">
                    Tambah Parent
                </CardTitle>
            </CardHeader>
            <CardBody>

                <Form>
                    {/* <Row>
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
                                    onChange={(e) => {
                                        getDataListChild(e.target.value)
                                        changeData(e.target.value, "parent_id")
                                    }}
                                >
                                    <option value="" disabled>Select Child</option>
                                    {listChild.map((el: any, ind: any) => (
                                        <option value={el?.value} key={ind} >{el?.label}</option>
                                    )
                                    )}
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row> */}
                    <FormGroup>
                        <Label >
                            Nama Parent
                        </Label>
                        <Input
                            value={namaParent}
                            name="Parent"
                            type="text"
                            placeholder="Input Nama Parent"
                            onChange={(e) => setNamaParent(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label >
                            Nomor Parent
                        </Label>
                        <Input
                           value={nomorParent}
                            name="no_parent"
                            type="text"
                            placeholder="Input Nomor Parent"
                            onChange={(e) => setNomorParent(e.target.value)}
                        />
                    </FormGroup>
                    {/* <FormGroup>
                        <Label >
                            URL
                        </Label>
                        <Input
                            type="text"
                            placeholder="Input URL"
                        />
                    </FormGroup> */}

                    {/* <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label >
                                    Status
                                </Label>
                                <Input
                                    placeholder="Select "
                                    type="select"
                                >
                                    <option value="" disabled>Select Status</option>
                                    <option value="1" disabled>Publish</option>
                                    <option value="0" disabled>Draft</option>
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

                    </Row> */}
                    <Col className="d-flex justify-content-end" >
                        <Button color="primary" onClick={() => AddParent()} className="btn btn-primary">
                            Tambah
                        </Button>
                    </Col>
                </Form>
            </CardBody>
        </Card>
    </>)
}
export default AddNav;