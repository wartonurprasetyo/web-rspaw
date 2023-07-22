import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";

import SubMenu from "./SubMenu";
import "./Navbar.css";

const SideBar = ({ isOpen, toggle }) => (
  <div
    className={classNames("sidebar", { "is-open": isOpen })}
    style={{ backgroundColor: "#1a9e94" }}
  >
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h3>
        <img width={50} height={50} src="../../../images/logo.png" alt="Logo" />{" "}
        RSPAW
      </h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="">

        <NavItem>
          <NavLink className="nav-link-custom" tag={Link} to={"/web-admin-paw"}  >
            Data Info Dan Berita
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink className="nav-link-custom" tag={Link} to={"/web-admin-paw/nav"} h>
            Data Menu
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link-custom" tag={Link} to={"/web-admin-paw/slider"} h>
            Data Slider
          </NavLink>
        </NavItem>

      </Nav>
    </div>
  </div>
);

const submenus = [
  [
    {
      title: "Home 1",
      target: "Home-1",
    },
    {
      title: "Home 2",
      target: "Home-2",
    },
    {
      itle: "Home 3",
      target: "Home-3",
    },
  ],
  [
    {
      title: "Page 1",
      target: "Page-1",
    },
    {
      title: "Page 2",
      target: "Page-2",
    },
  ],
];

export default SideBar;
