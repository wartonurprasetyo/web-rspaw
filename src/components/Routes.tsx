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

// const HomeComponent = React.lazy(() => import("./homeComponent"));

const Routes: any = [
  {
    path: "/web-admin-paw",
    layout: "admin",
    component: <AdminLayout />,
  },
  {
    path: "/login",
    layout: "admin",
    component: <LoginAdmin />,
  },
  {
    path: "/",
    layout: "landing",
    component: <HomeComponent />,
  },
  {
    path: "/info/berita/:id",
    layout: "landing",
    component: <BlogComponent />,
  },
  {
    path: "/info/:category",
    layout: "landing",
    component: <BlogsComponent />,
  },
  // {
  //   path: "/info/pengumuman",
  //   layout: "landing",
  //   component: <BlogsComponent />,
  // },
  // {
  //   path: "/info/artikel",
  //   layout: "landing",
  //   component: <BlogsComponent />,
  // },
  {
    path: "/kontak",
    layout: "landing",
    component: <ContactComponent />,
  },
  {
    path: "/profil/maklumat",
    layout: "landing",
    component: <MaklumatComponent />,
  },
  {
    path: "/profil/video",
    layout: "landing",
    component: <VideoComponent />,
  },
  {
    path: "/profil/wbk/foto",
    layout: "landing",
    component: <WBKFotoComponent />,
  },
  {
    path: "/post/:id",
    layout: "landing",
    component: <PostComponent />,
  },
  {
    path: "/profil/:id/:subid",
    layout: "landing",
    component: <PageComponent />,
  },
  {
    path: "/profil/:id",
    layout: "landing",
    component: <PageComponent />,
  },
  {
    path: "/:id",
    layout: "landing",
    component: <PageComponent />,
  },
  // {
  //   path: "/:post/:id",
  //   layout: "landing",
  //   component: <PostComponent />,
  // },
];
export default Routes;
