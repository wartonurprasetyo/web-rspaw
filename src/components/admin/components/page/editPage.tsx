import moment from "moment";
import { useContext, useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router";
import {
  Card,
  CardBody,
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  CardTitle,
} from "reactstrap";
import LoadingContext from "../../../../contexts/LoadingContext";
import {
  addPage,
  getAllNavParent,
  getPageById,
  listSubNav,
  updatePage,
  uploadImage,
} from "../../../../services/api_web";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditPage = () => {
  const loading = useContext(LoadingContext);
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("0");
  const [url, setUrl] = useState("");
  const [type, setType] = useState(false);
  const [kategori, setKategori] = useState("page");

  const [navChildId, setNavChildId] = useState("");
  const [navId, setNavId] = useState("");
  const [navNumber, setNavNumber] = useState("");
  const [navParentId, setNavParentId] = useState("");
  const param: any = useParams();

  const [urlParent, setUrlParent] = useState("");

  const [data, setData]: any = useState([]);
  const [image, setImage] = useState<any>(null);
  const [fileName, setFileName] = useState<any>();
  const quillRef = useRef<ReactQuill>(null);
  const [filePath, setFilePath] = useState("");
  const handleImagePreview = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    console.log(file);
    setFileName(file?.name);

    if (file) {
      try {
        convertToBase64(file)
          .then((base64String: any) => {
            setImage(base64String);
            validImage(base64String);
          })
          .catch((error) =>
            console.error("Error converting to base64:", error)
          );
      } catch (error) {
        console.error("Error reading image:", error);
      }
    }
  };
  const validImage = (e) => {
    // saveSlider()
    let file64 = e.replaceAll("data:image/jpeg;base64,", "");
    console.log(file64);

    let bodyContent = JSON.stringify({
      filename: fileName,
      filebasenampat: e,
    });
    uploadImage(bodyContent, localStorage.getItem("token"))
      .then((response) => {
        setFilePath(response.data.Filepath);
      })
      .catch((err) => console.log(err));
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

  function deleteNav(e: any) {}
  const history = useHistory();

  const [listParen, setListParen] = useState([
    {
      label: "",
      value: "",
      url: "",
    },
  ]);
  const [listChild, setListChild] = useState([
    {
      label: "",
      value: "",
      url: "",
    },
  ]);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "font",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];
  const getDataListParent = () => {
    loading.setLoading(true);
    getAllNavParent()
      .then((response) => {
        var a: any[] = [];
        response.data.Data.forEach((element: any) => {
          a.push({
            label: element.nav_label,
            value: element.nav_id,
            url: element.nav_url,
          });
        });
        setListParen(a);

        loading.setLoading(false);
      })
      .catch((err) => {
        loading.setLoading(false);
      });
  };
  const getDataListChild = (e: any) => {
    let query = {
      nav_parent_id: e,
    };
    loading.setLoading(true);
    listParen.forEach((element) => {
      if (element.value === e) {
        setUrl(element.url);
        setUrlParent(element.url);
      }
    });
    listSubNav(query)
      .then((response) => {
        var a: any[] = [];
        console.log(response);
        if (response.data.Data.length !== 0) {
          response.data.Data.forEach((element: any) => {
            a.push({
              label: element.nav_label,
              value: element.nav_id,
              url: element.nav_url,
            });
          });
          setListChild(a);
          loading.setLoading(false);
        } else {
          loading.setLoading(false);
          setListChild([]);
        }
      })
      .catch((err) => {
        loading.setLoading(false);
      });
  };

  const postData = () => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      const quillDelta = editor.getContents();
      const imageTags = quillDelta.ops.filter(
        (op) => op.insert && op.insert.image
      );

      const imageUrls = imageTags.map((op) => {
        const imageUrl = op.insert.image;
        return typeof imageUrl === "string" ? imageUrl : imageUrl.src;
      });
      let cek = imageUrls[0].replaceAll("data:image/jpeg;base64,", "");
      let bodyContent = JSON.stringify({
        filename: title + ".jpeg",
        filebasenampat: cek,
      });
      uploadImage(bodyContent, localStorage.getItem("token"))
        .then((response) => {
          setFilePath(response.data.Filepath);
          let bodyContent = JSON.stringify({
            post_id: param.id,
            post_author: author,
            post_date: date,
            post_content: content,
            post_title: title,
            post_status: status,
            post_created: moment().format("YYYY-MM-DD hh:mm:ss"),
            post_updated: moment().format("YYYY-MM-DD hh:mm:ss"),
            post_group: kategori,
            post_url: url,
            nav_parent_id: navParentId,
            nav_child_id: navChildId,
            nav_id: navId,
            nav_number: navNumber,
          });

          updatePage(bodyContent, localStorage.getItem("token"))
            .then((response) => {
              console.log(response);
              history.goBack();
              toast.success("Sukses");
            })
            .catch((err) => {
              console.log(err);
              toast.error("Gagal");
            });
        })
        .catch((err) => console.log(err));
    }
    // loading.setLoading(true)
  };

  useEffect(() => {
    getDataListParent();
    loading.setLoading(true);
    let query = {
      post_id: param.id,
    };
    console.log(param.id);

    getPageById(query)
      .then((resp) => {
        var conten = resp.data.Data.post_content.replaceAll("<h3>", "");
        var contenall = conten.replaceAll("</h3>", "");
        console.log(resp.data.Data, contenall);
        setAuthor(resp.data.Data.post_author);
        setDate(resp.data.Data.post_date);
        setContent(resp.data.Data.post_content);
        setTitle(resp.data.Data.post_title);
        setStatus(resp.data.Data.post_status);
        setUrl(resp.data.Data.post_url);
        setKategori(resp.data.Data.post_group);
        setNavChildId(resp.data.Data.nav_child_id);
        setNavId(resp.data.Data.nav_id);
        setNavParentId(resp.data.Data.nav_parent_id);
        setNavNumber(resp.data.Data.nav_number);
        setData(resp.data.Data);
        loading.setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        history.goBack();
      });
  }, []);
  return (
    <>
      <Card className="my-2 border-0">
        <CardBody>
          <CardTitle tag="h5">Edit Page</CardTitle>
        </CardBody>
      </Card>
      <Card className="shadow-sm p-3 mb-5 bg-white rounded border-0">
        <CardBody>
          <Form>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label>Parent</Label>
                  <Input
                    placeholder="Select Parent"
                    type="select"
                    value={navParentId}
                    onChange={(e) => {
                      setNavParentId(e.target.value);
                      getDataListChild(e.target.value);
                    }}
                  >
                    <option value="" disabled>
                      Select Parent
                    </option>
                    {listParen.map((el: any, ind: any) => (
                      <option value={el?.value} key={ind}>
                        {el?.label}
                      </option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Child</Label>
                  <Input
                    placeholder="Select Child"
                    type="select"
                    value={navChildId}
                    onChange={(e) => {
                      setNavChildId(e.target.value);

                      listChild.forEach((ele) => {
                        if (ele.value === e.target.value) {
                          setUrl(
                            urlParent != "#" ? urlParent + ele.url : ele.url
                          );
                        }
                      });
                    }}
                  >
                    <option value="" disabled>
                      Select Child
                    </option>
                    {listChild.map((el: any, ind: any) => (
                      <option value={el?.value} key={ind}>
                        {el?.label}
                      </option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label>Kategori</Label>

                  <Input
                    value={kategori}
                    onChange={(e) => {
                      setKategori(e.target.value);
                    }}
                    placeholder=""
                    type="select"
                  >
                    <option value="" disabled>
                      Pilih Kategori
                    </option>
                    {/* <option value={"post"}>Berita</option> */}
                    <option value={"page"}>Halaman Statis</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>Author</Label>

                  <Input
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder=""
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label>Title</Label>
                  <Input
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    onBlur={(e) => {
                      var post = url + "/";
                      var tes = e.target.value
                        .replaceAll(" ", "-")
                        .toLowerCase();
                      setUrl(post + tes);
                    }}
                    placeholder=""
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>URL</Label>
                  <Input
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder=""
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label>Status</Label>
                  <Input
                    value={status}
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                    placeholder=""
                    type="select"
                  >
                    <option value="" disabled>
                      Pilih Status
                    </option>
                    <option value={"0"}>Draft</option>
                    <option value={"1"}>Publish</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="examplePassword" sm={2}>
                    Date
                  </Label>
                  <Input
                    type={type ? "date" : "text"}
                    value={moment(date).format("YYYY-MM-DD hh:mm:ss")}
                    onChange={(e) =>
                      setDate(
                        moment(e.target.value).format("YYYY-MM-DD hh:mm:ss")
                      )
                    }
                  />
                </FormGroup>
              </Col>
            </Row>
            {/* <Row>
                            <FormGroup>
                                <Label >
                                    Upload Image
                                </Label>
                                <Input type="file" onChange={handleImagePreview} accept="image/*" />


                                {image && (
                                    <div className="mt-4">
                                        <img src={image} alt="Preview" style={{ maxWidth: '300px' }} />
                                    </div>
                                )}
                            </FormGroup>
                        </Row> */}
            {/* <Row>

                            <FormGroup >
                                <Label
                                    for="exampleText"
                                    sm={2}
                                >
                                    Content
                                </Label>

                                <Input
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    type="textarea"
                                    rows="10"
                                />

                            </FormGroup>
                        </Row> */}
            <Row>
              <ReactQuill
                value={content}
                onChange={setContent}
                ref={quillRef}
                modules={modules}
                formats={formats}
                placeholder="Compose your text..."
                style={{ height: "200%" }}
              />
            </Row>

            <Col className="d-flex justify-content-end mt-4 ">
              <Button
                color="primary"
                onClick={() => postData()}
                className=" m-1"
              >
                Update
              </Button>
              <Button
                color="danger"
                onClick={() => history.goBack()}
                className="m-1"
              >
                Kembali
              </Button>
            </Col>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};
export default EditPage;
