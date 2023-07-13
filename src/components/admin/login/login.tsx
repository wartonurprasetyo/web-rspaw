import { useState } from "react";
import "./login.css"
import { loginPage } from "../../../services/api_web";

function LoginAdmin() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function login() {
        const query = {
            uname: username,
            upswd: password
        }
        loginPage(query).then(respon => {
            console.log(respon);

        }).catch(err => {
            console.log(err);

        })
    }

    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
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