import { Button, Card, CardBody, CardHeader, CardTitle, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

function AddNav() {
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
                                >
                                    <option value="" disabled>Select Parent</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label >
                                    Child
                                </Label>
                                <Input
                                    placeholder="Select Parent"
                                    type="select"
                                >
                                    <option value="" disabled>Select Child</option>
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