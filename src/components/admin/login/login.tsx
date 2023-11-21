import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Config from "../../../config/Config";
import LoadingContext from "../../../contexts/LoadingContext"; // import loading
import { loginPage, reqToken } from "../../../services/api_web";
import "./login.css";

const LoginAdmin = () => {
  const loading = useContext(LoadingContext); // get state & function loading
  let navigate = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const history = useHistory();
  const location = useLocation();

  const login = async () => {
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };
    let bodyContent = JSON.stringify({
      uname: username,
      upswd: password,
    });
    let base = Config.BaseUrlDev;

    let reqOptions = {
      url: base + "adm/login",
      method: "POST",
      headers: headersList,
      data: bodyContent,
    };
    try {
      let response = await axios.request(reqOptions);
      // console.log(response.data, "sd");
    } catch (error) {
      // console.log(error, "sddd");
    }
  };

  const doLogin = (event) => {
    event.preventDefault();
    let bodyContent = JSON.stringify({
      uname: username,
      upswd: password,
    });

    // console.log(validate());
    loading.setLoading(true); // change loading state
    loginPage(bodyContent, token)
      .then((response) => {
        loading.setLoading(false); // change loading state

        localStorage.setItem("rspaw-token", response.data.LoginID);
        navigate.replace("/web-admin-paw/news");
        // getEmployeeById(response.data.data.userId);
      })
      .catch((err) => {
        loading.setLoading(false);
        // console.log(err);
      });
  };

  useEffect(() => {
    let a = localStorage.getItem("rspaw-token");

    const asyncFuntion = async () => {
      await reqToken()
        .then((res) => {
          localStorage.setItem("token", res.data.Response.data);
          setToken(res.data.Response.data);
        })
        .catch((err) => console.log(err));
    };
    asyncFuntion();
    // if (!a) {
    //     history.push("/login")
    // }
  }, []);

  useEffect(() => {
    // console.log("login layout", location);
    if (location.hash.includes("login")) history.push("/login");
  }, []);

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div>
            {" "}
            <img
              width={50}
              height={50}
              src="../../../images/logo.png"
              alt="Logo"
            />
            RS Paru dr. Ario Wirawan Salatiga
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              value={username}
              className="form-control mt-1"
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              value={password}
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={doLogin}>
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
};
export default LoginAdmin;
