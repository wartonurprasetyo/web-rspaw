import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/style.css";
import App from "./components/app/App";
import Admin from "./components/admin/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AdminLayout from "./components/admin/adminLayout";
import LoginAdmin from "./components/admin/login/login";
import PostingBerita from "./components/admin/components/news/postingBerita";
import EditBerita from "./components/admin/components/news/editBerita";
import TabelPost from "./components/admin/components/news/listPosting";
import Routes from "./components/Routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <BrowserRouter>
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
      {/* <Redirect from="/" to="/" /> */}
    </Switch>
    {/* <App /> */}
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
