import { Parser } from "html-to-react";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useParams } from "react-router-dom";
import { formatDate, imageOnError } from "../assets/js/__global";
import * as data from "./fakeData";
import { getPostByUrl } from "../services/api_web";

const PostComponent = () => {
  const [dataPost, setDataPost] = useState<any>({});

  const params: any = useParams();

  useEffect(() => {
    console.log(params.id);
    let newData = {
      post_url: `post/${params.id}`,
    };
    getPostByUrl(newData)
      .then((res) => {
        console.log(res.data);
        setDataPost(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        setDataPost({
          post_id: "2",
          post_author: "cempluk",
          post_date: "2023-07-01T03:03:11Z",
          post_content: "<h3>pengumuman penting</h3>",
          post_title: "Test Header",
          post_status: "1",
          post_created: "2023-07-01T03:03:11Z",
          post_updated: "2023-07-01T03:03:11Z",
          post_group: "post",
          post_url: "/post/test-header",
        });
      });
    // console.log(data.dataPost.find((item) => item.id == params.id));
  }, []);
  return (
    <>
      {/* <HeaderComponent></HeaderComponent> */}
      {/* <section className="page-title bg-contact-us">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <h1>Post Details</h1>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="page-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="post post-single">
                <h2 className="post-title sect">{dataPost.post_title}</h2>
                <div className="post-meta">
                  <ul>
                    <li>
                      <i className="ion-calendar"></i>{" "}
                      {formatDate(dataPost.post_date)}
                    </li>
                    <li>
                      <i className="ion-android-people"></i> POSTED BY{" "}
                      {dataPost.post_author}
                    </li>
                    <li>
                      {/* <a href="blog-grid.html">
                        <i className="ion-pricetags"></i> LIFESTYLE
                      </a>
                      ,<a href="blog-left-sidebar.html"> TRAVEL</a>,{" "}
                      <a href="blog-right-sidebar.html">FASHION</a> */}
                    </li>
                  </ul>
                </div>
                <div className="post-thumb">
                  <img
                    className="img-fluid blog-image"
                    src={dataPost.image}
                    onError={imageOnError}
                    alt=""
                  />
                </div>
                <div className="post-content post-excerpt">
                  {Parser().parse(dataPost.post_content)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <FooterComponent></FooterComponent> */}
    </>
  );
};

export default PostComponent;
