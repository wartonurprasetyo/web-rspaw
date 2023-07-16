import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useParams } from "react-router-dom";
import * as data from "./datas/fakeData";
import { Parser } from "html-to-react";

const DireksiComponent = () => {
  // const [newsinfo, setNewsInfo] = useState<any>({});
  const [socmed, setSocmed] = useState<any[]>([]);
  const [icons, setIcon] = useState<any>({});
  const [direksi, setdireksi] = useState<any>({});

  const params: any = useParams();

  useEffect(() => {
    setdireksi(data.direksi);
  }, []);
  return (
    <>
      {/* <HeaderComponent></HeaderComponent> */}
      {/* <section className="page-title bg-contact-us">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <h1>Sejarah</h1>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 mt-5 mt-lg-0">
              <div className="pl-0 pl-lg-4">
                <h2 className="section-title section-title-post ">
                  Jajaran Direksi
                </h2>
                {Parser().parse(direksi)}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <FooterComponent></FooterComponent> */}
    </>
  );
};

export default DireksiComponent;
