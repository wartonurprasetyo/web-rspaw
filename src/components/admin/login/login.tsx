import { useState } from "react";
import "./login.css"
import { loginPage } from "../../../services/api_web";
import Config from "../../../config/Config";
import axios from "axios";

const LoginAdmin = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const login = async () => {
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }
        let bodyContent = JSON.stringify({
            "uname": username,
            "upswd": password
        });
        let base = Config.BaseUrlDev;

        let reqOptions = {
            url: base + "adm/login",
            method: "POST",
            headers: headersList,
            data: bodyContent,
        }
        try {
            let response = await axios.request(reqOptions);
            console.log(response.data, "sd");


        } catch (error) {
            console.log(error, "sddd");

        }




    };



    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div> <img
                        width={50}
                        height={50}
                        src="../../../images/logo.png"
                        alt="Logo"
                    />RS Paru dr. Ario Wirawan Salatiga
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
                        <label>Login</label>
                        <input
                            type="password"
                            value={password}
                            className="form-control mt-1"
                            placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary" onClick={() => login()}>
                            Submit
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-2">
                        Forgot <a href="#">password?</a>
                    </p>
                </div>
            </form>
        </div>
    )
}
export default LoginAdmin;