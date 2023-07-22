import { useState } from "react";
import { Card, CardHeader, CardTitle, CardBody, Form, Row, Col, FormGroup, Label, Input } from "reactstrap";
import { addSlider, uploadImage } from "../../../../services/api_web";
import { toast } from "react-toastify";
import { useHistory } from "react-router";

const AddSlider = () => {
    const [image, setImage] = useState<any>(null);
    const [fileName, setFileName] = useState<any>();
    const [caption, setCaption] = useState("")
    const [source, setSource] = useState("")
    const [status, setStatus] = useState("0")
    const [number, setNumber] = useState(0)
    const history = useHistory()

    // Function to handle image preview
    const handleImagePreview = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        console.log(file);
        setFileName(file?.name)


        if (file) {
            try {
                convertToBase64(file)
                    .then((base64String: any) => setImage(base64String))
                    .catch((error) => console.error('Error converting to base64:', error));
            } catch (error) {
                console.error('Error reading image:', error);
            }
        }
    };

    const convertToBase64 = (file: any) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onloadend = () => {
                if (typeof reader.result === 'string') {
                    resolve(reader.result);
                } else {
                    reject(new Error('Failed to convert image to base64.'));
                }
            };

            reader.onerror = () => {
                reject(new Error('Error converting image to base64.'));
            };

            reader.readAsDataURL(file);
        });
    };
    const readImageAsDataUrl = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = () => {
                if (typeof reader.result === 'string') {
                    resolve(reader.result);
                } else {
                    reject(new Error('Failed to read image.'));
                }
            };

            reader.onerror = () => {
                reject(new Error('Error reading image.'));
            };

            reader.readAsDataURL(file);
            console.log(image);

        });
    };
    function saveSlider() {
        var srcc = fileName.replaceAll(" ", "-")
        let query = {
            "slider_src": "/path/image/" + fileName,
            "slider_caption": caption,
            "slider_number": "1",
            "slider_status": status
        }
        addSlider(query).then(resp => {
            toast.success("Succes")
            history.push("/web-admin-paw/slider")
        }).catch(err => {
            toast.error("Failed")
            history.push("/web-admin-paw/slider")
        }
        )
    }
    const validImage = () => {
        saveSlider()
        let query =
        {
            "filename": fileName,
            "filebasenampat": image

        }
        // uploadImage(query).then(response => {
        //     console.log(response);

        // }).catch(err => console.log(err,)
        // )
    }
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle tag="h5">
                        Tambah Slider
                    </CardTitle>
                </CardHeader>
                <CardBody>

                    <Form>

                        <FormGroup>
                            <Label >
                                Caption
                            </Label>
                            <Input
                                name="judul"
                                value={caption}
                                onChange={(e) => setCaption(e.target.value)}
                                type="text"
                                placeholder="Input Judul"
                            />
                        </FormGroup>
                        {/* <FormGroup>
                        <Label >
                            Source
                        </Label>
                        <Input
                            type="text"
                            placeholder="Input URL"
                        />
                    </FormGroup> */}

                        <Row>

                            <FormGroup>
                                <Label >
                                    Status
                                </Label>
                                <Input
                                    placeholder="Select "
                                    type="select"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                >
                                    <option value="" disabled>Select Status</option>
                                    <option value="1" >Publish</option>
                                    <option value="0" >Draft</option>
                                </Input>
                            </FormGroup>



                        </Row>
                        <Row>
                            <Input type="file" o onChange={handleImagePreview} accept="image/*" />

                            {/* Image preview */}
                            {image && (
                                <div>
                                    <h2>Image Preview</h2>
                                    <img src={image} alt="Preview" style={{ maxWidth: '300px' }} />
                                </div>
                            )}
                        </Row>
                        <Col className="d-flex justify-content-end" >
                            <button onClick={validImage} className="btn btn-primary">
                                Tambah
                            </button>
                        </Col>
                    </Form>
                </CardBody>
            </Card>
        </>
    )
}

export default AddSlider;