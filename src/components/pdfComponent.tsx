import { Parser } from "html-to-react";
import { useContext, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useParams } from "react-router-dom";
import * as data from "./datas/fakeData";
import * as dataPages from "./datas/pages";
import LoadingContext from "../contexts/LoadingContext"; // import loading

import PDFViewer from "pdf-viewer-reactjs";
import Penerimaan_TTK_Mitra from "../assets/pdf/Penerimaan_TTK_Mitra.pdf";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const PdfComponent = () => {
  const [dataContent, setContentData] = useState("");
  const [titleContent, setTitleContentData] = useState("");
  const [pageTitleContent, setPageTitleContentData] = useState("");

  const params: any = useParams();
  const loading = useContext(LoadingContext); // get state & function loading

  const getDataPage = () => {
    let id = params.id;

    if (!id) return;
    // console.log(params);
    // let subid = params.subid;
    // if (subid) id = `${id}-${subid}`;
    // let splited = id.split("-");
    // let removeValue = ["page", "profil", "pofil", "profile", "pofile"];
    // let newId = splited.filter((item: any) => !removeValue.includes(item));
    // console.log(splited, newId);
    setContentData("");
    setTitleContentData("");
    setPageTitleContentData("");
    if (id == "Penerimaan_TTK_Mitra")
      setContentData("../assets/pdf/Penerimaan_TTK_Mitra.pdf");
    loading.setLoading(true);
    // setTimeout(() => {
    // }, 900);
    setTimeout(() => {
      loading.setLoading(false);
      // setContentData(dataPages.content[newId.join("")]);
      // setTitleContentData(dataPages.title[newId.join("")]);
      // setPageTitleContentData(dataPages.pageTitle[newId.join("")]);
    }, 1000);

    // get data page by url
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
                  src={Penerimaan_TTK_Mitra}
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
