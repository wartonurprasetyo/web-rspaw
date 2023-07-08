import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useParams } from "react-router-dom";
import * as data from "./fakeData";
import { Parser } from "html-to-react";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const MaklumatComponent = () => {
  // const [newsinfo, setNewsInfo] = useState<any>({});
  const [maklumat, setmaklumat] = useState<any[]>([]);
  const [icons, setIcon] = useState<any>({});
  const [visimisi, setvisimisi] = useState<any>({});

  const params: any = useParams();
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  useEffect(() => {
    // setvisimisi(data.visimisi);
    setmaklumat(data.maklumatPelayanan);
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

      {/* <!-- Portfolio Start --> */}
      <section className="portfolio-work">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <LightGallery
                  onInit={onInit}
                  speed={500}
                  plugins={[lgThumbnail, lgZoom]}
                >
                  {maklumat.map((item, index) => (
                    <a href={item.url}>
                      <img width={"33%"} alt={`${item.name}`} src={item.url} />
                    </a>
                  ))}
                </LightGallery>
                {/* <div className="portfolio-menu">
                  <div
                    className="btn-group btn-group-toggle justify-content-center"
                    data-toggle="buttons"
                  >
                    <label className="btn btn-sm btn-primary active">
                      <input
                        type="radio"
                        name="shuffle-filter"
                        value="all"
                        checked={true}
                      />
                      All
                    </label>
                    <label className="btn btn-sm btn-primary">
                      <input
                        type="radio"
                        name="shuffle-filter"
                        value="design"
                      />
                      UI/UX Design
                    </label>
                    <label className="btn btn-sm btn-primary">
                      <input type="radio" name="shuffle-filter" value="video" />
                      Video
                    </label>
                    <label className="btn btn-sm btn-primary">
                      <input
                        type="radio"
                        name="shuffle-filter"
                        value="illustration"
                      />
                      ILLUSTRATION
                    </label>
                  </div>
                </div>
                <div className="row shuffle-wrapper">
                  <div
                    className="col-lg-4 col-sm-6 portfolio-item shuffle-item"
                    data-groups='["design"]'
                  >
                    <img src="images/portfolio/work1.jpg" alt="" />
                    <div className="portfolio-hover">
                      <div className="portfolio-content">
                        <a
                          href="images/portfolio/work1.jpg"
                          className="portfolio-popup"
                        >
                          <i className="icon ion-search"></i>
                        </a>
                        <a className="h3" href="portfolio-single.html">
                          Rio Furniture
                        </a>
                        <p>Labore et dolore magna aliqua. Ut enim ad </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-sm-6 portfolio-item shuffle-item"
                    data-groups='["design","illustration"]'
                  >
                    <img src="images/portfolio/work2.jpg" alt="" />
                    <div className="portfolio-hover">
                      <div className="portfolio-content">
                        <a
                          href="images/portfolio/work2.jpg"
                          className="portfolio-popup"
                        >
                          <i className="icon ion-search"></i>
                        </a>
                        <a className="h3" href="portfolio-single.html">
                          Rio Furniture
                        </a>
                        <p>Labore et dolore magna aliqua. Ut enim ad </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-sm-6 portfolio-item shuffle-item"
                    data-groups='["illustration"]'
                  >
                    <img src="images/portfolio/work3.jpg" alt="" />
                    <div className="portfolio-hover">
                      <div className="portfolio-content">
                        <a
                          href="images/portfolio/work3.jpg"
                          className="portfolio-popup"
                        >
                          <i className="icon ion-search"></i>
                        </a>
                        <a className="h3" href="portfolio-single.html">
                          Rio Furniture
                        </a>
                        <p>Labore et dolore magna aliqua. Ut enim ad </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-sm-6 portfolio-item shuffle-item"
                    data-groups='["video","illustration"]'
                  >
                    <img src="images/portfolio/work4.jpg" alt="" />
                    <div className="portfolio-hover">
                      <div className="portfolio-content">
                        <a
                          href="images/portfolio/work4.jpg"
                          className="portfolio-popup"
                        >
                          <i className="icon ion-search"></i>
                        </a>
                        <a className="h3" href="portfolio-single.html">
                          Rio Furniture
                        </a>
                        <p>Labore et dolore magna aliqua. Ut enim ad </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-sm-6 portfolio-item shuffle-item"
                    data-groups='["design","illustration"]'
                  >
                    <img src="images/portfolio/work5.jpg" alt="" />
                    <div className="portfolio-hover">
                      <div className="portfolio-content">
                        <a
                          href="images/portfolio/work5.jpg"
                          className="portfolio-popup"
                        >
                          <i className="icon ion-search"></i>
                        </a>
                        <a className="h3" href="portfolio-single.html">
                          Rio Furniture
                        </a>
                        <p>Labore et dolore magna aliqua. Ut enim ad </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-sm-6 portfolio-item shuffle-item"
                    data-groups='["design","video"]'
                  >
                    <img src="images/portfolio/work6.jpg" alt="" />
                    <div className="portfolio-hover">
                      <div className="portfolio-content">
                        <a
                          href="images/portfolio/work6.jpg"
                          className="portfolio-popup"
                        >
                          <i className="icon ion-search"></i>
                        </a>
                        <a className="h3" href="portfolio-single.html">
                          Rio Furniture
                        </a>
                        <p>Labore et dolore magna aliqua. Ut enim ad </p>
                      </div>
                    </div>
                  </div>
                </div> */}
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

export default MaklumatComponent;
