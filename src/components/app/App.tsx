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
import { fetchReqToken, reqToken } from "../../services/api_web";
import Routes from "../Routes";
import * as data from "../datas/fakeData";
import FooterComponent from "../template/footerComponent";
import HeaderComponent from "../template/headerComponent";
import LoadingOverlay from "react-loading-overlay-ts";
import LoadingContext from "../../contexts/LoadingContext";
import { ScaleLoader } from "react-spinners";

function App() {
  const [loading, setLoading] = useState<any>(false);
  const changeLoadingState = (payload: boolean) => {
    setLoading(payload);
  };
  const [contactUs, setContactUs] = useState<any>({});
  const location = useLocation();
  useEffect(() => {
    // console.log(location.pathname);
  }, [location.pathname]);
  useEffect(() => {
    setContactUs(data.contactUs);
  }, []);

  useEffect(() => {
    // console.log(window.location.pathname);
  }, [window.location.pathname]);
  return (
    <>
      <Router>
        {/* <BrowserRouter> */}
        <LoadingContext.Provider
          value={{ loading: loading, setLoading: changeLoadingState }}
        >
          <LoadingOverlay
            className="custom-spinner"
            active={loading}
            spinner={<ScaleLoader color="#ff8a1f" />}
            text={`Please Wait ...`}
          >
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
          </LoadingOverlay>
        </LoadingContext.Provider>
        {/* </BrowserRouter> */}
      </Router>
    </>
  );
}

export default App;
