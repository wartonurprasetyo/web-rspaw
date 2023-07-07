import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Parser } from "html-to-react";
import { formatDate, imageOnError, trimText } from "../assets/js/__global";
import * as data from "./fakeData";
import FooterComponent from "./template/footerComponent";
import HeaderComponent from "./template/headerComponent";
import { Link } from "react-router-dom";

const BlogsComponent = () => {
  const [slider, setSlider] = useState<any[]>([]);
  const [infos, setInfos] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const [newsinfo, setNewsInfo] = useState<any[]>([]);
  const [artikel, setArtikel] = useState<any[]>([]);
  const [pengumuman, setPengumuman] = useState<any[]>([]);

  // console.log(infos);
  useEffect(() => {
    // setSlider(data.slider);
    // setInfos(data.info);
    // setServices(data.services);
    setNewsInfo(data.newsinfo);
    // setArtikel(data.newsinfo);
    // setPengumuman(data.newsinfo);
  }, []);
  return (
    <>
      {/* <HeaderComponent></HeaderComponent> */}
      <section className="page-title bg-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <h1>Blogs</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nisi, quibusdam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-wrapper">
        <div className="container">
          <div className="row">
            {newsinfo.map((item) => (
              <div className="col-md-6">
                <div className="post">
                  <div className="post-thumb">
                    <a href={`/berita-terbaru/${item.id}`}>
                      <img
                        className="img-fluid blog-image"
                        src={item.image}
                        onError={imageOnError}
                        alt=""
                      />
                    </a>
                  </div>
                  <h3 className="post-title">
                    <Link to={`/berita-terbaru/${item.id}`}>{item.title}</Link>
                  </h3>
                  <div className="post-meta">
                    <ul>
                      <li>
                        <i className="ion-calendar"></i> {formatDate(item.date)}
                      </li>
                      <li>
                        <i className="ion-android-people"></i> POSTED BY{" "}
                        {item.author}
                      </li>
                    </ul>
                  </div>
                  <div className="post-content">
                    {/* <p>{Parser().parse(item.description)}</p> */}
                    <p>
                      {item.description &&
                      trimText(item.description).length > 250
                        ? trimText(item.description).substring(0, 250) + "..."
                        : trimText(item.description)}
                    </p>
                    <Link
                      to={`/berita-terbaru/${item.id}`}
                      className="btn btn-main"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <nav aria-label="Page navigation example">
            <ul className="pagination post-pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" href="blog-grid.html">
                  Prev
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="blog-grid.html">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="blog-grid.html">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="blog-grid.html">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="blog-grid.html">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* <FooterComponent></FooterComponent> */}
    </>
  );
};

export default BlogsComponent;
