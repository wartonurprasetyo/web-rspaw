import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useParams } from "react-router-dom";
import * as data from "./datas/fakeData";

const ContactComponent = () => {
  // const [newsinfo, setNewsInfo] = useState<any>({});
  const [socmed, setSocmed] = useState<any[]>([]);
  const [icons, setIcon] = useState<any>({});
  const [contactUs, setContactUs] = useState<any>({});

  const params: any = useParams();

  useEffect(() => {
    setIcon(data.iconsSocmed);
    setSocmed([...data.socmedFooter, ...data.socmed]);
    setContactUs(data.contactUs);
  }, []);
  return (
    <>
      {/* <HeaderComponent></HeaderComponent> */}
      <section className="page-title bg-contact-us">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <h1>Hubungi Kami</h1>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-form">
        <div className="container">
          <div className="contact-box row">
            <div className="col-md-6 col-sm-12 pl-4">
              <div className="block">
                <h2>Office :</h2>
                <ul className="address-block">
                  <li>
                    <i className="ion-ios-location-outline"></i>
                    {contactUs.address}
                  </li>
                  <li>
                    <i className="ion-ios-email-outline"></i>
                    {contactUs.email}
                  </li>
                  <li>
                    <i className="ion-ios-telephone-outline"></i>
                    {contactUs.phone}
                  </li>
                </ul>
                <ul className="social-icons text-right">
                  {socmed.map((item: any) => (
                    <li key={`socmed-button-${item.name}`}>
                      <a
                        className=""
                        style={{
                          color: `${item.color}`,
                        }}
                        href={item.url}
                        target="_blank"
                      >
                        {icons[item.name]}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-6 mt-5 mt-md-0">
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

export default ContactComponent;
