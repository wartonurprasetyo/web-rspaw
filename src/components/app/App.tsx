// import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import { Route, Switch } from "react-router";
import "../../assets/app.css";
import FooterComponent from "../template/footerComponent";
import HeaderComponent from "../template/headerComponent";
import Routes from "../Routes";
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        {/* <BrowserRouter> */}
        {/* <HeaderComponent></HeaderComponent> */}
        {/* <div className="App">
      </div> */}
        <Switch>
          {Routes.map((item: any) => (
            <Route exact path={item.path}>
              {item.component}
            </Route>
          ))}
        </Switch>
        {/* 
        <div id="scroll-to-top" className="scroll-to-top">
          <span className="icon ion-ios-arrow-up"></span>
        </div> */}
        {/* <FooterComponent></FooterComponent> */}
        {/* </BrowserRouter> */}
      </Router>
    </>
  );
}

export default App;
