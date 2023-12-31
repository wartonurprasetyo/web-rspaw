import { Parser } from "html-to-react";
import _ from "lodash";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from "react-router-dom";
import { formatDate, imageOnError, trimText } from "../assets/js/__global";
import { getPostByGroup, getSlider, reqToken } from "../services/api_web";
import * as fakedata from "./datas/fakeData";
import axios from "axios";

const HomeComponent = () => {
  const [slider, setSlider] = useState<any[]>([]);
  const [infos, setInfos] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const [newsinfo, setNewsInfo] = useState<any[]>([]);
  const [artikel, setArtikel] = useState<any[]>([]);
  const [pengumuman, setPengumuman] = useState<any[]>([]);
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [schedule, setSchedule] = useState<any>({});

  const handlePost = (item: any, type = "berita") => {
    return _.map(item, (el) => {
      // console.log(el.post_url);
      if (el.post_url.includes("/pdf"))
        return {
          ...el,
          toUrl: el.post_url,
          post_image: el.post_content.substring(
            el.post_content.indexOf('src="') + 5,
            el.post_content.indexOf('">') + 0
          ),
        };
      return {
        ...el,
        toUrl: `/info/${type}/${el.post_id}`,
        post_image: el.post_content.substring(
          el.post_content.indexOf('src="') + 5,
          el.post_content.indexOf('">') + 0
        ),
      };
    });
  };

  const getPost = async () => {
    let data = {
      // post_group: "post",
      post_status: "1",
    };
    let type = "";
    await reqToken()
      .then((res) => {
        localStorage.setItem("token", res.data.Response.data);
      })
      .catch((err) => {});
    type = "berita";
    data["post_group"] = type;
    await getPostByGroup(data)
      .then((resp) => {
        setNewsInfo(handlePost(resp.data.Data, type));
      })
      .catch((err) => {});
    type = "artikel";
    data["post_group"] = type;
    await getPostByGroup(data)
      .then((resp) => {
        setArtikel(handlePost(resp.data.Data, type));
      })
      .catch((err) => {});
    type = "pengumuman";
    data["post_group"] = type;
    await getPostByGroup(data)
      .then((resp) => {
        setPengumuman(
          _.orderBy(
            [
              ...handlePost(fakedata.newsinfo, type),
              ...handlePost(
                _.map(resp.data.Data, (item) => ({
                  ...item,
                  post_date: new Date(item.post_date),
                })),
                type
              ),
            ],
            "post_date",
            "desc"
          )
        );
      })
      .catch((err) => {
        setPengumuman(
          _.orderBy(
            [...handlePost(fakedata.newsinfo, type)],
            "post_date",
            "desc"
          )
        );
      });
  };

  const getSliderData = async () => {
    await getSlider()
      .then((resp) => {
        setSlider(resp.data.Data.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    const asyncFunction = async () => {
      await getPost();
      await getSliderData();
      let jsonData = await axios.get("https://rspaw.or.id/media/fake.json");
      console.log(jsonData);
      let datainfo = _.map(jsonData.data || [], (item: any) => {
        console.log(jsonData.data);
        let index = _.findIndex(fakedata.info, { name: item.name });
        console.log(index);
        let returnData = {
          ...item,
        };
        if (index != -1)
          returnData["icon"] =
            typeof item.icon == "string"
              ? item.icon
              : fakedata.info[index].icon;
        return returnData;
      });
      // setInfos(fakedata.info);
      setInfos(datainfo);
    };
    setServices(fakedata.services);
    setSchedule(fakedata.schedule);
    setYoutubeUrl("https://www.youtube.com/embed/NA1BwOpvLX0");

    asyncFunction();
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
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  className="control-arrow control-next"
                  onClick={onClickHandler}
                  style={{
                    opacity: "1",
                  }}
                ></button>
              )
            }
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  className="control-arrow control-prev"
                  onClick={onClickHandler}
                  style={{
                    opacity: "1",
                  }}
                ></button>
              )
            }
            interval={3000}
            showThumbs={false}
            showStatus={false}
            useKeyboardArrows={true}
          >
            {slider.map((item: any, index: number) => (
              <div key={`slide-${item.slider_id}`}>
                <img
                  className="animated fadeInUp"
                  style={{
                    userSelect: "none",
                    minHeight: "250px",
                    maxHeight: "600px",
                  }}
                  src={
                    "https://rspaw.or.id" +
                    item.slider_src?.replaceAll(
                      "/home/simrs/fileuploads",
                      "/media"
                    )
                  }
                  alt="Pepole"
                />
                {item.slider_caption && (
                  <p className="animated fadeInUp legend">
                    {item.slider_caption}
                  </p>
                )}
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
                  info.url?.includes("http") ? (
                    <a href={info.url} target="_blank">
                      <div className="block widget-container">
                        {typeof info.icon == "string" ? (
                          <img
                            src={info.icon}
                            className="animated fadeInUp"
                            onError={imageOnError}
                            width={24}
                            height={24}
                            alt=""
                          />
                        ) : (
                          info.icon
                        )}
                        <span className="animated fadeInUp">{info.title}</span>
                      </div>
                    </a>
                  ) : (
                    <Link to={info.url}>
                      <div className="block widget-container">
                        {typeof info.icon == "string" ? (
                          <img
                            src={info.icon}
                            className="animated fadeInUp"
                            onError={imageOnError}
                            width={24}
                            height={24}
                            alt=""
                          />
                        ) : (
                          info.icon
                        )}
                        <span className="animated fadeInUp">{info.title}</span>
                      </div>
                    </Link>
                  )
                ) : (
                  <div className="block widget-container">
                    {info.icon}
                    {/* <img
                      className="animated fadeInUp"
                      onError={imageOnError}
                      width={70}
                        height={70}
                      alt=""
                    /> */}
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
                    info.url?.includes("http") ? (
                      <a href={info.url} target="_blank">
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
                      <Link to={info.url}>
                        <div className="block ">
                          <img
                            className="animated fadeInUp"
                            onError={imageOnError}
                            src={info.img}
                            width="100%"
                            alt=""
                          />
                        </div>
                      </Link>
                    )
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
                <Link to={info.url} className="col-lg-2 col-md-4 col-sm-6">
                  <div style={{ userSelect: "none", cursor: "pointer" }}>
                    <div className="service-item">
                      <img
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
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center mt-4">
          <h2 className="section-title">Layanan Pengaduan</h2>
          <div className="row">
            {services
              .filter((item: any) => item.type == "complaint")
              .map((info: any) => (
                <div className="col widget">
                  {info.url ? (
                    info.url?.includes("http") ? (
                      <a href={info.url} target="_blank">
                        <div className="block widget-container">
                          {info.icon}
                          <span className="animated fadeInUp">
                            {info.title}
                          </span>
                        </div>
                      </a>
                    ) : (
                      <Link to={info.url}>
                        <div className="block widget-container">
                          {info.icon}
                          <span className="animated fadeInUp">
                            {info.title}
                          </span>
                        </div>
                      </Link>
                    )
                  ) : (
                    <div className="block widget-container">
                      {info.icon}
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
          <Link to={"/info/berita"}>
            <h2 className="section-title">Berita</h2>
          </Link>
          <div className="row">
            {newsinfo.map(
              (info: any, index: number) =>
                index < 3 && (
                  <div className="col-md-4 widget">
                    <div className="block widget-container news-widget">
                      <img
                        key={info.post_image}
                        onError={imageOnError}
                        src={info.post_image || "-"}
                        className="animated fadeInUp rounded img-fluid"
                        alt=""
                      />
                      <span className="animated fadeInUp date">
                        {formatDate(info.post_date)}
                      </span>
                      <span className="animated fadeInUp title">
                        {info.post_title}
                      </span>
                      <span className="animated fadeInUp description">
                        {info.post_content &&
                        trimText(info.post_content).length > 75
                          ? trimText(info.post_content).substring(0, 75) + "..."
                          : trimText(info.post_content)}
                      </span>
                      <Link to={info.toUrl}>
                        <button className="animated fadeInUp btn readmore">
                          Read More...
                        </button>
                      </Link>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <Link to={"/info/pengumuman"}>
            <h2 className="section-title">Pengumuman</h2>
          </Link>
          <div className="row">
            {pengumuman.map(
              (info: any, index: number) =>
                index < 3 && (
                  <div className="col-md-4 widget">
                    <div className="block widget-container news-widget">
                      <img
                        onError={imageOnError}
                        src={info.post_image || "-"}
                        className="animated fadeInUp rounded img-fluid"
                        alt=""
                      />
                      <span className="animated fadeInUp date">
                        {formatDate(info.post_date)}
                      </span>
                      <span className="animated fadeInUp title">
                        {info.post_title}
                      </span>
                      <span className="animated fadeInUp description">
                        {!info.post_url.includes("/pdf/")
                          ? info.post_content &&
                            trimText(info.post_content).length > 75
                            ? trimText(info.post_content).substring(0, 75) +
                              "..."
                            : trimText(info.post_content)
                          : ""}
                      </span>
                      <Link to={info.toUrl}>
                        <button className="animated fadeInUp btn readmore">
                          Read More...
                        </button>
                      </Link>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <Link to={"/info/artikel"}>
            <h2 className="section-title">Artikel</h2>
          </Link>
          <div className="row">
            {artikel.map(
              (info: any, index: number) =>
                index < 3 && (
                  <div className="col-md-4 widget">
                    <div className="block widget-container news-widget">
                      <img
                        onError={imageOnError}
                        src={info.post_image || "-"}
                        className="animated fadeInUp rounded img-fluid"
                        alt=""
                      />
                      <span className="animated fadeInUp date">
                        {formatDate(info.post_date)}
                      </span>
                      <span className="animated fadeInUp title">
                        {info.post_title}
                      </span>
                      <span className="animated fadeInUp description">
                        {info.post_content &&
                        trimText(info.post_content).length > 75
                          ? trimText(info.post_content).substring(0, 75) + "..."
                          : trimText(info.post_content)}
                      </span>
                      <Link to={info.toUrl}>
                        <button className="animated fadeInUp btn readmore">
                          Read More...
                        </button>
                      </Link>
                    </div>
                  </div>
                )
            )}
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
