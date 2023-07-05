import BlogComponent from "./blogComponent";
import BlogsComponent from "./blogsComponent";
import HomeComponent from "./homeComponent";

const Routes: any = [
  {
    path: "/berita-terbaru/:id",
    component: <BlogComponent />,
  },
  {
    path: "/berita-terbaru",
    component: <BlogsComponent />,
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
