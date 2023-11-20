import moment from "moment";
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
  Toast,
} from "reactstrap";
import {
  addPostNews,
  getPostById,
  updatePostNews,
  uploadImage,
} from "../../../../services/api_web";
import { useHistory, useParams } from "react-router";
import LoadingContext from "../../../../contexts/LoadingContext";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";

function EditBerita() {
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  let param: any = useParams();
  const [status, setStatus] = useState("0");
  const [url, setUrl] = useState("");
  const [kategori, setKategori] = useState("post");
  const [type, setType] = useState(false);

  const [data, setData]: any = useState();
  const history = useHistory();
  const [fileName, setFileName] = useState<any>();
  const quillRef = useRef<ReactQuill>(null);
  const loading = useContext(LoadingContext);
  const [imagePreview, setImagePreview] = useState(null);
  const [isPDF, setIsPDF] = useState("false");
  const [urlPDF, setUrlPDF] = useState("");
  const [PDFName, setPDFName] = useState("");
  const [PDFPreview, setPDFPreview] = useState(null);

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

  const handlePDF = async (e) => {
    console.log(e.target.files[0]);
    setPDFName(e.target.files[0].name);
    let response = (await toBase64(e.target.files[0])) as string;
    if (response) {
      setPDFPreview(response);
      setUrlPDF(response.replaceAll("data:application/pdf;base64,", ""));
    }
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });
  async function PostNews() {
    loading.setLoading(true);
    if (isPDF == "true") {
      if (urlPDF) {
        try {
          let bodyContent = JSON.stringify({
            filename: PDFName.replaceAll(" ", "_").toLowerCase(),
            filebasenampat: urlPDF,
          });
          await uploadImage(bodyContent, localStorage.getItem("token"));
        } catch (error) {
          // .catch((err) => {
          let msg = "";
          if (error?.response?.status == 413) msg = "Size file terlalu besar";
          if (error?.response?.status == 500) msg = "Internal server error";
          toast(msg);
          loading.setLoading(false);
          // });
        }
      }

      let query = {
        post_id: data.post_id,
        post_author: author,
        post_date: date,
        post_content: PDFName.replaceAll(" ", "_").toLowerCase(),
        post_title: title,
        post_status: status,
        post_created: data.post_created,
        post_updated: moment().format("YYYY-MM-DD hh:mm:ss"),
        post_group: kategori,
        post_url: url,
      };
      updatePostNews(query)
        .then((resp) => {
          console.log(resp);
          setAuthor("");
          setContent("");
          setTitle("");
          loading.setLoading(false);
          history.goBack();
        })
        .catch((err) => {
          console.log(err);
          loading.setLoading(false);
        });
    } else if (quillRef.current) {
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
          let query = {
            post_id: data.post_id,
            post_author: author,
            post_date: moment(date).format("YYYY-MM-DD hh:mm:ss"),
            post_content: content,
            post_title: title,
            post_status: status,
            post_created: data.post_created,
            post_updated: moment().format("YYYY-MM-DD hh:mm:ss"),
            post_group: kategori,
            post_url: url,
          };
          updatePostNews(query)
            .then((resp) => {
              console.log(resp);
              setAuthor("");
              setContent("");
              setTitle("");
              loading.setLoading(false);
              window.location.replace("/web-admin-paw");
            })
            .catch((err) => {
              loading.setLoading(false);
              console.log(err);
            });
        })
        .catch((err) => {
          let msg = "";
          if (err?.response?.status == 413) msg = "Size file terlalu besar";
          if (err?.response?.status == 500) msg = "Internal server error";
          toast.error(msg);
          loading.setLoading(false);
        });
    }
  }
  useEffect(() => {
    loading.setLoading(true);
    let query = {
      post_id: param.id,
    };
    console.log(param.id);

    getPostById(query)
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
        setData(resp.data.Data);
        if (resp.data.Data.post_url.includes("/pdf/")) {
          setIsPDF("true");
          setPDFName(resp.data.Data.post_content);
          setPDFPreview(
            `https://rspaw.or.id/static/media/fileuploads/${resp.data.Data.post_content}`
          );
        }
        loading.setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        // window.location.replace("/web-admin-paw");
      });
  }, []);
  return (
    <div>
      <Card className="shadow-sm p-3 mb-5 bg-white rounded border-0">
        <CardBody>
          <Form>
            <FormGroup row>
              <Label for="exampleEmail" sm={2}>
                Kategori
              </Label>
              <Col sm={4}>
                <Input
                  value={kategori}
                  onChange={(e) => {
                    if (e.target.value == "post") {
                      setUrl("/post");
                    } else if (e.target.value == "berita") {
                      setUrl("/berita");
                    } else if (e.target.value == "artikel") {
                      setUrl("/artikel");
                    } else if (e.target.value == "pengumuman") {
                      setUrl("/pengumuman");
                    }

                    if (isPDF == "true") setUrl("/pdf");
                    setKategori(e.target.value);
                  }}
                  placeholder=""
                  type="select"
                >
                  <option disabled>Pilih Kategori</option>
                  <option value={"post"}>Berita</option>
                  <option value={"page"}>Halaman Statis</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleEmail" sm={2}>
                Author
              </Label>
              <Col sm={10}>
                <Input
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder=""
                  type="text"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleEmail" sm={2}>
                Title
              </Label>
              <Col sm={10}>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder=""
                  type="text"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleEmail" sm={2}>
                URL
              </Label>
              <Col sm={10}>
                <Input
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder=""
                  type="text"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleEmail" sm={2}>
                Status
              </Label>
              <Col sm={4}>
                <Input
                  value={status}
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                  placeholder=""
                  type="select"
                >
                  <option disabled>Pilih Status</option>
                  <option value={"0"}>Draft</option>
                  <option value={"1"}>Publish</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="examplePassword" sm={2}>
                Date
              </Label>
              <Col sm={4}>
                <Input
                  onClick={() => setType(true)}
                  value={moment(date).format("DD MMMM YYYY")}
                  onChange={(e) => setDate(e.target.value)}
                  type={type ? "date" : "text"}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Jenis Konten</Label>
              <Col sm={4}>
                <Input
                  value={isPDF}
                  onChange={(e) => {
                    setIsPDF(e.target.value);
                    if (e.target.value == "true") setUrl("/pdf");
                    setPDFPreview("");
                  }}
                  placeholder=""
                  type="select"
                >
                  <option value="" disabled>
                    Pilih Jenis Konten
                  </option>
                  <option value={"false"}>Text / Gambar</option>
                  <option value={"true"}>PDF</option>
                </Input>
              </Col>
            </FormGroup>
            <Row>
              <Label>Content</Label>{" "}
              {isPDF == "true" ? (
                <Col sm={10}>
                  <Input
                    // value={PDFName}
                    onChange={(e) => handlePDF(e)}
                    placeholder=""
                    type="file"
                  />
                  <embed width={400} height={500} src={PDFPreview} type="" />
                </Col>
              ) : (
                <ReactQuill
                  value={content}
                  onChange={setContent}
                  ref={quillRef}
                  modules={modules}
                  formats={formats}
                  placeholder="Compose your text..."
                  style={{ height: "200%" }}
                />
              )}
            </Row>
            <Col className="d-flex justify-content-end mt-4">
              <Button
                color="primary"
                className="m-2"
                onClick={() => PostNews()}
              >
                Update
              </Button>
              <Button
                color="danger"
                className="m-2"
                onClick={() => history.goBack()}
              >
                Kembali
              </Button>
            </Col>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}
export default EditBerita;
