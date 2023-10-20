import { Parser } from "html-to-react";
import { useContext, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useHistory, useParams } from "react-router-dom";
import * as data from "./datas/fakeData";
import * as dataPages from "./datas/pages";
import LoadingContext from "../contexts/LoadingContext"; // import loading

import PDFViewer from "pdf-viewer-reactjs";
import PENGUMUMAN_SDM_MITRA_2023 from "../assets/pdf/PENGUMUMAN_SDM_MITRA_2023.pdf";
import Penerimaan_TTK_Mitra from "../assets/pdf/Penerimaan_TTK_Mitra.pdf";
import Hasil_Seleksi_TTK_Mitra_2023 from "../assets/pdf/Hasil_Seleksi_TTK_Mitra_2023.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import { getPostByUrl } from "../services/api_web";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const PdfComponent = () => {
  const [dataContent, setContentData] = useState("");
  const [titleContent, setTitleContentData] = useState("");
  const [pageTitleContent, setPageTitleContentData] = useState("");
  const pathUrl: any = useHistory();
  const [isFetch, setIsFetch] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [dataPost, setDataPost] = useState<any>({});

  const params: any = useParams();
  const loading = useContext(LoadingContext); // get state & function loading

  const getDataPage = () => {
    let id = params.id;

    if (!id) return;
    setContentData("");
    setTitleContentData("");
    setPageTitleContentData("");
    if (id == "Penerimaan_TTK_Mitra") {
      setContentData(Penerimaan_TTK_Mitra);
      setTitleContentData("Penerimaan TTK Mitra");
      setPageTitleContentData("Pengumuman");
    } else if (id == "Hasil_Seleksi_TTK_Mitra_2023") {
      setContentData(Hasil_Seleksi_TTK_Mitra_2023);
      setTitleContentData("Hasil Seleksi TTK Mitra 2023");
      setPageTitleContentData("Pengumuman");
    } else if (id == "PENGUMUMAN_SDM_MITRA_2023") {
      setContentData(PENGUMUMAN_SDM_MITRA_2023);
      setTitleContentData("Pengumuman SDM Mitra 2023");
      setPageTitleContentData("Pengumuman");
    } else {
      let newData = {
        post_url: `${pathUrl.location.pathname}`,
        // post_url: `${url}`,
      };
      loading.setLoading(true);
      getPostByUrl(newData)
        .then((res) => {
          loading.setLoading(false);
          console.log(res.data);
          setTitleContentData(res.data.Data.post_title);
          setPageTitleContentData(res.data.Data.post_group);
          setIsFetch(true);
          setDataPost(res.data.Data);
          setIsNotFound(res.data.Message == "Record not found");
        })
        .catch((err) => {
          loading.setLoading(false);
          console.log(err);
        });
    }

    loading.setLoading(true);
    setTimeout(() => {
      loading.setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    getDataPage();
  }, [params.id]);
  return (
    <>
      {/* <HeaderComponent></HeaderComponent> */}
      <section className="page-title bg-contact-us">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <h1>{pageTitleContent}</h1>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section page-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 mt-5 mt-lg-0">
              <div className="pl-0 pl-lg-4">
                <h2 className="section-title section-title-page">
                  {titleContent}
                </h2>
                <embed
                  src={
                    isFetch
                      ? `https://rspaw.or.id/static/media/fileuploads/${dataPost.post_content}`
                      : dataContent
                  }
                  width="100%"
                  height="800"
                  type="application/pdf"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <FooterComponent></FooterComponent> */}
    </>
  );
};

export default PdfComponent;
