import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";
import addSlider from "./addSlider";
import { getListSliderbyId, updateSlider } from "../../../../services/api_web";

const EditSlider = () => {
  const [image, setImage] = useState<any>(null);
  const [fileName, setFileName] = useState<any>();
  const [caption, setCaption] = useState("");
  const [source, setSource] = useState("");
  const [status, setStatus] = useState("0");
  const [number, setNumber] = useState(0);
  const history = useHistory();
  const paramId = useParams<any>();

  // Function to handle image preview
  const handleImagePreview = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    console.log(file);
    setFileName(file?.name);

    if (file) {
      try {
        convertToBase64(file)
          .then((base64String: any) => setImage(base64String))
          .catch((error) =>
            console.error("Error converting to base64:", error)
          );
      } catch (error) {
        console.error("Error reading image:", error);
      }
    }
  };

  const convertToBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          resolve(reader.result);
        } else {
          reject(new Error("Failed to convert image to base64."));
        }
      };

      reader.onerror = () => {
        reject(new Error("Error converting image to base64."));
      };

      reader.readAsDataURL(file);
    });
  };
  const readImageAsDataUrl = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (typeof reader.result === "string") {
          resolve(reader.result);
        } else {
          reject(new Error("Failed to read image."));
        }
      };

      reader.onerror = () => {
        reject(new Error("Error reading image."));
      };

      reader.readAsDataURL(file);
      console.log(image);
    });
  };
  function saveSlider() {
    var srcc = fileName.replaceAll(" ", "-");
    let query = {
      slider_src: source,
      slider_caption: caption,
      slider_number: number,
      slider_status: status,
      slider_id: paramId.id,
    };
    updateSlider(query)
      .then((result) => {
        toast.success("Succes");
        window.location.replace("/web-admin-paw/slider");
      })
      .catch((err) => {
        window.location.replace("/web-admin-paw/slider");
      });
  }
  const validImage = () => {
    saveSlider();
    let query = {
      filename: fileName,
      filebasenampat: image,
    };
    // uploadImage(query).then(response => {
    //     console.log(response);

    // }).catch(err => console.log(err,)
    // )
  };
  const getData = () => {
    let query = {
      slider_id: paramId.id,
    };
    getListSliderbyId(query)
      .then((response: any) => {
        console.log(response.data);
        setCaption(response.data.Data.data.slider_caption);
        setNumber(response.data.Data.data.slider_number);
        setSource(response.data.Data.data.slider_src);
        setStatus(response.data.Data.data.slider_status);
        setImage(
          "https://rspaw.or.id" +
            response.data.Data.data.slider_src?.replaceAll(
              "/home/simrs",
              "/static/media"
            )
        );
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle tag="h5">Ubah Slider</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <FormGroup>
              <Label>Caption</Label>
              <Input
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                type="text"
                placeholder="Input caption"
              />
            </FormGroup>
            <FormGroup>
              <Label>Source</Label>
              <Input
                type="text"
                value={source}
                onChange={(e) => setSource(e.target.value)}
                placeholder="Input URL"
              />
            </FormGroup>

            <Row>
              <FormGroup>
                <Label>Status</Label>
                <Input
                  placeholder="Select "
                  type="select"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="" disabled>
                    Select Status
                  </option>
                  <option value="1">Publish</option>
                  <option value="0">Draft</option>
                </Input>
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <Input
                  type="file"
                  o
                  onChange={handleImagePreview}
                  accept="image/*"
                ></Input>

                {/* Image preview */}
                {image && (
                  <div>
                    <h2>Image Preview</h2>
                    <img
                      src={image}
                      alt="Preview"
                      style={{ maxWidth: "300px" }}
                    />
                  </div>
                )}
              </FormGroup>
            </Row>
            <Col className="d-flex justify-content-end">
              <button onClick={validImage} className="btn btn-primary">
                Ubah
              </button>
            </Col>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default EditSlider;
