import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useParams } from "react-router-dom";
import * as data from "./datas/fakeData";
import { Parser } from "html-to-react";

const WBKFotoComponent = () => {
  const [wbkfoto, setwbkfoto] = useState<any[]>([]);

  const params: any = useParams();

  useEffect(() => {
    setwbkfoto(data.wbkFoto);
  }, []);
  return (
    <>
      {/* <HeaderComponent></HeaderComponent> */}

      {/* <!-- Portfolio Start --> */}
      <section className="portfolio-work">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <div className="row shuffle-wrapper">
                  {wbkfoto.map((item: any, index: number) => (
                    <div
                      className="col-lg-4 col-sm-6 portfolio-item shuffle-item"
                      data-groups='["design"]'
                    >
                      <img src={item.url} alt="" />
                      <h3>{item.name}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Portfolio End --> */}
      {/* <FooterComponent></FooterComponent> */}
    </>
  );
};

export default WBKFotoComponent;
