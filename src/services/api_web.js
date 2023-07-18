// import _ from "lodash";
import Config from "../config/Config";
import axios from "axios";

const baseUrlDev = Config.BaseUrlDev;
const client_key = Config.client_key;
// console.log("axios", axios);

export const reqToken = () => {
  // console.log("get menu");
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${baseUrlDev}reqtoken`,
        {},
        {
          headers: {
            client_uid: `rspaw`,
            client_key: client_key,
            client_token: "",
          },
        }
      )
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const fetchReqToken = () => {
  // console.log("get menu");
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      client_uid: `rspaw`,
      client_key: client_key,
      client_token: "",
    },
    body: JSON.stringify({}),
  };

  return new Promise((resolve, reject) => {
    fetch(`${baseUrlDev}reqtoken`, requestOptions)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getAllMenus = (client_token = localStorage.getItem("token")) => {
  // console.log("get menu");
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseUrlDev}client/nav/all`, {
        headers: {
          client_uid: `rspaw`,
          client_key: client_key,
          client_token: client_token,
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getPostByUrl = (
  data,
  client_token = localStorage.getItem("token")
) => {
  // console.log("get post");
  // let data = {
  //   post_url: "/post/halo",
  // };
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrlDev}client/post/detailbyurl`, data, {
        headers: {
          client_uid: `rspaw`,
          client_key: client_key,
          client_token: client_token,
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getPostById = (
  data,
  client_token = localStorage.getItem("token")
) => {
  // console.log("get post");
  // let data = {
  //   post_id: "1",
  // };
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrlDev}client/post/detailbyid`, data, {
        headers: {
          client_uid: `rspaw`,
          client_key: client_key,
          client_token: client_token,
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getPostByGroup = (
  data,
  client_token = localStorage.getItem("token")
) => {
  // console.log("get post");
  // let data = {
  //   post_group: "post",
  //   post_status: "1",
  // };
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrlDev}client/post/group`, data, {
        headers: {
          client_uid: `rspaw`,
          client_key: client_key,
          client_token: client_token,
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const listPostByGroup = (
  data,
  client_token = localStorage.getItem("token")
) => {
  // console.log("get post");
  // let data = {
  //   post_group: "post",
  //   post_status: "1",
  // };
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrlDev}client/post/group`, data, {
        headers: {
          client_uid: `rspaw`,
          client_key: client_key,
          client_token: client_token,
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const loginPage = (
  data,
  client_token = ""
) => {
  // console.log("get post");
  // let data = {
  //   post_group: "post",
  //   post_status: "1",
  // };
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrlDev}adm/login`, data, {
        headers: {
          client_uid: `rspaw`,
          client_key: client_key,
          client_token: client_token,
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const addPostNews = (
  data,
  client_token = localStorage.getItem("token")
) => {
  // console.log("get post");
  // let data = {
  //   post_group: "post",
  //   post_status: "1",
  // };
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrlDev}client/post/insert`, data, {
        headers: {
          client_uid: `rspaw`,
          client_key: client_key,
          client_token: client_token,
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const updatePostNews = (
  data,
  client_token = localStorage.getItem("token")
) => {
  // console.log("get post");
  // let data = {
  //   post_group: "post",
  //   post_status: "1",
  // };
  return new Promise((resolve, reject) => {
    axios
      .put(`${baseUrlDev}client/post/update`, data, {
        headers: {
          client_uid: `rspaw`,
          client_key: client_key,
          client_token: client_token,
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const deletePosting = (
  id,
  client_token = localStorage.getItem("token")
) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${baseUrlDev}client/post/delete`, {
        headers: {
          "Content-Type": "application/json",
          client_uid: `rspaw`,
          client_key: client_key,
          client_token: client_token,
        },
        data: { post_id: id },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};


export const listSubNav = (
  data,
  client_token = localStorage.getItem("token")
) => {
  // console.log("get post");
  // let data = {
  //   post_group: "post",
  //   post_status: "1",
  // };
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrlDev}client/nav/children`, data, {
        headers: {
          client_uid: `rspaw`,
          client_key: client_key,
          client_token: client_token,
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getSlider = (client_token = localStorage.getItem("token")) => {
  // console.log("get menu");
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseUrlDev}client/slider/select`, {
        headers: {
          client_uid: `rspaw`,
          client_key: client_key,
          client_token: client_token,
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
