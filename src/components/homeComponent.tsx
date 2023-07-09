import { Parser } from "html-to-react";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from "react-router-dom";
import { formatDate, imageOnError, trimText } from "../assets/js/__global";
import * as data from "./fakeData";
// import InstagramEmbed from "react-instagram-embed";
// import instagramFeed from "react-instagram-feed";
// import InstagramFeed from "react-ig-feed";
// import "react-ig-feed/dist/index.css";

const HomeComponent = () => {
  const [slider, setSlider] = useState<any[]>([]);
  const [infos, setInfos] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const [newsinfo, setNewsInfo] = useState<any[]>([]);
  const [artikel, setArtikel] = useState<any[]>([]);
  const [pengumuman, setPengumuman] = useState<any[]>([]);
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [schedule, setSchedule] = useState<any>({});

  console.log(infos);
  useEffect(() => {
    // getAllMenus()
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    setSlider(data.slider);
    setInfos(data.info);
    setServices(data.services);
    setNewsInfo(data.newsinfo);
    setArtikel(data.newsinfo);
    setPengumuman(data.newsinfo);
    setSchedule(data.schedule);
    setYoutubeUrl("https://www.youtube.com/embed/NA1BwOpvLX0");
  }, []);
  return (
    <>
      {/* <HeaderComponent></HeaderComponent> */}
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
                  className="animated fadeInUp"
                  onError={imageOnError}
                  style={{
                    userSelect: "none",
                  }}
                  src={item.image}
                  alt="Pepole"
                />
                <p className="animated fadeInUp legend">{item.label}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
      <section>
        <div className="container text-center">
          <h2 className="section-title">Informasi Pengunjung</h2>
          <div className="row">
            {infos.map((info: any) => (
              <div className="col widget">
                {info.url ? (
                  <a href={info.url}>
                    <div className="block widget-container">
                      <img
                        className="animated fadeInUp"
                        onError={imageOnError}
                        width={70}
                        height={70}
                        alt=""
                      />
                      <span className="animated fadeInUp">{info.title}</span>
                    </div>
                  </a>
                ) : (
                  <div className="block widget-container">
                    <img
                      className="animated fadeInUp"
                      onError={imageOnError}
                      width={70}
                      height={70}
                      alt=""
                    />
                    <span className="animated fadeInUp">{info.title}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container text-center">
          <h2 className="section-title">Layanan Unggulan</h2>
          <div className="row">
            {services
              .filter((item: any) => item.type == "top-service")
              .map((info: any) => (
                <div className="col widget">
                  {info.url ? (
                    <a href={info.url}>
                      <div className="block ">
                        <img
                          className="animated fadeInUp"
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
                        className="animated fadeInUp"
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
          <h2 className="section-title">Layanan Kami</h2>
          <div className="row">
            {services
              .filter((item: any) => item.type == "general")
              .map((info: any) => (
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="service-item">
                    <img
                      // className="animated fadeInUp"
                      onError={imageOnError}
                      src={info.img}
                      style={{
                        borderRadius: "100%",
                        width: "100px",
                        height: "100px",
                      }}
                      alt=""
                    />
                    <h4 className="animated fadeInUp">{info.title}</h4>
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt{" "}
                    </p> */}
                  </div>
                </div>
                // <div className="col widget">
                //   {info.url ? (
                //     <a href={info.url}>
                //       <div className="block widget-container service-widget">
                //         <img
                //           className="animated fadeInUp"
                //           onError={imageOnError}
                //           src={info.img}
                //           style={{
                //             borderRadius: "100%",
                //           }}
                //           alt=""
                //         />
                //         <span className="animated fadeInUp">{info.title}</span>
                //       </div>
                //     </a>
                //   ) : (
                //     <div className="block widget-container service-widget">
                //       <img
                //         className="animated fadeInUp"
                //         onError={imageOnError}
                //         src={info.img}
                //         style={{
                //           borderRadius: "100%",
                //         }}
                //         alt=""
                //       />
                //       <span className="animated fadeInUp">{info.title}</span>
                //     </div>
                //   )}
                // </div>
              ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <h2 className="section-title">Layanan Pengaduan</h2>
          <div className="row">
            {services
              .filter((item: any) => item.type == "complaint")
              .map((info: any) => (
                <div className="col widget">
                  {info.url ? (
                    <a href={info.url}>
                      <div className="block widget-container">
                        <span className="animated fadeInUp">{info.title}</span>
                      </div>
                    </a>
                  ) : (
                    <div className="block widget-container">
                      <span className="animated fadeInUp">{info.title}</span>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <Link to={"/berita-terbaru"}>
            <h2 className="section-title">Berita</h2>
          </Link>
          <div className="row">
            {newsinfo.map((info: any) => (
              <div className="col-md-4 widget">
                {info.url ? (
                  <a href={info.url}>
                    <div className="block widget-container news-widget">
                      <img
                        onError={imageOnError}
                        src={info.image}
                        className="animated fadeInUp rounded img-fluid"
                        alt=""
                      />
                      <span className="animated fadeInUp date">
                        {formatDate(info.date)}
                      </span>
                      <span className="animated fadeInUp title">
                        {info.title}
                      </span>
                      <span className="animated fadeInUp description">
                        {info.description &&
                        trimText(info.description).length > 75
                          ? trimText(info.description).substring(0, 75) + "..."
                          : trimText(info.description)}
                      </span>
                      <button className="animated fadeInUp btn readmore">
                        Read More...
                      </button>
                    </div>
                  </a>
                ) : (
                  <div className="block widget-container news-widget">
                    <img
                      onError={imageOnError}
                      src={info.image}
                      className="animated fadeInUp rounded img-fluid"
                      alt=""
                    />
                    <span className="animated fadeInUp date">
                      {formatDate(info.date)}
                    </span>
                    <span className="animated fadeInUp title">
                      {info.title}
                    </span>
                    <span className="animated fadeInUp description">
                      {info.description &&
                      trimText(info.description).length > 75
                        ? trimText(info.description).substring(0, 75) + "..."
                        : trimText(info.description)}
                    </span>
                    <Link to={`/berita-terbaru/${info.id}`}>
                      <button className="animated fadeInUp btn readmore">
                        Read More...
                      </button>
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
          <h2 className="section-title">Pengumuman</h2>
          <div className="row">
            {pengumuman.map((info: any) => (
              <div className="col-md-4 widget">
                {info.url ? (
                  <a href={info.url}>
                    <div className="block widget-container news-widget">
                      <img
                        onError={imageOnError}
                        src={info.image}
                        className="animated fadeInUp rounded img-fluid"
                        alt=""
                      />
                      <span className="animated fadeInUp date">
                        {formatDate(info.date)}
                      </span>
                      <span className="animated fadeInUp title">
                        {info.title}
                      </span>
                      <span className="animated fadeInUp description">
                        {info.description &&
                        trimText(info.description).length > 75
                          ? trimText(info.description).substring(0, 75) + "..."
                          : trimText(info.description)}
                      </span>
                      <button className="animated fadeInUp btn readmore">
                        Read More...
                      </button>
                    </div>
                  </a>
                ) : (
                  <div className="block widget-container news-widget">
                    <img
                      onError={imageOnError}
                      src={info.image}
                      className="animated fadeInUp rounded img-fluid"
                      alt=""
                    />
                    <span className="animated fadeInUp date">
                      {formatDate(info.date)}
                    </span>
                    <span className="animated fadeInUp title">
                      {info.title}
                    </span>
                    <span className="animated fadeInUp description">
                      {info.description &&
                      trimText(info.description).length > 75
                        ? trimText(info.description).substring(0, 75) + "..."
                        : trimText(info.description)}
                    </span>
                    <Link to={`/berita-terbaru/${info.id}`}>
                      <button className="animated fadeInUp btn readmore">
                        Read More...
                      </button>
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
          <h2 className="section-title">Artikel</h2>
          <div className="row">
            {artikel.map((info: any) => (
              <div className="col-md-4 widget">
                {info.url ? (
                  <a href={info.url}>
                    <div className="block widget-container news-widget">
                      <img
                        onError={imageOnError}
                        src={info.image}
                        className="animated fadeInUp rounded img-fluid"
                        alt=""
                      />
                      <span className="animated fadeInUp date">
                        {formatDate(info.date)}
                      </span>
                      <span className="animated fadeInUp title">
                        {info.title}
                      </span>
                      <span className="animated fadeInUp description">
                        {info.description &&
                        trimText(info.description).length > 75
                          ? trimText(info.description).substring(0, 75) + "..."
                          : trimText(info.description)}
                      </span>
                      <Link to={`/berita-terbaru/${info.id}`}>
                        <button className="animated fadeInUp btn readmore">
                          Read More...
                        </button>
                      </Link>
                    </div>
                  </a>
                ) : (
                  <div className="block widget-container news-widget">
                    <img
                      onError={imageOnError}
                      src={info.image}
                      className="animated fadeInUp rounded img-fluid"
                      alt=""
                    />
                    <span className="animated fadeInUp date">
                      {formatDate(info.date)}
                    </span>
                    <span className="animated fadeInUp title">
                      {info.title}
                    </span>
                    <span className="animated fadeInUp description">
                      {info.description &&
                      trimText(info.description).length > 75
                        ? trimText(info.description).substring(0, 75) + "..."
                        : trimText(info.description)}
                    </span>
                    <Link to={`/berita-terbaru/${info.id}`}>
                      <button className="animated fadeInUp btn readmore">
                        Read More...
                      </button>
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

      <section>
        <div className="container">
          {/* <InstagramEmbed
            url="https://instagr.am/exdreifoprasetyo/"
            clientAccessToken="777740733820212|1138da8db1703d018286c5929e454eb6"
            maxWidth={320}
            hideCaption={false}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          /> */}
        </div>
      </section>

      {/* <!-- Slider Start --> */}
      <section
        className="slider container mt-4"
        style={{
          padding: "25px 0",
        }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 text-light"
              style={{
                minHeight: "360px",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {Parser().parse(schedule.title)}
              {Parser().parse(schedule.description)}
            </div>
            <div className="col-md-6">
              <iframe
                width={"100%"}
                height={"100%"}
                loading="lazy"
                src="https://maps.google.com/maps?q=RS%20PARU%20dr%20Ario%20Wirawan%20Salatiga&amp;t=m&amp;z=11&amp;output=embed&amp;iwloc=near"
                title="RS PARU dr Ario Wirawan Salatiga"
                aria-label="RS PARU dr Ario Wirawan Salatiga"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* <FooterComponent></FooterComponent> */}
    </>
  );
};

export default HomeComponent;
