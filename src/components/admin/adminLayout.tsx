import { HashRouter, Redirect, Route, BrowserRouter as Router, Switch, useHistory, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Content from "./components/content/Content";
import { Suspense, useContext, useEffect, useRef, useState } from "react";
import { reqToken } from "../../services/api_web";
import LoadingOverlay from "react-loading-overlay-ts";
import { ScaleLoader } from "react-spinners";
import LoadingContext from "../../contexts/LoadingContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Routes from "../Routes";
import classNames from "classnames";
import { Col, Container, Row } from "reactstrap";
import Topbar from "./components/content/Topbar";
import SideBar from "./components/sidebar/SideBar";
const AdminLayout = (menu: any) => {
    const [loading, setLoading] = useState<any>(false);
    const changeLoadingState = (payload: boolean) => {
        setLoading(payload);
    };
    const history = useHistory()
    const mainContent = useRef(null);

    const location = useLocation();

    const getRoutes = (routes: any) => {
        return routes.map((prop: any, key: any) => {
            if (prop.layout === "/web-admin-paw") {
                if (prop.collapsed) {
                    return prop.child.map((el: any, subkey: any) => (
                        <Route
                            exact
                            path={el.layout + el.path}
                            component={el.component}
                            key={`submenu-${subkey}`}
                        />
                    ));
                }

                else
                    return (
                        <Route
                            exact
                            path={prop.layout + prop.path}
                            component={() => prop.component}
                            key={key}
                        />
                    );
            } else {
                return null;
            }
        });
    };
    useEffect(() => {
        let a = localStorage.getItem("rspaw-token")

        // const asyncFuntion = async () => {
        //     let token = "";
        //     await reqToken()
        //         .then((res) => {
        //             localStorage.setItem("token", res.data.Response.data);
        //             token = res.data.Response.data;
        //         })
        //         .catch((err) => console.log(err));

        // };
        // asyncFuntion();
        if (!a) {
            history.push("/login")
        }
    }, []);
    console.log('admin layout');
    
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
    return (
        < >
            <ToastContainer />
            <div className="main-content" ref={mainContent}>
                {/* <Topbar toggleSidebar={toggleSidebar} /> */}
                <LoadingContext.Provider
                    value={{ loading: loading, setLoading: changeLoadingState }}>
                    <LoadingOverlay
                        className="custom-spinner"
                        active={loading}
                        spinner={<ScaleLoader color="#ff8a1f" />}
                        text={`Please Wait ...`}
                    >

                        <div className="App wrapper">
                            <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
                            <Content toggleSidebar={toggleSidebar} menuLayout={menu.menu} sidebarIsOpen={sidebarIsOpen} />
                        </div>

                        {/* <Switch>
                                <Suspense>

                                    {getRoutes(Routes)}
                                
                                </Suspense>
                            </Switch> */}

                    </LoadingOverlay>
                </LoadingContext.Provider>
            </div>
        </>
    )
}
export default AdminLayout