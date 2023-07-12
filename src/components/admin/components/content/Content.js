import React from "react";
import classNames from "classnames";
import { Button, Col, Container, FormGroup } from "reactstrap";
import { Switch, Route } from "react-router-dom";

import Topbar from "./Topbar";
import PostingBerita from "../news/postingBerita";

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} />
    <Switch>

      <Route exact path="/web-admin-paw/news" component={() => <PostingBerita />} />
    </Switch>
  </Container>
);

export default Content;
