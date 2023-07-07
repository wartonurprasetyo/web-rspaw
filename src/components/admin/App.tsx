// import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import { Route, Switch } from "react-router";
// import "../../assets/app.css";
// import FooterComponent from "../template/footerComponent";
// import HeaderComponent from "../template/headerComponent";
import Routes from "../Routes";
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Suspense } from "react";

const loading = <>Loading....</>;
function App() {
  return (
    <>
      <HashRouter>
        {/* <BrowserRouter> */}
        {/* <HeaderComponent></HeaderComponent> */}
        {/* <div className="App">
      </div> */}
        {/* <Suspense fallback={loading}> */}
        <Switch>
          {Routes.map((item: any, index: number) => (
            <Route key={"menu-" + index} exact path={item.path}>
              {item.component}
            </Route>
          ))}
        </Switch>
        {/* </Suspense> */}
        {/* 
        <div id="scroll-to-top" className="scroll-to-top">
          <span className="icon ion-ios-arrow-up"></span>
        </div> */}
        {/* <FooterComponent></FooterComponent> */}
        {/* </BrowserRouter> */}
      </HashRouter>
    </>
  );
}

export default App;
