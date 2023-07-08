import React from "react";
import BlogComponent from "./blogComponent";
import BlogsComponent from "./blogsComponent";
import HomeComponent from "./homeComponent";
import ContactComponent from "./contactComponent";
import HistoryComponent from "./historyComponent";

// const HomeComponent = React.lazy(() => import("./homeComponent"));

const Routes: any = [
  {
    path: "/berita-terbaru/:id",
    component: <BlogComponent />,
  },
  {
    path: "/berita-terbaru",
    component: <BlogsComponent />,
  },
  {
    path: "/page-kontak",
    component: <ContactComponent />,
  },
  {
    path: "/page-profil-sejarah",
    component: <HistoryComponent />,
  },
  // {
  //   path: "",
  //   component: <HomeComponent />,
  // },
  {
    path: "/",
    component: <HomeComponent />,
  },
];
export default Routes;
