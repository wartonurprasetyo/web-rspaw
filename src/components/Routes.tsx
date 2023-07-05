import BlogComponent from "./blogsComponent";
import HomeComponent from "./homeComponent";

const Routes: any = [
  {
    path: "/berita-terbaru",
    component: <BlogComponent />,
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
