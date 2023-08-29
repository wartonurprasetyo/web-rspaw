import {
  faAngleDown,
  faEdit,
  faPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import _ from "lodash";
import { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Button,
  Card,
  CardBody,
  CardTitle,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  UncontrolledAccordion,
} from "reactstrap";
import { getArray } from "../../../../config/__function";
import LoadingContext from "../../../../contexts/LoadingContext";
import { getAllMenus, insertNav } from "../../../../services/api_web";
import { toast } from "react-toastify";

const ListNavigasi = () => {
  const [data, setData]: any = useState([]);
  const [itemparent, setitemparent] = useState<any>({});
  const [itemchild, setitemchild] = useState<any>({});
  const [itemtemp, setitemtemp] = useState<any>({});
  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [level, setLevel] = useState(-1);
  const [navLabel, setNavLabel] = useState("");
  const [navUrl, setNavUrl] = useState("");

  const handleAddData = (level: any, itemParent: any, itemChild: any = {}) => {
    setLevel(level);
    let url = getArray(level == 2 ? itemChild : itemParent, "url");
    let label = getArray(
      level == 2 ? itemChild : itemParent,
      "label"
    ).toLowerCase();
    setNavUrl(url == "#" ? `/${label.split(" ")[0]}/` : `${url}/`);
    setitemparent(itemParent);
    setitemchild(itemChild);
    setModalAdd(true);
  };

  const toggleModalAdd = () => {
    if (modalAdd) {
      setitemchild({});
      setitemparent({});
      setNavLabel("");
      setNavUrl("");
    }
    setModalAdd(!modalAdd);
  };

  const handleEditData = (level: any, itemParent: any, itemChild: any = {}) => {
    setLevel(level);
    setitemparent(itemParent);
    setitemchild(itemChild);
    setModalEdit(true);
  };

  const toggleModalEdit = () => {
    if (modalEdit) {
      setitemchild({});
      setitemparent({});
      setNavLabel("");
      setNavUrl("");
    }
    setModalEdit(!modalEdit);
  };

  const handleDeleteData = (item: any) => {
    setLevel(level);
    console.log(item);

    setitemtemp(item);
    setModalDelete(true);
  };

  const toggleModalDelete = () => {
    if (modalDelete) setitemchild({});
    if (modalDelete) setitemparent({});

    setModalDelete(!modalDelete);
  };

  const postData = () => {
    let nav_parent_id = "0";
    if (level == 1) nav_parent_id = itemparent.id;
    if (level == 2) nav_parent_id = itemchild.id;
    let data = {
      nav_id: "",
      nav_parent_id,
      nav_label: navLabel,
      nav_url: `${navUrl}${navLabel}`,
      nav_number: `${getLastNav() + 1}`,
      nav_status: "1",
    };
    insertNav(data)
      .then((res) => {
        toast.success("Berhasil Menambah Menu");
        setitemtemp({});
        getData();
        setModalAdd(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = () => {
    let nav_parent_id = "0";
    if (level == 2) nav_parent_id = itemparent.id;
    if (level == 3) nav_parent_id = itemchild.id;
    let data = {
      nav_id: itemtemp.id,
      nav_parent_id,
      nav_label: itemtemp.label,
      nav_url: `${itemtemp.url}`,
      nav_number: `${itemtemp.id}`,
      nav_status: "1",
    };
    console.log(itemparent);
    console.log(itemchild);

    console.log(data);
    // return;
    insertNav(data)
      .then((res) => {
        toast.success("Berhasil Mengubah Menu");
        setitemtemp({});
        getData();
        setModalEdit(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = () => {
    console.log(itemtemp);
    let data = {
      nav_id: itemtemp.id,
    };

    insertNav(data)
      .then((res) => {
        toast.success("Berhasil hapus");
        setitemtemp({});
        getData();
        setModalDelete(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getLastNav = () => {
    let dataa = [];
    data.map((item: any) => {
      dataa.push(parseInt(item.id));
      item.child?.map((itemchild: any) => {
        dataa.push(parseInt(itemchild.id));
        itemchild.child?.map((itemsubchild: any) => {
          dataa.push(parseInt(itemsubchild.id));
        });
      });
    });
    return _.max(dataa);
  };

  const loading = useContext(LoadingContext);
  function deleteNav(e: any) {}
  const history = useHistory();
  function getData() {
    loading.setLoading(true);
    let query = {
      post_group: "post",
      post_status: "1",
    };
    getAllMenus()
      .then((resp) => {
        let temp = _.map(resp.data.nav, (item: any) => {
          let childs = [];

          if (getArray(item, "child"))
            childs = _.map(getArray(item, "child"), (child: any) => {
              let childss = [];

              if (getArray(child, "sub_child"))
                childss = _.map(
                  getArray(child, "sub_child"),
                  (subchild: any) => {
                    return {
                      id: getArray(subchild, "id"),
                      label: getArray(subchild, "label"),
                      url: getArray(subchild, "url"),
                    };
                  }
                );
              return {
                id: getArray(child, "id"),
                label: getArray(child, "label"),
                url: getArray(child, "url"),
                child: childss,
              };
            });

          return {
            id: getArray(item, "id"),
            label: getArray(item, "label"),
            url: getArray(item, "url"),
            child: childs,
          };
        });

        // );
        setData(temp);
        loading.setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setData([]);
        history.push("/login");
        loading.setLoading(false);
      });
  }
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getLastNav();
  }, [data]);
  return (
    <>
      <Modal isOpen={modalAdd} toggle={toggleModalAdd}>
        <ModalHeader toggle={toggleModalAdd}>Tambah</ModalHeader>
        <ModalBody>
          <Input
            placeholder="Nama"
            value={navLabel}
            onChange={(e) => {
              setNavLabel(e.target.value);
            }}
          ></Input>
          <Input
            placeholder="Url"
            // disabled
            value={navUrl + navLabel.replaceAll(" ", "-").toLowerCase()}
          ></Input>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => toggleModalAdd()}>
            Cancel
          </Button>
          <Button color="secondary" onClick={() => postData()}>
            Tambah
          </Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={modalEdit} toggle={toggleModalEdit}>
        <ModalHeader toggle={toggleModalEdit}>Ubah</ModalHeader>
        <ModalBody>
          <Input
            placeholder="Nama"
            value={itemtemp.label}
            onChange={(e) => {
              setitemtemp({ ...itemtemp, label: e.target.value });
            }}
          ></Input>
          <Input
            placeholder="Url"
            // disabled
            value={itemtemp.url}
            onChange={(e) => {
              setitemtemp({ ...itemtemp, url: e.target.value });
            }}
          ></Input>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => toggleModalEdit()}>
            Cancel
          </Button>
          <Button color="secondary" onClick={() => handleEdit()}>
            Ubah
          </Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={modalDelete} toggle={toggleModalDelete}>
        <ModalHeader toggle={toggleModalDelete}>Hapus</ModalHeader>
        <ModalBody>Yakin ingin menghapus {itemtemp?.label}&nbsp;?</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => toggleModalDelete()}>
            Cancel
          </Button>
          <Button color="danger" onClick={() => handleDelete()}>
            Konfirmasi
          </Button>
        </ModalFooter>
      </Modal>
      <Card className="my-2 border-0">
        <CardBody>
          <CardTitle tag="h5">Data Menu</CardTitle>
          {/* <Link to="/web-admin-paw/nav/add" className="btn btn-primary">
            Tambah
          </Link> */}
          <Button
            onClick={() => {
              setModalAdd(true);
              setNavUrl("/");
              setNavLabel("");
              setLevel(0);
            }}
            color="primary"
          >
            Tambah
          </Button>
        </CardBody>
      </Card>
      <Card className="m-2 ">
        <CardBody>
          <h6>Pilih menu untuk melihat sub menu</h6>
          <UncontrolledAccordion flush>
            {data.map((el: any, index: any) => (
              <AccordionItem>
                <AccordionHeader targetId={el.id}>
                  <div className="d-flex justify-content-between w-100">
                    <span>
                      {el.child && el.child.length > 0 && (
                        <FontAwesomeIcon
                          width={"15px"}
                          icon={faAngleDown}
                        ></FontAwesomeIcon>
                      )}
                      &nbsp;
                      {el.label}
                    </span>
                    <div className="d-flex gap-2">
                      <Button
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditData(1, el, {});
                          setitemtemp(el);
                        }}
                      >
                        <FontAwesomeIcon
                          width={"15px"}
                          icon={faEdit}
                        ></FontAwesomeIcon>{" "}
                      </Button>
                      <Button
                        color="primary"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddData(1, el, {});
                        }}
                      >
                        <FontAwesomeIcon
                          width={"15px"}
                          icon={faPlus}
                        ></FontAwesomeIcon>{" "}
                      </Button>
                      <Button
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteData(el);
                        }}
                        color="danger"
                      >
                        <FontAwesomeIcon
                          width={"15px"}
                          icon={faTimes}
                        ></FontAwesomeIcon>{" "}
                      </Button>
                    </div>
                  </div>
                </AccordionHeader>
                <AccordionBody accordionId={el.id}>
                  {el.child && el.child.length > 0 && (
                    <UncontrolledAccordion flush>
                      {el.child.map((elChild: any, index: any) => (
                        <AccordionItem>
                          <AccordionHeader targetId={elChild.id}>
                            <div className="d-flex justify-content-between w-100">
                              <span>
                                {elChild.child && elChild.child.length > 0 && (
                                  <FontAwesomeIcon
                                    width={"15px"}
                                    icon={faAngleDown}
                                  ></FontAwesomeIcon>
                                )}
                                &nbsp;{elChild.label}
                              </span>
                              <div className="d-flex gap-2">
                                <span
                                  className="btn btn-sm btn-secondary"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleEditData(2, el, elChild);
                                    setitemtemp(elChild);
                                  }}
                                >
                                  <FontAwesomeIcon
                                    width={"15px"}
                                    icon={faEdit}
                                  ></FontAwesomeIcon>
                                </span>
                                {/* <Button
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleEditData(2, el, elChild);
                                    setitemtemp(elChild);
                                  }}
                                >
                                  <FontAwesomeIcon
                                    width={"15px"}
                                    icon={faEdit}
                                  ></FontAwesomeIcon>{" "}
                                </Button> */}
                                <Button
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleAddData(2, el, elChild);
                                  }}
                                  color="primary"
                                >
                                  <FontAwesomeIcon
                                    width={"15px"}
                                    icon={faPlus}
                                  ></FontAwesomeIcon>{" "}
                                </Button>
                                <Button
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleDeleteData(elChild);
                                  }}
                                  color="danger"
                                >
                                  <FontAwesomeIcon
                                    width={"15px"}
                                    icon={faTimes}
                                  ></FontAwesomeIcon>{" "}
                                </Button>
                              </div>
                            </div>
                          </AccordionHeader>
                          <AccordionBody accordionId={elChild.id}>
                            {elChild.child && elChild.child.length > 0 && (
                              <UncontrolledAccordion flush>
                                {elChild.child.map(
                                  (elSubChild: any, index: any) => (
                                    <AccordionItem>
                                      <AccordionHeader targetId={elSubChild.id}>
                                        <div className="d-flex justify-content-between w-100">
                                          <span>{elSubChild.label}</span>
                                          <div className="d-flex gap-2">
                                            <Button
                                              size="sm"
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                handleEditData(
                                                  3,
                                                  elChild,
                                                  elSubChild
                                                );
                                                setitemtemp(elSubChild);
                                              }}
                                            >
                                              <FontAwesomeIcon
                                                width={"15px"}
                                                icon={faEdit}
                                              ></FontAwesomeIcon>{" "}
                                            </Button>
                                            <Button
                                              size="sm"
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                handleDeleteData(elSubChild);
                                              }}
                                              color="danger"
                                            >
                                              <FontAwesomeIcon
                                                width={"15px"}
                                                icon={faTimes}
                                              ></FontAwesomeIcon>{" "}
                                            </Button>
                                          </div>
                                        </div>
                                      </AccordionHeader>
                                      <AccordionBody
                                        accordionId={elSubChild.id}
                                      ></AccordionBody>
                                    </AccordionItem>
                                  )
                                )}
                              </UncontrolledAccordion>
                            )}
                          </AccordionBody>
                        </AccordionItem>
                      ))}
                    </UncontrolledAccordion>
                  )}
                </AccordionBody>
              </AccordionItem>
            ))}
          </UncontrolledAccordion>
        </CardBody>
      </Card>
    </>
  );
};
export default ListNavigasi;
