import { Parser } from "html-to-react";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useParams } from "react-router-dom";
import { formatDate, imageOnError } from "../assets/js/__global";
import * as data from "./fakeData";

const BlogComponent = () => {
  const [newsinfo, setNewsInfo] = useState<any>({});

  const params: any = useParams();

  useEffect(() => {
    // console.log(data.newsinfo.find((item) => item.id == params.id));
    setNewsInfo(data.newsinfo.find((item) => item.id == params.id));
  }, [params.id]);
  return (
    <>
      {/* <HeaderComponent></HeaderComponent> */}
      <section className="page-title bg-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <h1>Blog Details</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nisi, quibusdam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="post post-single">
                <h2 className="post-title">{newsinfo.title}</h2>
                <div className="post-meta">
                  <ul>
                    <li>
                      <i className="ion-calendar"></i>{" "}
                      {formatDate(newsinfo.date)}
                    </li>
                    <li>
                      <i className="ion-android-people"></i> POSTED BY{" "}
                      {newsinfo.author}
                    </li>
                    <li>
                      <a href="blog-grid.html">
                        <i className="ion-pricetags"></i> LIFESTYLE
                      </a>
                      ,<a href="blog-left-sidebar.html"> TRAVEL</a>,{" "}
                      <a href="blog-right-sidebar.html">FASHION</a>
                    </li>
                  </ul>
                </div>
                <div className="post-thumb">
                  <img
                    className="img-fluid blog-image"
                    src={newsinfo.image}
                    onError={imageOnError}
                    alt=""
                  />
                </div>
                <div className="post-content post-excerpt">
                  {Parser().parse(newsinfo.description)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <FooterComponent></FooterComponent> */}
    </>
  );
};

export default BlogComponent;
