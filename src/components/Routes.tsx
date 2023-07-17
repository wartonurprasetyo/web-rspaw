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
import PostComponent from "./postComponent";
import AdminLayout from "./admin/adminLayout";
import PostingBerita from "./admin/components/news/postingBerita";
import LoginAdmin from "./admin/login/login";
import PageComponent from "./pageComponent";
import TabelPost from "./admin/components/news/listPosting";
import EditBerita from "./admin/components/news/editBerita";
import ListNavigasi from "./admin/components/nav/listNav";
import AddNav from "./admin/components/nav/addNav";

// const HomeComponent = React.lazy(() => import("./homeComponent"));

const Routes: any = [

  {
    path: "/login",
    layout: "auth",
    component: <LoginAdmin />,
  },
  {
    path: "/",
    layout: "landing",
    component: <HomeComponent />,
  },
  {
    path: "/berita-terbaru/:id",
    layout: "landing",
    component: <BlogComponent />,
  },
  {
    path: "/berita-terbaru",
    layout: "landing",
    component: <BlogsComponent />,
  },
  {
    path: "/page-kontak",
    layout: "landing",
    component: <ContactComponent />,
  },
  // {
  //   path: "/page-profil-sejarah",
  //   layout: "landing",
  //   component: <HistoryComponent />,
  // },
  // {
  //   path: "/page-lapor",
  //   layout: "landing",
  //   component: <Sp4nComponent />,
  // },
  // {
  //   path: "/page-profil-visimisi",
  //   layout: "landing",
  //   component: <VisiMisiComponent />,
  // },
  // {
  //   path: "/page-profil-struktur",
  //   layout: "landing",
  //   component: <StrukturComponent />,
  // },
  // {
  //   path: "/page-pofil-direksi",
  //   layout: "landing",
  //   component: <DireksiComponent />,
  // },
  // {
  //   path: "/page-profil-upaya",
  //   layout: "landing",
  //   component: <UpayaComponent />,
  // },
  {
    path: "/page-profil-maklumat",
    layout: "landing",
    component: <MaklumatComponent />,
  },
  {
    path: "/page-profil-video",
    layout: "landing",
    component: <VideoComponent />,
  },
  {
    path: "/page-profil-wbk-foto",
    layout: "landing",
    component: <WBKFotoComponent />,
  },
  {
    path: "/post/:id",
    layout: "landing",
    component: <PostComponent />,
  },
  {
    path: "/:page",
    layout: "landing",
    component: <PageComponent />,
  },

  {
    path: "/news",
    layout: "/web-admin-paw",
    component: <TabelPost />,
  },
  {
    path: "/news/add",
    layout: "/web-admin-paw",
    component: <PostingBerita />,
  },
  {
    path: "/news/edit/:id",
    layout: "/web-admin-paw",
    component: <EditBerita />,
  },
  {
    path: "/nav",
    layout: "/web-admin-paw",
    component: <ListNavigasi />,
  },
  {
    path: "/nav/add",
    layout: "/web-admin-paw",
    component: <AddNav />,
  },
  // {
  //   path: "/:post/:id",
  //   layout: "landing",
  //   component: <PostComponent />,
  // },
];
export default Routes;
