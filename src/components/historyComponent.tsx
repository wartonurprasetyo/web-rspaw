import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useParams } from "react-router-dom";
import * as data from "./fakeData";
import { Parser } from "html-to-react";

const HistoryComponent = () => {
  // const [newsinfo, setNewsInfo] = useState<any>({});
  const [socmed, setSocmed] = useState<any[]>([]);
  const [icons, setIcon] = useState<any>({});
  const [history, setHistory] = useState<any>({});

  const params: any = useParams();

  useEffect(() => {
    setHistory(data.history);
  }, []);
  return (
    <>
      {/* <HeaderComponent></HeaderComponent> */}
      <section className="page-title bg-contact-us">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <h1>Sejarah</h1>
                <p>
                  {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Blanditiis, ex! */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about section">
        <div className="container">
          <div className="row align-items-center">
            {/* <div className="col-lg-6">
              <div className="about-img">
                <img className="img-fluid" src="images/company/about.jpg" />
              </div>
            </div> */}
            <div className="col-12 mt-5 mt-lg-0">
              <div className="pl-0 pl-lg-4">
                <h2 className="section-title">
                  Sejarah Singkat RS Paru Dr. Ario Wirawan
                </h2>
                {Parser().parse(history)}
              </div>
            </div>
          </div>
          {/* <div className="row counter-box text-center mt-50">
            <div className="col-lg-2 col-md-4 col-6 mt-4">
              <div className="counter-item">
                <i className="ion-ios-flask-outline"></i>
                <h4 className="count" data-count="349">
                  0
                </h4>
                <span>Completed Projects</span>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6 mt-4">
              <div className="counter-item">
                <i className="ion-ios-flame-outline"></i>
                <h4 className="count" data-count="35000">
                  0
                </h4>
                <span>Lines Of Code</span>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6 mt-4">
              <div className="counter-item">
                <i className="ion-ios-pint-outline"></i>
                <h4 className="count" data-count="70">
                  0
                </h4>
                <span>Satisfied Customer</span>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6 mt-4">
              <div className="counter-item">
                <i className="ion-ios-wineglass-outline"></i>
                <h4 className="count" data-count="10">
                  0
                </h4>
                <span>Awards Winner</span>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-6 mt-4">
              <div className="counter-item">
                <i className="ion-ios-chatboxes-outline"></i>
                <h4 className="count" data-count="30">
                  0
                </h4>
                <span>Satisfied Customer</span>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6 mt-4">
              <div className="counter-item">
                <i className="ion-ios-body-outline"></i>
                <h4 className="count" data-count="15">
                  0
                </h4>
                <span>Awards Winner</span>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* <section className="about-feature bg-dark section dark-service">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>We are indepented Design & Development Agency</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="service-item">
                <i className="ion-ios-color-filter-outline"></i>
                <h4>IOS App Development</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incidid
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item">
                <i className="ion-ios-unlocked-outline"></i>
                <h4>App Secutity</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incidid
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item">
                <i className="ion-ios-game-controller-b-outline"></i>
                <h4>Games Development</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incidid
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item">
                <i className="ion-ios-mic-outline"></i>
                <h4>Animation and Editing</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incidid
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item">
                <i className="ion-ios-lightbulb-outline"></i>
                <h4>UI/UX Design</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incidid
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item">
                <i className="icon ion-coffee"></i>
                <h4>Branding</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incidid
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial section-sm">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="testimonial-carousel text-center">
                <div className="testimonial-slider owl-carousel">
                  <div>
                    <i className="ion-quote"></i>
                    <p>
                      "This Company created an e-commerce site with the tools to
                      make our business a success, with innovative ideas we feel
                      that our site has unique elements that make us stand out
                      from the crowd."
                    </p>
                    <div className="user">
                      <img src="images/item-img1.jpg" alt="Pepole" />
                      <p>
                        <span>Rose Ray</span> CEO-Themefisher
                      </p>
                    </div>
                  </div>
                  <div>
                    <i className="ion-quote"></i>
                    <p>
                      "This Company created an e-commerce site with the tools to
                      make our business a success, with innovative ideas we feel
                      that our site has unique elements that make us stand out
                      from the crowd."
                    </p>
                    <div className="user">
                      <img src="images/item-img1.jpg" alt="Pepole" />
                      <p>
                        <span>Rose Ray</span> CEO-Themefisher
                      </p>
                    </div>
                  </div>
                  <div>
                    <i className="ion-quote"></i>
                    <p>
                      "This Company created an e-commerce site with the tools to
                      make our business a success, with innovative ideas we feel
                      that our site has unique elements that make us stand out
                      from the crowd."
                    </p>
                    <div className="user">
                      <img src="images/item-img1.jpg" alt="Pepole" />
                      <p>
                        <span>Rose Ray</span> CEO-Themefisher
                      </p>
                    </div>
                  </div>
                  <div>
                    <i className="ion-quote"></i>
                    <p>
                      "This Company created an e-commerce site with the tools to
                      make our business a success, with innovative ideas we feel
                      that our site has unique elements that make us stand out
                      from the crowd."
                    </p>
                    <div className="user">
                      <img src="images/item-img1.jpg" alt="Pepole" />
                      <p>
                        <span>Rose Ray</span> CEO-Themefisher
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="tabCommon">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      id="vision-tab"
                      data-toggle="tab"
                      href="#vision"
                      role="tab"
                      aria-controls="vision"
                      aria-selected="true"
                    >
                      Vision
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="mission-tab"
                      data-toggle="tab"
                      href="#mission"
                      role="tab"
                      aria-controls="mission"
                      aria-selected="false"
                    >
                      Mission
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="approch-tab"
                      data-toggle="tab"
                      href="#approch"
                      role="tab"
                      aria-controls="approch"
                      aria-selected="false"
                    >
                      Approach
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="vision"
                    role="tabpanel"
                    aria-labelledby="vision-tab"
                  >
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Inventore nobis ducimus facere repellat harum, eius
                      cupiditate, aliquam aut deserunt. Nemo illo ex impedit
                      autem quod nobis architecto, velit quasi, aut voluptas
                      porro natus. Fuga magnam perspiciatis fugit, placeat
                      possimus officia non ducimus voluptatum aspernatur ad
                      quidem neque accusantium repudiandae cupiditate nobis
                      corporis, cum facere iusto, modi cumque consectetur saepe.
                      Officia, molestiae tempore! Consequatur ipsa consequuntur
                      saepe suscipit vero laudantium, mollitia, quaerat soluta
                      nihil non tempore, quos dignissimos quasi ab officiis
                      illum numquam quibusdam ducimus, veritatis ad. Quia,
                      aliquid. Quaerat quos ducimus ipsam amet minus temporibus
                      eos sequi alias hic nemo.
                    </p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="mission"
                    role="tabpanel"
                    aria-labelledby="mission-tab"
                  >
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Inventore nobis ducimus facere repellat harum, eius
                      cupiditate, aliquam aut deserunt. Nemo illo ex impedit
                      autem quod nobis architecto, velit quasi, aut voluptas
                      porro natus. Fuga magnam perspiciatis fugit, placeat
                      possimus officia non ducimus voluptatum aspernatur ad
                      quidem neque accusantium repudiandae cupiditate nobis
                      corporis, cum facere iusto, modi cumque consectetur saepe.
                      Officia, molestiae tempore! Consequatur ipsa consequuntur
                      saepe suscipit vero laudantium, mollitia, quaerat soluta
                      nihil non tempore, quos dignissimos quasi ab officiis
                      illum numquam quibusdam ducimus, veritatis ad. Quia,
                      aliquid. Quaerat quos ducimus ipsam amet minus temporibus
                      eos sequi alias hic nemo.
                    </p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="approch"
                    role="tabpanel"
                    aria-labelledby="approch-tab"
                  >
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Inventore nobis ducimus facere repellat harum, eius
                      cupiditate, aliquam aut deserunt. Nemo illo ex impedit
                      autem quod nobis architecto, velit quasi, aut voluptas
                      porro natus. Fuga magnam perspiciatis fugit, placeat
                      possimus officia non ducimus voluptatum aspernatur ad
                      quidem neque accusantium repudiandae cupiditate nobis
                      corporis, cum facere iusto, modi cumque consectetur saepe.
                      Officia, molestiae tempore! Consequatur ipsa consequuntur
                      saepe suscipit vero laudantium, mollitia, quaerat soluta
                      nihil non tempore, quos dignissimos quasi ab officiis
                      illum numquam quibusdam ducimus, veritatis ad. Quia,
                      aliquid. Quaerat quos ducimus ipsam amet minus temporibus
                      eos sequi alias hic nemo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="call-to-action bg-1 section-sm overly">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <h2 className="mb-3">
                  We design delightful digital experiences.
                </h2>
                <p>
                  Read more about what we do and our philosophy of design. Judge
                  for yourself The work and results <br /> we’ve achieved for
                  other clients, and meet our highly experienced Team who just
                  love to design.
                </p>
                <a
                  className="btn btn-main btn-solid-border"
                  href="contact.html"
                >
                  Tell Us Your Story
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <FooterComponent></FooterComponent> */}
    </>
  );
};

export default HistoryComponent;
