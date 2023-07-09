import {
  faAmbulance,
  faCalendar,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  useLocation,
} from "react-router-dom";
import { reqToken } from "../../services/api_web";
import Routes from "../Routes";
import * as data from "../fakeData";
import FooterComponent from "../template/footerComponent";
import HeaderComponent from "../template/headerComponent";

function App() {
  const [contactUs, setContactUs] = useState<any>({});
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);
  useEffect(() => {
    setContactUs(data.contactUs);
    reqToken()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log(window.location.pathname);
  }, [window.location.pathname]);
  return (
    <>
      <Router>
        {/* <BrowserRouter> */}
        <HeaderComponent></HeaderComponent>
        <Switch>
          {Routes.map((item: any) => (
            <Route
              key={`route-${item.path
                .split("/")
                .filter((item: any) => item)
                .join("-")}`}
              exact
              path={item.path}
            >
              {item.component}
            </Route>
          ))}
        </Switch>

        <div id="scroll-to-top" className="scroll-to-top">
          <span className="icon ion-ios-arrow-up"></span>
        </div>
        <div className="collapse-sidepanel sidepanel-container">
          <a
            href="https://daftaronline.rspaw.or.id/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="sidepanel-content">
              <span>pendaftaran</span>
              <div className="sidepanel-image">
                <FontAwesomeIcon
                  className="fa-xl"
                  icon={faCalendar}
                ></FontAwesomeIcon>
              </div>
            </div>
          </a>
          <a
            href={`tel:${contactUs.phone}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="sidepanel-content">
              <span>
                <span>emergency call</span>
                <span>{contactUs.phone}</span>
              </span>
              <div className="sidepanel-image">
                <FontAwesomeIcon
                  className="fa-xl"
                  icon={faAmbulance}
                ></FontAwesomeIcon>
              </div>
            </div>
          </a>
          <a
            href={`tel:${contactUs.phone}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="sidepanel-content">
              <span>
                <span>contact center</span>
                <span>{contactUs?.phone}</span>
              </span>
              <div className="sidepanel-image">
                <FontAwesomeIcon
                  className="fa-xl"
                  icon={faPhone}
                ></FontAwesomeIcon>
              </div>
            </div>
          </a>
        </div>
        <FooterComponent></FooterComponent>
        {/* </BrowserRouter> */}
      </Router>
    </>
  );
}

export default App;
