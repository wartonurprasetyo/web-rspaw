import { useEffect } from "react";
import {
  HashRouter,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Routes from "../Routes";

const loading = <>Loading....</>;
function App() {
  const location = useLocation();
  useEffect(() => {
    // console.log("location admin layout", location);
  }, []);
  return (
    <>
      <HashRouter>
        {/* <BrowserRouter> */}
        <Switch>
          {Routes.map((item: any, index: number) => (
            <Route key={"menu-" + index} exact path={item.path}>
              {item.component}
            </Route>
          ))}
          <Redirect from="/*" to="/" />
        </Switch>
        {/* </BrowserRouter> */}
      </HashRouter>
    </>
  );
}

export default App;
