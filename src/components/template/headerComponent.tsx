const HeaderComponent = () => {
  let menus = [
    {
      name: "profile",
      label: "Profile",
      isShow: true,
      child: [
        {
          name: "sejarah",
          label: "Sejarah",
          isShow: true,
        },
        {
          name: "visi_misi",
          label: "Visi & Misi",
          isShow: true,
        },
        {
          name: "struktur_organisasi",
          label: "Struktur Organisasi",
          isShow: true,
        },
        {
          name: "jajaran_direksi",
          label: "Jajaran Direksi",
          isShow: true,
        },
        {
          name: "6_upaya",
          label: "6 Upaya",
          isShow: true,
        },
        {
          label: "Maklumat Pelayanan",
          name: "maklumat_pelayanan",
          isShow: true,
        },
        {
          name: "WBK",
          label: "WBK",
          isShow: true,
          child: [
            {
              name: "video_WBK",
              label: "Video WBK",
              isShow: true,
            },
            {
              name: "foto_sosialisasi_gratifikasi",
              label: "Foto Sosialisasi Gratifikasi",
              isShow: true,
            },
          ],
        },
        {
          name: "video",
          label: "Video",
          isShow: true,
        },
      ],
    },
    {
      name: "layanan_kami",
      label: "Layanan Kami",
      isShow: true,
      child: [
        {
          name: "sejarah",
          label: "Sejarah",
          isShow: true,
        },
        {
          name: "visi_misi",
          label: "Visi & Misi",
          isShow: true,
        },
        {
          name: "struktur_organisasi",
          label: "Struktur Organisasi",
          isShow: true,
        },
        {
          name: "jajaran_direksi",
          label: "Jajaran Direksi",
          isShow: true,
        },
        {
          name: "6_upaya",
          label: "6 Upaya",
          isShow: true,
        },
        {
          label: "Maklumat Pelayanan",
          name: "maklumat_pelayanan",
          isShow: true,
        },
        {
          name: "WBK",
          label: "WBK",
          isShow: true,
          child: [
            {
              name: "video_WBK",
              label: "Video WBK",
              isShow: true,
            },
            {
              name: "foto_sosialisasi_gratifikasi",
              label: "Foto Sosialisasi Gratifikasi",
              isShow: true,
            },
          ],
        },
        {
          name: "video",
          label: "Video",
          isShow: true,
        },
      ],
    },
    {
      name: "info_publik",
      label: "Info Publik",
      isShow: true,
      child: [
        {
          name: "sejarah",
          label: "Sejarah",
          isShow: true,
        },
        {
          name: "visi_misi",
          label: "Visi & Misi",
          isShow: true,
        },
        {
          name: "struktur_organisasi",
          label: "Struktur Organisasi",
          isShow: true,
        },
        {
          name: "jajaran_direksi",
          label: "Jajaran Direksi",
          isShow: true,
        },
        {
          name: "6_upaya",
          label: "6 Upaya",
          isShow: true,
        },
        {
          label: "Maklumat Pelayanan",
          name: "maklumat_pelayanan",
          isShow: true,
        },
        {
          name: "WBK",
          label: "WBK",
          isShow: true,
          child: [
            {
              name: "video_WBK",
              label: "Video WBK",
              isShow: true,
            },
            {
              name: "foto_sosialisasi_gratifikasi",
              label: "Foto Sosialisasi Gratifikasi",
              isShow: true,
            },
          ],
        },
        {
          name: "video",
          label: "Video",
          isShow: true,
        },
      ],
    },
    {
      name: "kontak_kami",
      label: "Kontak Kami",
      isShow: true,
    },
    {
      name: "PPID",
      label: "PPID",
      isShow: true,
      child: [
        {
          name: "sejarah",
          label: "Sejarah",
          isShow: true,
        },
        {
          name: "visi_misi",
          label: "Visi & Misi",
          isShow: true,
        },
        {
          name: "struktur_organisasi",
          label: "Struktur Organisasi",
          isShow: true,
        },
        {
          name: "jajaran_direksi",
          label: "Jajaran Direksi",
          isShow: true,
        },
        {
          name: "6_upaya",
          label: "6 Upaya",
          isShow: true,
        },
        {
          label: "Maklumat Pelayanan",
          name: "maklumat_pelayanan",
          isShow: true,
        },
        {
          name: "WBK",
          label: "WBK",
          isShow: true,
          child: [
            {
              name: "video_WBK",
              label: "Video WBK",
              isShow: true,
            },
            {
              name: "foto_sosialisasi_gratifikasi",
              label: "Foto Sosialisasi Gratifikasi",
              isShow: true,
            },
          ],
        },
        {
          name: "video",
          label: "Video",
          isShow: true,
        },
      ],
    },
    {
      name: "survey_kepuasan",
      label: "Survey Kepuasan",
      isShow: true,
      child: [
        {
          name: "sejarah",
          label: "Sejarah",
          isShow: true,
        },
        {
          name: "visi_misi",
          label: "Visi & Misi",
          isShow: true,
        },
        {
          name: "struktur_organisasi",
          label: "Struktur Organisasi",
          isShow: true,
        },
        {
          name: "jajaran_direksi",
          label: "Jajaran Direksi",
          isShow: true,
        },
        {
          name: "6_upaya",
          label: "6 Upaya",
          isShow: true,
        },
        {
          label: "Maklumat Pelayanan",
          name: "maklumat_pelayanan",
          isShow: true,
        },
        {
          name: "WBK",
          label: "WBK",
          isShow: true,
          child: [
            {
              name: "video_WBK",
              label: "Video WBK",
              isShow: true,
            },
            {
              name: "foto_sosialisasi_gratifikasi",
              label: "Foto Sosialisasi Gratifikasi",
              isShow: true,
            },
          ],
        },
        {
          name: "video",
          label: "Video",
          isShow: true,
        },
      ],
    },
    {
      name: "SP4N_lapor",
      label: "SP4N Lapor",
      isShow: true,
    },
  ];
  return (
    <>
      <header className="navigation">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg p-0">
                <a className="navbar-brand" href="/">
                  <img
                    width={50}
                    height={50}
                    src="images/logo.png"
                    alt="Logo"
                  />
                  &nbsp;RS Paru dr. Ario Wirawan Salatiga
                </a>
                <div
                  className="collapse navbar-collapse ml-auto"
                  id="navbarsExample09"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="/">
                        Home
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg p-0">
              <button
                className="navbar-toggler collapsed m-auto"
                type="button"
                data-toggle="collapse"
                data-target="#myNav"
                aria-controls="myNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="ion-android-menu"></span>
              </button>
              <div className="collapse navbar-collapse m-auto" id="myNav">
                <ul className="navbar-nav ml-auto">
                  {menus.map((item: any, index: number) =>
                    item.isShow ? (
                      item.child && item.child.length > 0 ? (
                        <li
                          key={item.name}
                          className={`nav-item p-2 dropdown @@${item.name}`}
                        >
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id={`dropdown0${index}`}
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            {item.label}{" "}
                            <span className="ion-ios-arrow-down"></span>
                          </a>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby={`dropdown0${index}`}
                          >
                            {item.child?.map(
                              (itemChild: any, indexChild: number) =>
                                itemChild.isShow ? (
                                  itemChild.child &&
                                  itemChild.child.length > 0 ? (
                                    <li
                                      className={`dropdown dropdown-submenu drop${
                                        itemChild.child.length - 1 == indexChild
                                          ? "left"
                                          : "right"
                                      }`}
                                    >
                                      <a
                                        className="dropdown-item dropdown-toggle"
                                        href="#!"
                                        id={`dropdown0${index}0${indexChild}`}
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        {itemChild.label}
                                      </a>

                                      <ul
                                        className="dropdown-menu"
                                        aria-labelledby={`dropdown0${index}0${indexChild}`}
                                      >
                                        {itemChild.child?.map(
                                          (
                                            itemSubChild: any,
                                            indexSubChild: number
                                          ) =>
                                            itemSubChild.isShow && (
                                              <li key={itemSubChild.name}>
                                                <a
                                                  className="dropdown-item"
                                                  href="index.html"
                                                >
                                                  {itemSubChild.label}
                                                </a>
                                              </li>
                                            )
                                        )}
                                        {/* <li>
                                      <a
                                        className="dropdown-item"
                                        href="index.html"
                                      >
                                        Submenu 02
                                      </a>
                                    </li> */}
                                      </ul>
                                    </li>
                                  ) : (
                                    <li key={itemChild.name}>
                                      <a
                                        className={`dropdown-item @@${itemChild.name}`}
                                        href="#"
                                      >
                                        {itemChild.label}
                                      </a>
                                    </li>
                                  )
                                ) : null
                            )}
                          </ul>
                        </li>
                      ) : (
                        <li className={`nav-item p-2 @@${item.name}`}>
                          <a className="nav-link" href="service.html">
                            {item.label}
                          </a>
                        </li>
                      )
                    ) : null
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
