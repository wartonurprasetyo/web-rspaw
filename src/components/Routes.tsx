import React from "react";
import BlogComponent from "./blogComponent";
import BlogsComponent from "./blogsComponent";
import HomeComponent from "./homeComponent";
import ContactComponent from "./contactComponent";
import HistoryComponent from "./historyComponent";
import Sp4nComponent from "./sp4nComponent";
import VisiMisiComponent from "./visimisiComponent";
import StrukturComponent from "./structureComponent";
import DireksiComponent from "./direksiComponent";
import UpayaComponent from "./upayaComponent";
import MaklumatComponent from "./maklumatComponent";
import VideoComponent from "./videoComponent";
import WBKFotoComponent from "./WBKFotoComponent";

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
  {
    path: "/page-lapor",
    component: <Sp4nComponent />,
  },
  {
    path: "/page-profil-visimisi",
    component: <VisiMisiComponent />,
  },
  {
    path: "/page-profil-struktur",
    component: <StrukturComponent />,
  },
  {
    path: "/page-pofil-direksi",
    component: <DireksiComponent />,
  },
  {
    path: "/page-profil-upaya",
    component: <UpayaComponent />,
  },
  {
    path: "/page-profil-maklumat",
    component: <MaklumatComponent />,
  },
  {
    path: "/page-profil-video",
    component: <VideoComponent />,
  },
  {
    path: "/page-profil-wbk-foto",
    component: <WBKFotoComponent />,
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
