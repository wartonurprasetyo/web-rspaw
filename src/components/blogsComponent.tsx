import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link, useHistory, useParams } from "react-router-dom";
import { formatDate, imageOnError, trimText } from "../assets/js/__global";
import { getPostByGroup, reqToken } from "../services/api_web";
import * as fakedata from "./datas/fakeData";

const BlogsComponent = () => {
  const [newsinfo, setNewsInfo] = useState<any[]>([]);
  const params: any = useParams();
  const location: any = useHistory();
  const categories = ["artikel", "berita", "pengumuman", "post"];
  const [activeCategory, setActiveCategory] = useState("post");

  const getPost = async () => {
    let category = "post";
    let splittedUrl = location.location.pathname.split("/").filter((el) => el);
    if (splittedUrl.length == 2 && categories.includes(splittedUrl[1]))
      category = splittedUrl[1];

    setActiveCategory(category);
    let data = {
      post_group: category,
      post_status: "1",
    };
    await reqToken()
      .then((res) => {
        localStorage.setItem("token", res.data.Response.data);
      })
      .catch((err) => console.log(err));
    await getPostByGroup(data)
      .then((resp) => {
        console.log(resp);
        let datas = [];
        if (
          location.location.pathname == "/info/pengumuman" ||
          params.category == "pengumuman"
        )
          datas = fakedata.newsinfo.map((item: any) => {
            return { ...item, toUrl: item.post_url };
          });
        setNewsInfo([
          ...datas,
          ...resp.data.Data.map((item: any) => {
            return {
              ...item,
              toUrl: `${location.location.pathname}/${item.post_id}`,
            };
          }),
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(location.location.pathname);

    getPost();
    console.log(params.category);
  }, [params]);
  return (
    <>
      {/* <HeaderComponent></HeaderComponent> */}
      <section className="page-title bg-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <h1>{activeCategory}</h1>
                <p>
                  {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nisi, quibusdam. */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-wrapper">
        <div className="container">
          <div className="row">
            {newsinfo.map((item) => (
              <div className="col-md-6">
                <div className="post">
                  <div className="post-thumb">
                    {/* <a href={`${item.toUrl}`}>
                      <img
                        className="img-fluid blog-image"
                        src={item.post_image || "-"}
                        onError={imageOnError}
                        alt=""
                      />
                    </a> */}
                    <Link to={`${item.toUrl}`}>
                      <img
                        className="img-fluid blog-image"
                        src={item.post_image || "-"}
                        onError={imageOnError}
                        alt=""
                      />
                    </Link>
                  </div>
                  <h3 className="post-title">
                    <Link to={`${item.toUrl}`}>{item.post_title}</Link>
                  </h3>
                  <div className="post-meta">
                    <ul>
                      <li>
                        <i className="ion-calendar"></i>{" "}
                        {formatDate(item.post_date)}
                      </li>
                      <li>
                        <i className="ion-android-people"></i> POSTED BY{" "}
                        {item.post_author}
                      </li>
                    </ul>
                  </div>
                  <div className="post-content">
                    {/* <p>{Parser().parse(item.post_content)}</p> */}
                    <p>
                      {item.post_content &&
                      trimText(item.post_content).length > 250
                        ? trimText(item.post_content).substring(0, 250) + "..."
                        : trimText(item.post_content)}
                    </p>
                    <Link to={`${item.toUrl}`} className="btn btn-main">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <FooterComponent></FooterComponent> */}
    </>
  );
};

export default BlogsComponent;
