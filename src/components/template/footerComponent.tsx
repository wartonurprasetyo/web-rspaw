import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPostByGroup, reqToken } from "../../services/api_web";
import * as data from "../datas/fakeData";

const FooterComponent = () => {
  const [recent, setRecent] = useState<any[]>([]);
  const [contactUs, setContactUs] = useState<any>({});

  const [copyright, setCopyright] = useState(
    "RSPAW Salatiga. created by SIRS & HUKORMAS RSPAW"
  );
  const [supportedBy, setSupportedBy] = useState(
    <p>
      supported by{" "}
      <a
        href="https://seventekno.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Seventekno
      </a>
    </p>
  );

  const [socmed, setSocmed] = useState([...data.socmedFooter]);

  const [icons, setIcon] = useState<any>({ ...data.iconsSocmed });

  const getPost = async () => {
    let data = {
      post_group: "post",
      post_status: "1",
    };
    await reqToken()
      .then((res) => {
        // console.log(res);
        localStorage.setItem("token", res.data.Response.data);
        // token = res.data.Response.data;
      })
      .catch((err) => {
        // console.log(err);
      });
    await getPostByGroup(data)
      .then((resp) => {
        // console.log(resp);
        setRecent(resp.data.Data);
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  useEffect(() => {
    getPost();
    setContactUs(data.contactUs);
    // setNewsInfo(data.newsinfo);
  }, []);

  return (
    <>
      {/* <div id="scroll-to-top" className="scroll-to-top">
        <span className="icon ion-ios-arrow-up"></span>
      </div> */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-xs-12 recent-news">
              <h3>Berita Terbaru</h3>
              {recent.map((item: any) => (
                <Link to={`${item.post_url}`}>
                  <div className="mb-4 text-left">{item.post_title}</div>
                </Link>
              ))}
            </div>
            <div className="col-lg-4 col-xs-12">
              <h3>Kontak Kami</h3>
              <div className="row text-left mb-2">
                <div className="col">
                  Address&nbsp;:&nbsp;{contactUs.address}
                </div>
              </div>
              <div className="row text-left mb-2">
                <div className="col">Phone&nbsp;:&nbsp;{contactUs.phone}</div>
              </div>
              <div className="row text-left mb-2">
                <div className="col">Fax&nbsp;:&nbsp;{contactUs.fax}</div>
              </div>
              <div className="row text-left mb-2">
                <div className="col">Email&nbsp;:&nbsp;{contactUs.email}</div>
              </div>
              <div className="row text-left mb-2">
                <div className="col">{contactUs.url}</div>
              </div>
            </div>
            <div className="col-lg-4 col-xs-12">
              <iframe
                loading="lazy"
                src="https://maps.google.com/maps?q=RS%20Paru%20dr.%20Ario%20Wirawan%20Salatiga&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
                title="RS Paru dr. Ario Wirawan Salatiga"
                aria-label="RS Paru dr. Ario Wirawan Salatiga"
              ></iframe>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 col-xs-12">
              <span
                className="text-muted"
                style={{
                  fontSize: "12px",
                }}
              >
                &#169;{new Date().getFullYear()} {copyright} {supportedBy}
              </span>
            </div>
            <div
              className="col-lg-4 col-xs-12 gap-2"
              style={{
                display: "flex",
                gap: ".5rem",
              }}
            >
              {socmed.map((item: any) => (
                <a
                  key={`socmed-${item.name}`}
                  href={item.url}
                  target="_blank"
                  style={
                    {
                      // width: "2em",
                      // height: "2em",
                      // margin: "0",
                      // borderRadius: "1rem",
                      // padding: ".3rem",
                      // border: "1px solid gray",
                    }
                  }
                >
                  {/* <i > </i>
                <img
                  src={icons[item.name]}
                  width={32}
                  height={32}
                  alt={item.name}
                /> */}
                  {icons[item.name]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
