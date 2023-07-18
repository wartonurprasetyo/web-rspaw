import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faWhatsappSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { getAllMenus, reqToken } from "../../services/api_web";

const HeaderComponent = (props: any) => {
  const [socmed, setSocmed] = useState([
    {
      name: "facebook",
      url: "https://www.facebook.com/RSPAWSalatigaOfficial",
      icon: (
        <svg
          className="kadence-svg-icon kadence-facebook-svg"
          fill="currentColor"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <title>Facebook</title>
          <path d="M31.997 15.999c0-8.836-7.163-15.999-15.999-15.999s-15.999 7.163-15.999 15.999c0 7.985 5.851 14.604 13.499 15.804v-11.18h-4.062v-4.625h4.062v-3.525c0-4.010 2.389-6.225 6.043-6.225 1.75 0 3.581 0.313 3.581 0.313v3.937h-2.017c-1.987 0-2.607 1.233-2.607 2.498v3.001h4.437l-0.709 4.625h-3.728v11.18c7.649-1.2 13.499-7.819 13.499-15.804z"></path>
        </svg>
      ),
    },
    {
      name: "twitter",
      url: "https://twitter.com/rspawsalatiga",
      icon: (
        <svg
          className="kadence-svg-icon kadence-twitter-svg"
          fill="currentColor"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 26 28"
        >
          <title>Twitter</title>
          <path d="M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z"></path>
        </svg>
      ),
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/rspawsalatiga/?hl=id",
      icon: (
        <svg
          className="kadence-svg-icon kadence-instagram-svg"
          fill="currentColor"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <title>Instagram</title>
          <path d="M21.138 0.242c3.767 0.007 3.914 0.038 4.65 0.144 1.52 0.219 2.795 0.825 3.837 1.821 0.584 0.562 0.987 1.112 1.349 1.848 0.442 0.899 0.659 1.75 0.758 3.016 0.021 0.271 0.031 4.592 0.031 8.916s-0.009 8.652-0.030 8.924c-0.098 1.245-0.315 2.104-0.743 2.986-0.851 1.755-2.415 3.035-4.303 3.522-0.685 0.177-1.304 0.26-2.371 0.31-0.381 0.019-4.361 0.024-8.342 0.024s-7.959-0.012-8.349-0.029c-0.921-0.044-1.639-0.136-2.288-0.303-1.876-0.485-3.469-1.784-4.303-3.515-0.436-0.904-0.642-1.731-0.751-3.045-0.031-0.373-0.039-2.296-0.039-8.87 0-2.215-0.002-3.866 0-5.121 0.006-3.764 0.037-3.915 0.144-4.652 0.219-1.518 0.825-2.795 1.825-3.833 0.549-0.569 1.105-0.975 1.811-1.326 0.915-0.456 1.756-0.668 3.106-0.781 0.374-0.031 2.298-0.038 8.878-0.038h5.13zM15.999 4.364v0c-3.159 0-3.555 0.014-4.796 0.070-1.239 0.057-2.084 0.253-2.824 0.541-0.765 0.297-1.415 0.695-2.061 1.342s-1.045 1.296-1.343 2.061c-0.288 0.74-0.485 1.586-0.541 2.824-0.056 1.241-0.070 1.638-0.070 4.798s0.014 3.556 0.070 4.797c0.057 1.239 0.253 2.084 0.541 2.824 0.297 0.765 0.695 1.415 1.342 2.061s1.296 1.046 2.061 1.343c0.74 0.288 1.586 0.484 2.825 0.541 1.241 0.056 1.638 0.070 4.798 0.070s3.556-0.014 4.797-0.070c1.239-0.057 2.085-0.253 2.826-0.541 0.765-0.297 1.413-0.696 2.060-1.343s1.045-1.296 1.343-2.061c0.286-0.74 0.482-1.586 0.541-2.824 0.056-1.241 0.070-1.637 0.070-4.797s-0.015-3.557-0.070-4.798c-0.058-1.239-0.255-2.084-0.541-2.824-0.298-0.765-0.696-1.415-1.343-2.061s-1.295-1.045-2.061-1.342c-0.742-0.288-1.588-0.484-2.827-0.541-1.241-0.056-1.636-0.070-4.796-0.070zM14.957 6.461c0.31-0 0.655 0 1.044 0 3.107 0 3.475 0.011 4.702 0.067 1.135 0.052 1.75 0.241 2.16 0.401 0.543 0.211 0.93 0.463 1.337 0.87s0.659 0.795 0.871 1.338c0.159 0.41 0.349 1.025 0.401 2.16 0.056 1.227 0.068 1.595 0.068 4.701s-0.012 3.474-0.068 4.701c-0.052 1.135-0.241 1.75-0.401 2.16-0.211 0.543-0.463 0.93-0.871 1.337s-0.794 0.659-1.337 0.87c-0.41 0.16-1.026 0.349-2.16 0.401-1.227 0.056-1.595 0.068-4.702 0.068s-3.475-0.012-4.702-0.068c-1.135-0.052-1.75-0.242-2.161-0.401-0.543-0.211-0.931-0.463-1.338-0.87s-0.659-0.794-0.871-1.337c-0.159-0.41-0.349-1.025-0.401-2.16-0.056-1.227-0.067-1.595-0.067-4.703s0.011-3.474 0.067-4.701c0.052-1.135 0.241-1.75 0.401-2.16 0.211-0.543 0.463-0.931 0.871-1.338s0.795-0.659 1.338-0.871c0.41-0.16 1.026-0.349 2.161-0.401 1.073-0.048 1.489-0.063 3.658-0.065v0.003zM16.001 10.024c-3.3 0-5.976 2.676-5.976 5.976s2.676 5.975 5.976 5.975c3.3 0 5.975-2.674 5.975-5.975s-2.675-5.976-5.975-5.976zM16.001 12.121c2.142 0 3.879 1.736 3.879 3.879s-1.737 3.879-3.879 3.879c-2.142 0-3.879-1.737-3.879-3.879s1.736-3.879 3.879-3.879zM22.212 8.393c-0.771 0-1.396 0.625-1.396 1.396s0.625 1.396 1.396 1.396 1.396-0.625 1.396-1.396c0-0.771-0.625-1.396-1.396-1.396v0.001z"></path>
        </svg>
      ),
    },
    {
      name: "whatsapp",
      url: "https://wa.me/6285740058522",
      icon: (
        <svg
          className="kadence-svg-icon kadence-whatsapp-svg"
          fill="currentColor"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 28"
        >
          <title>WhatsApp</title>
          <path d="M15.391 15.219c0.266 0 2.812 1.328 2.922 1.516 0.031 0.078 0.031 0.172 0.031 0.234 0 0.391-0.125 0.828-0.266 1.188-0.359 0.875-1.813 1.437-2.703 1.437-0.75 0-2.297-0.656-2.969-0.969-2.234-1.016-3.625-2.75-4.969-4.734-0.594-0.875-1.125-1.953-1.109-3.031v-0.125c0.031-1.031 0.406-1.766 1.156-2.469 0.234-0.219 0.484-0.344 0.812-0.344 0.187 0 0.375 0.047 0.578 0.047 0.422 0 0.5 0.125 0.656 0.531 0.109 0.266 0.906 2.391 0.906 2.547 0 0.594-1.078 1.266-1.078 1.625 0 0.078 0.031 0.156 0.078 0.234 0.344 0.734 1 1.578 1.594 2.141 0.719 0.688 1.484 1.141 2.359 1.578 0.109 0.063 0.219 0.109 0.344 0.109 0.469 0 1.25-1.516 1.656-1.516zM12.219 23.5c5.406 0 9.812-4.406 9.812-9.812s-4.406-9.812-9.812-9.812-9.812 4.406-9.812 9.812c0 2.063 0.656 4.078 1.875 5.75l-1.234 3.641 3.781-1.203c1.594 1.047 3.484 1.625 5.391 1.625zM12.219 1.906c6.5 0 11.781 5.281 11.781 11.781s-5.281 11.781-11.781 11.781c-1.984 0-3.953-0.5-5.703-1.469l-6.516 2.094 2.125-6.328c-1.109-1.828-1.687-3.938-1.687-6.078 0-6.5 5.281-11.781 11.781-11.781z"></path>
        </svg>
      ),
    },
  ]);

  const icons: any = {
    facebook: <FontAwesomeIcon className="fa-2xl" icon={faFacebookSquare} />,
    twitter: <FontAwesomeIcon className="fa-2xl" icon={faTwitterSquare} />,
    instagram: <FontAwesomeIcon className="fa-2xl" icon={faInstagramSquare} />,
    whatsapp: <FontAwesomeIcon className="fa-2xl" icon={faWhatsappSquare} />,
    youtube: <FontAwesomeIcon className="fa-2xl" icon={faYoutubeSquare} />,
  };
  const [menus, setMenus] = useState<any[]>([]);
  useEffect(() => {
    const asyncFuntion = async () => {
      let token = "";
      await reqToken()
        .then((res) => {
          // console.log(res);
          localStorage.setItem("token", res.data.Response.data);
          token = res.data.Response.data;
        })
        .catch((err) => {
          // console.log(err);
        });
      await getAllMenus(token)
        .then((res) => {
          // console.log(res.data.nav);
          setMenus(res.data.nav);
        })
        .catch((err) => {
          // console.log(err);
        });
    };
    asyncFuntion();
    // console.log(props);
  }, []);
  return (
    <>
      <header className="navigation">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg p-0">
                <NavLink className="navbar-brand" to="/">
                  <img
                    width={50}
                    height={50}
                    src="images/logo.png"
                    alt="Logo"
                  />
                  &nbsp;RS Paru dr. Ario Wirawan Salatiga
                </NavLink>
                <div
                  className="collapse navbar-collapse m-auto"
                  id="navbarsExample09"
                >
                  <ul className="navbar-nav ml-auto">
                    {socmed.map((item: any) => (
                      <li className="nav-item active">
                        <a
                          className="nav-link navlink-socmed"
                          key={`socmed-${item.name}`}
                          href={item.url}
                          target="_blank"
                        >
                          {icons[item.name]}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div className="container nav-menu">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg p-0">
              <button
                className="navbar-toggler collapsed m-auto"
                type="button"
                data-toggle="collapse"
                data-target="#myNav"
                aria-controls="myNav"
                aria-expanded="true"
                aria-label="Toggle navigation"
              >
                <span className="ion-android-menu"></span>
              </button>
              <div className="collapse navbar-collapse m-auto" id="myNav">
                <ul className="navbar-nav m-auto">
                  {menus.map((item: any, index: number) =>
                    item.child && item.child.length > 0 ? (
                      <li
                        key={
                          item.parent_url == "#"
                            ? `/${item.parent_label}`
                            : item.parent_url
                        }
                        className={`nav-item p-2 dropdown @@${`/${item.parent_label}`}`}
                      >
                        <a
                          className="nav-link dropdown-toggle nav-menus"
                          href={
                            "#"
                            // item.parent_url == "#"
                            //   ? `/${item.parent_label}`
                            //   : item.parent_url
                          }
                          id={`dropdown0${index}`}
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="true"
                        >
                          {item.parent_label}{" "}
                          {/* <span className="ion-ios-arrow-down"></span> */}
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby={`dropdown0${index}`}
                        >
                          {item.child?.map(
                            (itemChild: any, indexChild: number) =>
                              itemChild.sub_child &&
                              itemChild.sub_child.length > 0 ? (
                                <li
                                  key={`${itemChild.child_label}`}
                                  className={`dropdown show @@${
                                    itemChild.child_label
                                  } dropdown-submenu drop${
                                    item.child.length / 2 - 1 < index
                                      ? "left"
                                      : "right"
                                  }`}
                                >
                                  <a
                                    className="dropdown-item dropdown-toggle nav-menus"
                                    href={
                                      "#!"
                                      // itemChild.child_url == "#"
                                      //   ? `/${itemChild.child_label}`
                                      //   : itemChild.child_url
                                    }
                                    id={`dropdown0${index}0${indexChild}`}
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="true"
                                  >
                                    {itemChild.child_label}
                                  </a>

                                  <ul
                                    className="dropdown-menu show"
                                    aria-labelledby={`dropdown0${index}0${indexChild}`}
                                  >
                                    {itemChild.sub_child?.map(
                                      (
                                        itemSubChild: any,
                                        indexSubChild: number
                                      ) => (
                                        <li
                                          key={`${itemSubChild.subchild_label}`}
                                        >
                                          <Link
                                            className="dropdown-item"
                                            to={
                                              itemSubChild.subchild_url == "#"
                                                ? `/${itemSubChild.subchild_url}`
                                                : itemSubChild.subchild_url
                                            }
                                          >
                                            {itemSubChild.subchild_label}
                                          </Link>
                                        </li>
                                      )
                                      // )
                                    )}
                                  </ul>
                                </li>
                              ) : (
                                <li key={itemChild.child_url}>
                                  <Link
                                    className={`dropdown-item @@${itemChild.child_url}`}
                                    to={`${itemChild.child_url}`}
                                  >
                                    {itemChild.child_label}
                                  </Link>
                                </li>
                              )
                          )}
                        </ul>
                      </li>
                    ) : (
                      <li
                        key={`menu${item.parent_id}`}
                        className={`nav-item p-2 @@${item.parent_url}`}
                      >
                        <Link
                          className="nav-link"
                          to={`${
                            // item.parent_url == "#"
                            //   ? "/post/test-header"
                            //   : item.parent_url
                            item.parent_url
                          }`}
                        >
                          {item.parent_label}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
