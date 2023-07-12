import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Button,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";

const Topbar = ({ toggleSidebar }) => {
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

  return (
    <div>

      <Navbar
        color="primary"
        full
        className="navbar shadow-sm p-3 mb-5 bg-white rounded"
        light
        expand="md"
      >
        <NavbarToggler onClick={toggleSidebar} />
        <Collapse isOpen={topbarIsOpen} navbar>
          <Nav className="me-auto" navbar>

          </Nav>
          <NavbarText>  <img
            width={50}
            height={50}
            src="../../../images/logo.png"
            alt="Logo"
          />RS Paru dr. Ario Wirawan Salatiga</NavbarText>
        </Collapse>
      </Navbar>

    </div>
  );
};

export default Topbar;
