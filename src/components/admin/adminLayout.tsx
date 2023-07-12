import { BrowserRouter as Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import SideBar from "./components/sidebar/SideBar";
import Content from "./components/content/Content";
import { useEffect, useState } from "react";
import { reqToken } from "../../services/api_web";
const AdminLayout = () => {

    useEffect(() => {
        const asyncFuntion = async () => {
            let token = "";
            await reqToken()
                .then((res) => {
                    console.log(res);
                    localStorage.setItem("token", res.data.Response.data);
                    token = res.data.Response.data;
                })
                .catch((err) => console.log(err));

        };
        asyncFuntion();
    }, []);
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
    return (
        <Router>
            <div className="App wrapper">
                <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
                <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
            </div>
        </Router>
    )
}
export default AdminLayout