import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Parser } from "html-to-react";
import { formatDate, imageOnError, trimText } from "../assets/js/__global";
import * as data from "./fakeData";
import HeaderComponent from "./template/headerComponent";
import FooterComponent from "./template/footerComponent";
import { Link } from "react-router-dom";

const HomeComponent = () => {
  const [slider, setSlider] = useState<any[]>([]);
  const [infos, setInfos] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const [newsinfo, setNewsInfo] = useState<any[]>([]);
  const [artikel, setArtikel] = useState<any[]>([]);
  const [pengumuman, setPengumuman] = useState<any[]>([]);
  const [youtubeUrl, setYoutubeUrl] = useState("");

  console.log(infos);
  useEffect(() => {
    setSlider(data.slider);
    setInfos(data.info);
    setServices(data.services);
    setNewsInfo(data.newsinfo);
    setArtikel(data.newsinfo);
    setPengumuman(data.newsinfo);
    setYoutubeUrl("https://www.youtube.com/embed/NA1BwOpvLX0");
  }, []);
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <section>
        <div className="container text-center">
          <Carousel
            dynamicHeight={false}
            swipeable={true}
            infiniteLoop
            autoPlay
            interval={3000}
            showThumbs={false}
            showStatus={false}
          >
            {slider.map((item: any, index: number) => (
              <div>
                <img
                  onError={imageOnError}
                  style={{
                    userSelect: "none",
                  }}
                  src={item.image}
                  alt="Pepole"
                />
                <p className="legend">{item.label}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
      <section>
        <div className="container text-center">
          <h2>Informasi Pengunjung</h2>
          <div className="row">
            {infos.map((info: any) => (
              <div className="col widget">
                {info.url ? (
                  <a href={info.url}>
                    <div className="block widget-container">
                      <img
                        onError={imageOnError}
                        width={70}
                        height={70}
                        alt=""
                      />
                      <span>{info.title}</span>
                    </div>
                  </a>
                ) : (
                  <div className="block widget-container">
                    <img onError={imageOnError} width={70} height={70} alt="" />
                    <span>{info.title}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container text-center">
          <h2>Layanan Unggulan</h2>
          <div className="row">
            {services
              .filter((item: any) => item.type == "top-service")
              .map((info: any) => (
                <div className="col widget">
                  {info.url ? (
                    <a href={info.url}>
                      <div className="block ">
                        <img
                          onError={imageOnError}
                          src={info.img}
                          width="100%"
                          alt=""
                        />
                      </div>
                    </a>
                  ) : (
                    <div className="block ">
                      <img
                        onError={imageOnError}
                        src={info.img}
                        width="100%"
                        alt=""
                      />
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <h2>Layanan Kami</h2>
          <div className="row">
            {services
              .filter((item: any) => item.type == "general")
              .map((info: any) => (
                <div className="col widget">
                  {info.url ? (
                    <a href={info.url}>
                      <div className="block widget-container service-widget">
                        <img
                          onError={imageOnError}
                          src={info.img}
                          style={{
                            borderRadius: "100%",
                          }}
                          alt=""
                        />
                        <span>{info.title}</span>
                      </div>
                    </a>
                  ) : (
                    <div className="block widget-container service-widget">
                      <img
                        onError={imageOnError}
                        src={info.img}
                        style={{
                          borderRadius: "100%",
                        }}
                        alt=""
                      />
                      <span>{info.title}</span>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <h2>Layanan Pengaduan</h2>
          <div className="row">
            {services
              .filter((item: any) => item.type == "complaint")
              .map((info: any) => (
                <div className="col widget">
                  {info.url ? (
                    <a href={info.url}>
                      <div className="block widget-container">
                        <span>{info.title}</span>
                      </div>
                    </a>
                  ) : (
                    <div className="block widget-container">
                      <span>{info.title}</span>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <h2>Berita</h2>
          <div className="row">
            {newsinfo.map((info: any) => (
              <div className="col-md-4 widget">
                {info.url ? (
                  <a href={info.url}>
                    <div className="block widget-container news-widget">
                      <img
                        onError={imageOnError}
                        src={info.image}
                        className="rounded img-fluid"
                        alt=""
                      />
                      <span className="date">{formatDate(info.date)}</span>
                      <span className="title">{info.title}</span>
                      <span className="description">
                        {info.description &&
                        trimText(info.description).length > 75
                          ? trimText(info.description).substring(0, 75) + "..."
                          : trimText(info.description)}
                      </span>
                      <button className="btn readmore">Read More...</button>
                    </div>
                  </a>
                ) : (
                  <div className="block widget-container news-widget">
                    <img
                      onError={imageOnError}
                      src={info.image}
                      className="rounded img-fluid"
                      alt=""
                    />
                    <span className="date">{formatDate(info.date)}</span>
                    <span className="title">{info.title}</span>
                    <span className="description">
                      {info.description &&
                      trimText(info.description).length > 75
                        ? trimText(info.description).substring(0, 75) + "..."
                        : trimText(info.description)}
                    </span>
                    <Link to={`/berita-terbaru/${info.id}`}>
                      <button className="btn readmore">Read More...</button>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <h2>Pengumuman</h2>
          <div className="row">
            {pengumuman.map((info: any) => (
              <div className="col-md-4 widget">
                {info.url ? (
                  <a href={info.url}>
                    <div className="block widget-container news-widget">
                      <img
                        onError={imageOnError}
                        src={info.image}
                        className="rounded img-fluid"
                        alt=""
                      />
                      <span className="date">{formatDate(info.date)}</span>
                      <span className="title">{info.title}</span>
                      <span className="description">
                        {info.description &&
                        trimText(info.description).length > 75
                          ? trimText(info.description).substring(0, 75) + "..."
                          : trimText(info.description)}
                      </span>
                      <button className="btn readmore">Read More...</button>
                    </div>
                  </a>
                ) : (
                  <div className="block widget-container news-widget">
                    <img
                      onError={imageOnError}
                      src={info.image}
                      className="rounded img-fluid"
                      alt=""
                    />
                    <span className="date">{formatDate(info.date)}</span>
                    <span className="title">{info.title}</span>
                    <span className="description">
                      {info.description &&
                      trimText(info.description).length > 75
                        ? trimText(info.description).substring(0, 75) + "..."
                        : trimText(info.description)}
                    </span>
                    <Link to={`/berita-terbaru/${info.id}`}>
                      <button className="btn readmore">Read More...</button>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <h2>Artikel</h2>
          <div className="row">
            {artikel.map((info: any) => (
              <div className="col-md-4 widget">
                {info.url ? (
                  <a href={info.url}>
                    <div className="block widget-container news-widget">
                      <img
                        onError={imageOnError}
                        src={info.image}
                        className="rounded img-fluid"
                        alt=""
                      />
                      <span className="date">{formatDate(info.date)}</span>
                      <span className="title">{info.title}</span>
                      <span className="description">
                        {info.description &&
                        trimText(info.description).length > 75
                          ? trimText(info.description).substring(0, 75) + "..."
                          : trimText(info.description)}
                      </span>
                      <Link to={`/berita-terbaru/${info.id}`}>
                        <button className="btn readmore">Read More...</button>
                      </Link>
                    </div>
                  </a>
                ) : (
                  <div className="block widget-container news-widget">
                    <img
                      onError={imageOnError}
                      src={info.image}
                      className="rounded img-fluid"
                      alt=""
                    />
                    <span className="date">{formatDate(info.date)}</span>
                    <span className="title">{info.title}</span>
                    <span className="description">
                      {info.description &&
                      trimText(info.description).length > 75
                        ? trimText(info.description).substring(0, 75) + "..."
                        : trimText(info.description)}
                    </span>
                    <Link to={`/berita-terbaru/${info.id}`}>
                      <button className="btn readmore">Read More...</button>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container text-center">
          <div className="container-iframe ">
            <iframe
              style={{
                width: "100%",
                minHeight: "360px",
                maxHeight: "640px",
              }}
              className="responsive-iframe"
              frameBorder="0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              title="Profil RS Paru dr. Ario Wirawan Salatiga"
              // width="640"
              // height="360"
              src={`${youtubeUrl}?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.rspaw.or.id&amp;widgetid=1`}
              id="widget2"
            ></iframe>
          </div>
        </div>
      </section>

      {/* <!-- Slider Start --> */}
      <section className="slider">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <h1 className="animated fadeInUp">
                  A Digital Marketing <br /> &#38; Design Agency
                </h1>
                <p className="animated fadeInUp">
                  We love the Web and the work we do.We work closely with our
                  clients to deliver
                  <br /> the best possible solutions for their needs
                </p>
                <a
                  href="https://themefisher.com/free-bootstrap-templates/"
                  className="btn btn-main animated fadeInUp"
                >
                  Free Bootstrap Templates
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterComponent></FooterComponent>
    </>
  );
};

export default HomeComponent;
