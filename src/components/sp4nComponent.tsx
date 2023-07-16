import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useParams } from "react-router-dom";
import * as data from "./datas/fakeData";
import { Parser } from "html-to-react";

const SP4NComponent = () => {
  // const [newsinfo, setNewsInfo] = useState<any>({});
  const [socmed, setSocmed] = useState<any[]>([]);
  const [icons, setIcon] = useState<any>({});
  const [SP4N, setSP4N] = useState<any>({});

  const params: any = useParams();

  useEffect(() => {
    setSP4N(data.SP4N);
  }, []);
  return (
    <>
      {/* <HeaderComponent></HeaderComponent> */}
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 mt-5 mt-lg-0">
              <div className="pl-0 pl-lg-4">
                <h2 className="section-title section-title-post ">
                  SP4N Lapor
                </h2>
                {Parser().parse(SP4N)}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <FooterComponent></FooterComponent> */}
    </>
  );
};

export default SP4NComponent;
