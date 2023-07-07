import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Parser } from "html-to-react";
import { formatDate, imageOnError, trimText } from "../assets/js/__global";
import * as data from "./fakeData";
import FooterComponent from "./template/footerComponent";
import HeaderComponent from "./template/headerComponent";
import { useParams } from "react-router-dom";

const BlogComponent = () => {
  const [newsinfo, setNewsInfo] = useState<any>({});

  const params: any = useParams();

  useEffect(() => {
    // console.log(data.newsinfo.find((item) => item.id == params.id));
    setNewsInfo(data.newsinfo.find((item) => item.id == params.id));
  }, [params.id]);
  return (
    <>
      {/* <HeaderComponent></HeaderComponent> */}
      <section className="page-title bg-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <h1>Blog Details</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nisi, quibusdam.
                </p>
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
                <h2 className="post-title">{newsinfo.title}</h2>
                <div className="post-meta">
                  <ul>
                    <li>
                      <i className="ion-calendar"></i>{" "}
                      {formatDate(newsinfo.date)}
                    </li>
                    <li>
                      <i className="ion-android-people"></i> POSTED BY{" "}
                      {newsinfo.author}
                    </li>
                    <li>
                      <a href="blog-grid.html">
                        <i className="ion-pricetags"></i> LIFESTYLE
                      </a>
                      ,<a href="blog-left-sidebar.html"> TRAVEL</a>,{" "}
                      <a href="blog-right-sidebar.html">FASHION</a>
                    </li>
                  </ul>
                </div>
                <div className="post-thumb">
                  <img
                    className="img-fluid blog-image"
                    src={newsinfo.image}
                    onError={imageOnError}
                    alt=""
                  />
                </div>
                <div className="post-content post-excerpt">
                  {Parser().parse(newsinfo.description)}
                </div>
                {/* <div className="post-comments">
                  <h3 className="post-sub-heading">10 Comments</h3>
                  <ul className="media-list comments-list m-bot-50 clearlist">
                    <!-- Comment Item start-->
                    <li className="media">
                      <a className="pull-left" href="#!">
                        <img
                          className="media-object comment-avatar rounded-circle"
                          src="images/blog/avater-1.jpg"
                          alt=""
                          width="50"
                          height="50"
                        />
                      </a>
                      <div className="media-body">
                        <div className="comment-info">
                          <h4 className="comment-author">
                            <a href="#!">Jonathon Andrew</a>
                          </h4>
                          <time>July 02, 2020, at 11:34</time>
                          <a className="comment-button" href="#!">
                            <i className="tf-ion-chatbubbles"></i>Reply
                          </a>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque at magna ut ante eleifend eleifend.
                        </p>
                        <!--  second level Comment start-->
                        <div className="media">
                          <a className="pull-left" href="#!">
                            <img
                              className="media-object comment-avatar rounded-circle"
                              src="images/blog/avater-2.jpg"
                              alt=""
                              width="50"
                              height="50"
                            />
                          </a>
                          <div className="media-body">
                            <div className="comment-info">
                              <h4 className="comment-author">
                                <a href="#!">Senorita</a>
                              </h4>
                              <time>July 02, 2020, at 11:34</time>
                              <a className="comment-button" href="#!">
                                <i className="tf-ion-chatbubbles"></i>Reply
                              </a>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Quisque at magna ut ante eleifend eleifend.
                            </p>
                            <!-- third level Comment start -->
                            <div className="media">
                              <a className="pull-left" href="#!">
                                <img
                                  className="media-object comment-avatar rounded-circle"
                                  src="images/blog/avater-3.jpg"
                                  alt=""
                                  width="50"
                                  height="50"
                                />
                              </a>
                              <div className="media-body">
                                <div className="comment-info">
                                  <h4 className="comment-author">
                                    <a href="#!">Senorita</a>
                                  </h4>
                                  <time>July 02, 2020, at 11:34</time>
                                  <a className="comment-button" href="#!">
                                    <i className="tf-ion-chatbubbles"></i>Reply
                                  </a>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Quisque at magna ut ante
                                  eleifend eleifend.
                                </p>
                              </div>
                            </div>
                            <!-- third level Comment end -->
                          </div>
                        </div>
                        <!-- second level Comment end -->
                      </div>
                    </li>
                    <!-- End Comment Item -->

                    <!-- Comment Item start-->
                    <li className="media">
                      <a className="pull-left" href="#!">
                        <img
                          className="media-object comment-avatar rounded-circle"
                          src="images/blog/avater-4.jpg"
                          alt=""
                          width="50"
                          height="50"
                        />
                      </a>
                      <div className="media-body">
                        <div className="comment-info">
                          <h4 className="comment-author">
                            <a href="#!">Jonathon Andrew</a>
                          </h4>
                          <time>July 02, 2020, at 11:34</time>
                          <a className="comment-button" href="#!">
                            <i className="tf-ion-chatbubbles"></i>Reply
                          </a>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque at magna ut ante eleifend eleifend.
                        </p>
                      </div>
                    </li>
                    <!-- End Comment Item -->

                    <!-- Comment Item start-->
                    <li className="media">
                      <a className="pull-left" href="#!">
                        <img
                          className="media-object comment-avatar rounded-circle"
                          src="images/blog/avater-1.jpg"
                          alt=""
                          width="50"
                          height="50"
                        />
                      </a>
                      <div className="media-body">
                        <div className="comment-info">
                          <h4 className="comment-author">
                            <a href="#!">Jonathon Andrew</a>
                          </h4>
                          <time>July 02, 2020, at 11:34</time>
                          <a className="comment-button" href="#!">
                            <i className="tf-ion-chatbubbles"></i>Reply
                          </a>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque at magna ut ante eleifend eleifend.
                        </p>
                      </div>
                    </li>
                    <!-- End Comment Item -->
                  </ul>
                </div>
                <div className="post-comments-form">
                  <h3 className="post-sub-heading">Leave You Comments</h3>
                  <form method="post" action="#!" id="form" role="form">
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <!-- Name -->
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className=" form-control"
                          placeholder="Name *"
                          maxLength={100}
                          required
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <!-- Email -->
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className=" form-control"
                          placeholder="Email *"
                          maxLength={100}
                          required
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <!-- Website -->
                        <input
                          type="text"
                          name="website"
                          id="website"
                          className=" form-control"
                          placeholder="Website"
                          maxLength={100}
                        />
                      </div>
                      <!-- Comment -->
                      <div className="form-group col-md-12">
                        <textarea
                          name="text"
                          id="text"
                          className=" form-control"
                          rows={6}
                          placeholder="Comment"
                          maxLength={400}
                        ></textarea>
                      </div>
                      <!-- Send Button -->
                      <div className="form-group col-md-12">
                        <button type="submit" className="btn btn-main ">
                          Send comment
                        </button>
                      </div>
                    </div>
                  </form>
                </div> */}
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
