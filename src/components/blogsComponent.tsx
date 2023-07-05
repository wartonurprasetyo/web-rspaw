import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Parser } from "html-to-react";
import { formatDate, imageOnError, trimText } from "../assets/js/__global";
import * as data from "./fakeData";
import FooterComponent from "./template/footerComponent";
import HeaderComponent from "./template/headerComponent";

const BlogComponent = () => {
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
      <HeaderComponent></HeaderComponent>
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
                    <a href={`/berita-terbaru/${item.id}`}>{item.title}</a>
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
                      {/* <li>
                        <a href="blog-grid.html">
                          <i className="ion-pricetags"></i> LIFESTYLE
                        </a>
                        ,<a href="blog-left-sidebar.html"> TRAVEL</a>,{" "}
                        <a href="blog-right-sidebar.html">FASHION</a>
                      </li> */}
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
                    <a
                      href={`/berita-terbaru/${item.id}`}
                      className="btn btn-main"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="col-md-6">
              <div className="post">
                <div className="post-thumb">
                  <a href="blog-single.html">
                    <img
                      className="img-fluid"
                      src="images/blog/blog-post-2.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <h3 className="post-title">
                  <a href="blog-single.html">Two Ways To Wear Straight Shoes</a>
                </h3>
                <div className="post-meta">
                  <ul>
                    <li>
                      <i className="ion-calendar"></i> 20, MAR 2020
                    </li>
                    <li>
                      <i className="ion-android-people"></i> POSTED BY ADMIN
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
                <div className="post-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Velit vitae placeat ad architecto nostrum asperiores vel
                    aperiam, veniam eum nulla. Maxime cum magnam, adipisci
                    architecto quibusdam cumque veniam fugiat quae. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Odio vitae ab
                    doloremque accusamus sit, eos dolorum officiis a
                    perspiciatis aliquid. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Quod, facere
                  </p>
                  <a href="blog-single.html" className="btn btn-main">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="post">
                <div className="post-thumb">
                  <a href="blog-single.html">
                    <img
                      className="img-fluid"
                      src="images/blog/blog-post-3.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <h3 className="post-title">
                  <a href="blog-single.html">Making A Denim Statement</a>
                </h3>
                <div className="post-meta">
                  <ul>
                    <li>
                      <i className="ion-calendar"></i> 20, MAR 2020
                    </li>
                    <li>
                      <i className="ion-android-people"></i> POSTED BY ADMIN
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
                <div className="post-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Velit vitae placeat ad architecto nostrum asperiores vel
                    aperiam, veniam eum nulla. Maxime cum magnam, adipisci
                    architecto quibusdam cumque veniam fugiat quae. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Odio vitae ab
                    doloremque accusamus sit, eos dolorum officiis a
                    perspiciatis aliquid. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Quod, facere
                  </p>
                  <a href="blog-single.html" className="btn btn-main">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="post">
                <div className="post-thumb">
                  <a href="blog-single.html">
                    <img
                      className="img-fluid"
                      src="images/blog/blog-post-4.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <h3 className="post-title">
                  <a href="blog-single.html">Standard Text Post</a>
                </h3>
                <div className="post-meta">
                  <ul>
                    <li>
                      <i className="ion-calendar"></i> 20, MAR 2020
                    </li>
                    <li>
                      <i className="ion-android-people"></i> POSTED BY ADMIN
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
                <div className="post-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Velit vitae placeat ad architecto nostrum asperiores vel
                    aperiam, veniam eum nulla. Maxime cum magnam, adipisci
                    architecto quibusdam cumque veniam fugiat quae. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Odio vitae ab
                    doloremque accusamus sit, eos dolorum officiis a
                    perspiciatis aliquid. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Quod, facere
                  </p>
                  <a href="blog-single.html" className="btn btn-main">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="post">
                <div className="post-media post-media-audio">
                  <iframe
                    height="390"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/115637399&amp;color=ff5500&amp;auto_play=false&amp;show_artwork=true"
                    className="DRAGDIS_iframe"
                  ></iframe>
                </div>
                <h3 className="post-title">
                  <a href="blog-single.html">Standard Audio Post</a>
                </h3>
                <div className="post-meta">
                  <ul>
                    <li>
                      <i className="ion-calendar"></i> 20, MAR 2020
                    </li>
                    <li>
                      <i className="ion-android-people"></i> POSTED BY ADMIN
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
                <div className="post-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Velit vitae placeat ad architecto nostrum asperiores vel
                    aperiam, veniam eum nulla. Maxime cum magnam, adipisci
                    architecto quibusdam cumque veniam fugiat quae. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Odio vitae ab
                    doloremque accusamus sit, eos dolorum officiis a
                    perspiciatis aliquid. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Quod, facere
                  </p>
                  <a href="blog-single.html" className="btn btn-main">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="post">
                <div className="post-media post-media-audio">
                  <iframe
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/LKFuXETZUsI"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <h3 className="post-title">
                  <a href="blog-single.html">Standard Video Post</a>
                </h3>
                <div className="post-meta">
                  <ul>
                    <li>
                      <i className="ion-calendar"></i> 20, MAR 2020
                    </li>
                    <li>
                      <i className="ion-android-people"></i> POSTED BY ADMIN
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
                <div className="post-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Velit vitae placeat ad architecto nostrum asperiores vel
                    aperiam, veniam eum nulla. Maxime cum magnam, adipisci
                    architecto quibusdam cumque veniam fugiat quae. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Odio vitae ab
                    doloremque accusamus sit, eos dolorum officiis a
                    perspiciatis aliquid. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Quod, facere
                  </p>
                  <a href="blog-single.html" className="btn btn-main">
                    Read More
                  </a>
                </div>
              </div>
            </div> */}
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
      <FooterComponent></FooterComponent>
    </>
  );
};

export default BlogComponent;
