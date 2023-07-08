import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useParams } from "react-router-dom";
import * as data from "./fakeData";
import { Parser } from "html-to-react";

const UpayaComponent = () => {
  // const [newsinfo, setNewsInfo] = useState<any>({});
  const [socmed, setSocmed] = useState<any[]>([]);
  const [icons, setIcon] = useState<any>({});
  const [upaya, setupaya] = useState<any>({});

  const params: any = useParams();

  useEffect(() => {
    setupaya(data.upaya);
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
                <h2 className="section-title section-title-post ">6 Upaya</h2>
                {Parser().parse(upaya)}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <FooterComponent></FooterComponent> */}
    </>
  );
};

export default UpayaComponent;
