import { Parser } from "html-to-react";
import { useContext, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useHistory, useParams } from "react-router-dom";
import { formatDate, imageOnError } from "../assets/js/__global";
import LoadingContext from "../contexts/LoadingContext"; // import loading
import { getPostById } from "../services/api_web";
import * as data from "./datas/fakeData";

const BlogComponent = () => {
  const loading = useContext(LoadingContext); // get state & function loading
  const params: any = useParams();
  const pathUrl: any = useHistory();
  const [newsinfo, setNewsInfo] = useState<any>({});
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    // console.log(data.newsinfo.find((item) => item.id == params.id));
    setNewsInfo(data.newsinfo.find((item) => item.id == params.id));
  }, [params.id]);

  useEffect(() => {
    console.log(pathUrl.location.pathname);

    let url = "/post";
    if (params.id) url = `${url}/${params.id}`;
    let newData = {
      post_id: `${params.id}`,
      // post_url: `${url}`,
    };

    loading.setLoading(true);
    getPostById(newData)
      .then((res) => {
        loading.setLoading(false);
        console.log(res.data);
        setNewsInfo(res.data.Data);
        setIsNotFound(res.data.Message == "Record not found");
      })
      .catch((err) => {
        loading.setLoading(false);
        console.log(err);
      });
    // console.log(data.dataPost.find((item) => item.id == params.id));
  }, [params]);
  return (
    <>
      {/* <HeaderComponent></HeaderComponent> */}
      <section className="page-title bg-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <h1>Blog Details</h1>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nisi, quibusdam.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="post post-single">
                <h2 className="post-title">{newsinfo?.post_title}</h2>
                <div className="post-meta">
                  <ul>
                    <li>
                      <i className="ion-calendar"></i>{" "}
                      {formatDate(newsinfo?.post_date)}
                    </li>
                    <li>
                      <i className="ion-android-people"></i> POSTED BY{" "}
                      {newsinfo?.post_author}
                    </li>
                    {/* <li>
                      <a href="blog-grid.html">
                        <i className="ion-pricetags"></i> LIFESTYLE
                      </a>
                      ,<a href="blog-left-sidebar.html"> TRAVEL</a>,{" "}
                      <a href="blog-right-sidebar.html">FASHION</a>
                    </li> */}
                  </ul>
                </div>
                <div className="post-thumb">
                  <img
                    className="img-fluid blog-image"
                    src={newsinfo?.post_image}
                    onError={imageOnError}
                    alt=""
                  />
                </div>
                <div className="post-content post-excerpt">
                  {Parser().parse(newsinfo?.post_content)}
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

export default BlogComponent;
