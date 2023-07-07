// import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import { Route, Switch } from "react-router";
// import "../../assets/app.css";
import FooterComponent from "../template/footerComponent";
import HeaderComponent from "../template/headerComponent";
import Routes from "../Routes";
import { BrowserRouter, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAmbulance,
  faCalendar,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import * as data from "../fakeData";

function App() {
  const [contactUs, setContactUs] = useState<any>({});
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);
  useEffect(() => {
    setContactUs(data.contactUs);
  }, []);
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
          <div className="sidepanel-content">
            <span>pendaftaran</span>
            <div className="sidepanel-image">
              <FontAwesomeIcon
                className="fa-xl"
                icon={faCalendar}
              ></FontAwesomeIcon>
            </div>
          </div>
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
        </div>
        <FooterComponent></FooterComponent>
        {/* </BrowserRouter> */}
      </Router>
    </>
  );
}

export default App;
