import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { Link, useHistory } from "react-router-dom";

const Topbar = ({ toggleSidebar }) => {
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);
  const history = useHistory()
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleLogout = () => {
    // Implement your logout logic here, e.g., clearing session or local storage, etc.
    // After logout, redirect the user to the login page or any other page as needed.
    console.log('Logging out...');
    localStorage.removeItem('rspaw-token')
    history.push("/login")
    toggleModal();
  };

  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Logout</ModalHeader>
        <ModalBody>
          Are you sure you want to logout?
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
          <Button color="danger" onClick={handleLogout}>
            Logout
          </Button>
        </ModalFooter>
      </Modal>
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
          <NavLink onClick={toggleModal} className="ml-4">
            <Button color="danger">
              <FontAwesomeIcon icon={faRightFromBracket} />
            </Button>
          </NavLink>
        </Collapse>
      </Navbar>

    </div>
  );
};

export default Topbar;
