import React, { Suspense } from "react";
import classNames from "classnames";
import { Button, Col, Container, FormGroup } from "reactstrap";
import { Switch, Route } from "react-router-dom";

import Topbar from "./Topbar";
import PostingBerita from "../news/postingBerita";
import TabelPost from "../news/listPosting";
import EditBerita from "../news/editBerita";
import ListNav from "../nav/listNav";
import AddNav from "../nav/addNav";
import "./Content.css"

const Content = ({ sidebarIsOpen, toggleSidebar, menuLayout }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
    style={{ position: "relative", marginLeft: 250 }}
  >
    <Topbar toggleSidebar={toggleSidebar} />
    <Switch>
      <Suspense>
        {menuLayout}
        {/* 
        <Route exact path="/web-admin-paw/news" component={() => <TabelPost />} />
        <Route exact path="/web-admin-paw/news/add" component={() => <PostingBerita />} />
        <Route exact path="/web-admin-paw/news/edit/:id" component={() => <EditBerita />} />
        <Route exact path="/web-admin-paw/nav" component={() => <ListNav />} />
        <Route exact path="/web-admin-paw/nav/add" component={() => <AddNav />} /> */}
        {/* <Redirect from="/" to="/" /> */}
      </Suspense>
    </Switch>
  </Container>
);

export default Content;
