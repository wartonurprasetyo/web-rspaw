import { Parser } from "html-to-react";
import { useContext, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useHistory, useParams } from "react-router-dom";
import { formatDate, imageOnError } from "../assets/js/__global";
import * as data from "./datas/fakeData";
import { getPostByUrl } from "../services/api_web";
import LoadingContext from "../contexts/LoadingContext"; // import loading

const PostComponent = () => {
  const [dataPost, setDataPost] = useState<any>({});
  const loading = useContext(LoadingContext); // get state & function loading
  const params: any = useParams();
  const pathUrl: any = useHistory();
  const [isNotFound, setIsNotFound] = useState(false);
  // console.log(useHistory());

  useEffect(() => {
    console.log(pathUrl.location.pathname);

    let url = "/post";
    if (params.id) url = `${url}/${params.id}`;
    if (params.subId) url = `${url}/${params.subId}`;
    if (params.childId) url = `${url}/${params.childId}`;
    if (params.subChildId) url = `${url}/${params.subChildId}`;
    let newData = {
      post_url: `${pathUrl.location.pathname}`,
      // post_url: `${url}`,
    };

    loading.setLoading(true);
    getPostByUrl(newData)
      .then((res) => {
        loading.setLoading(false);
        console.log(res.data);
        setDataPost(res.data.Data);
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
      <section className="page-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {isNotFound && (
                <div className="post post-single text-center">
                  Data Tidak Ditemukan
                </div>
              )}
              {!isNotFound && (
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
              )}
            </div>
          </div>
        </div>
      </section>
      {/* <FooterComponent></FooterComponent> */}
    </>
  );
};

export default PostComponent;
