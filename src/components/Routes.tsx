import WBKFotoComponent from "./WBKFotoComponent";
import AddNav from "./admin/components/nav/addNav";
import ListNavigasi from "./admin/components/nav/listNav";
import EditBerita from "./admin/components/news/editBerita";
import TabelPost from "./admin/components/news/listPosting";
import PostingBerita from "./admin/components/news/postingBerita";
import AddPage from "./admin/components/page/addPage";
import EditPage from "./admin/components/page/editPage";
import ListPage from "./admin/components/page/listPage";
import AddSlider from "./admin/components/slider/addSlider";
import EditSlider from "./admin/components/slider/editSlider";
import ListSlider from "./admin/components/slider/listSlider";
import BlogComponent from "./blogComponent";
import BlogsComponent from "./blogsComponent";
import ContactComponent from "./contactComponent";
import HomeComponent from "./homeComponent";
import MaklumatComponent from "./maklumatComponent";
import PageComponent from "./pageComponent";
import PdfComponent from "./pdfComponent";
import PostComponent from "./postComponent";
import VideoComponent from "./videoComponent";

const Routes: any = [
  {
    path: "/login",
    layout: "web-admin-paw",
    component: <PostingBerita />,
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
    path: "/info/berita",
    layout: "landing",
    component: <BlogsComponent />,
  },
  {
    path: "/info/pengumuman/:id",
    layout: "landing",
    component: <BlogComponent />,
  },
  {
    path: "/info/pengumuman",
    layout: "landing",
    component: <BlogsComponent />,
  },
  {
    path: "/info/artikel/:id",
    layout: "landing",
    component: <BlogComponent />,
  },
  {
    path: "/info/artikel",
    layout: "landing",
    component: <BlogsComponent />,
  },
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
    path: "/post/:id/:subId",
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
    path: "/pdf/:id",
    layout: "/landing",
    component: <PdfComponent />,
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
  {
    path: "/slider",
    layout: "/web-admin-paw",
    component: <ListSlider />,
  },
  {
    path: "/slider/add",
    layout: "/web-admin-paw",
    component: <AddSlider />,
  },
  {
    path: "/slider/edit/:id",
    layout: "/web-admin-paw",
    component: <EditSlider />,
  },
  {
    path: "/:id",
    layout: "landing",
    component: <PageComponent />,
  },
  {
    path: "/:postId/:id",
    layout: "landing",
    component: <PostComponent />,
  },
  {
    path: "/:postId/:id/:subId",
    layout: "landing",
    component: <PostComponent />,
  },
  {
    path: "/:postId/:id/:subId/:childId",
    layout: "landing",
    component: <PostComponent />,
  },
  {
    path: "/:postId/:id/:subId/:childId/:subChildId",
    layout: "landing",
    component: <PostComponent />,
  },
  {
    path: "/:postId/:id/:subId",
    layout: "landing",
    component: <PostComponent />,
  },
  {
    path: "/page",
    layout: "/web-admin-paw",
    component: <ListPage />,
  },
  {
    path: "/page/add",
    layout: "/web-admin-paw",
    component: <AddPage />,
  },
  {
    path: "/page/edit/:id",
    layout: "/web-admin-paw",
    component: <EditPage />,
  },
];
export default Routes;
