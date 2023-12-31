import {
  faAmbulance,
  faCalendar,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import LoadingOverlay from "react-loading-overlay-ts";
import {
  Redirect,
  Route,
  HashRouter as Router,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import LoadingContext from "../../contexts/LoadingContext";
import Routes from "../Routes";
import * as data from "../datas/fakeData";
import FooterComponent from "../template/footerComponent";
import HeaderComponent from "../template/headerComponent";

function App() {
  const history = useHistory();
  const location = useLocation();
  const [loading, setLoading] = useState<any>(false);
  const changeLoadingState = (payload: boolean) => {
    setLoading(payload);
  };
  const [contactUs, setContactUs] = useState<any>({});

  useEffect(() => {
    // console.log("location landing layout", location);
    if (location.hash.includes("login")) history.push("/login");
  }, []);
  useEffect(() => {
    setContactUs(data.contactUs);
  }, []);
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
              {/* <Redirect from="*" to="/" /> */}
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
