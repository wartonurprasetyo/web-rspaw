import React from "react";
import classNames from "classnames";
import { Button, Col, Container, FormGroup } from "reactstrap";
import { Switch, Route } from "react-router-dom";

import Topbar from "./Topbar";
import PostingBerita from "../news/postingBerita";
import TabelPost from "../news/listPosting";
import EditBerita from "../news/editBerita";

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} />
    <Switch>

      <Route exact path="/web-admin-paw" component={() => <TabelPost />} />
      <Route exact path="/web-admin-paw/news/add" component={() => <PostingBerita />} />
      <Route exact path="/web-admin-paw/news/edit/:id" component={() => <EditBerita />} />
      {/* <Redirect from="/" to="/" /> */}
    </Switch>
  </Container>
);

export default Content;
