import ReactDOM from "react-dom/client";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./assets/css/style.css";
import Routes from "./components/Routes";
import AdminLayout from "./components/admin/adminLayout";
import TabelPost from "./components/admin/components/news/listPosting";
import LoginAdmin from "./components/admin/login/login";
import App from "./components/app/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

if (
  window.location.href.includes("/login#/") ||
  window.location.href.includes("/login")
)
  window.location.href = `${window.location.origin}/#/login`;
root.render(
  // <React.StrictMode>
  <HashRouter>
    {/* <BrowserRouter> */}
    <Switch>
      {Routes.map((el: any, ind: any) => {
        if (el.layout === "/web-admin-paw") {
          return (
            <Route
              path={el.layout + el.path}
              exact
              render={(props) => <AdminLayout menu={el.component} />}
            />
          );
        } else {
          return null;
        }
      })}
      <Route
        path="/web-admin-paw"
        exact
        render={(props) => <AdminLayout menu={<TabelPost />} />}
      />

      <Route path="/login" exact render={(props) => <LoginAdmin />} />
      <Route path="/" render={(props) => <App />} />
    </Switch>
    {/* <App /> */}
    {/* </BrowserRouter> */}
  </HashRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
