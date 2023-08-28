// import _ from "lodash";
import Config, { check } from "../config/Config";
import axios from "axios";
import { setupInterceptorsTo } from "./interceptor";

const baseUrlDev = check();
const client_key = Config.client_key;
const client_uid = Config.client_uid;
// console.log("axios", axios);

setupInterceptorsTo(axios);

export const reqToken = () => {
  // console.log("get menu");
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseUrlDev}reqtoken`, {
        headers: {
          "X-User": `rspaw`,
          "X-Key ": client_key,
          "X-Token": "",
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

export const getAllMenus = (client_token = localStorage.getItem("token")) => {
  // console.log("get menu");
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseUrlDev}client/nav/all`, {
        headers: {
          "X-User": `rspaw`,
          "X-Key ": client_key,
          "X-Token": client_token,
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
          "X-User": `rspaw`,
          "X-Key ": client_key,
          "X-Token": client_token,
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
          "X-User": `rspaw`,
          "X-Key ": client_key,
          "X-Token": client_token,
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
          "X-User": `rspaw`,
          "X-Key ": client_key,
          "X-Token": client_token,
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
          "X-User": `rspaw`,
          "X-Key ": client_key,
          "X-Token": client_token,
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

export const loginPage = (data, client_token) => {
  // console.log("get post");
  // let data = {
  //   post_group: "post",
  //   post_status: "1",
  // };
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrlDev}client/adm/login`, data, {
        headers: {
          "X-User": `rspaw`,
          "X-Key ": client_key,
          "X-Token": client_token,
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
  let dataBody = {
    auth: {
      client_uid: `rspaw`,
      client_key: client_key,
      client_token: client_token,
    },
    ...data,
  };

  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrlDev}client/post/insert`, data, {
        headers: {
          "X-User": `rspaw`,
          "X-Key ": client_key,
          "X-Token": client_token,
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
  let dataBody = {
    auth: {
      client_uid: `rspaw`,
      client_key: client_key,
      client_token: client_token,
    },
    ...data,
  };
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrlDev}client/post/update`, data, {
        headers: {
          "X-User": `rspaw`,
          "X-Key ": client_key,
          "X-Token": client_token,
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
  let dataBody = {
    post_id: id,
  };
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrlDev}client/post/delete`, id, {
        headers: {
          "X-User": `rspaw`,
          "X-Key ": client_key,
          "X-Token": client_token,
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

export const listSubNav = (
  data,
  client_token = localStorage.getItem("token")
) => {
  // console.log("get post");
  // let data = {
  //   post_group: "post",
  //   post_status: "1",
  // };
  let dataBody = {
    auth: {
      client_uid: `rspaw`,
      client_key: client_key,
      client_token: client_token,
    },
    ...data,
  };
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrlDev}client/nav/children`, data, {
        headers: {
          "X-User": `rspaw`,
          "X-Key ": client_key,
          "X-Token": client_token,
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
          "X-User": `rspaw`,
          "X-Key ": client_key,
          "X-Token": client_token,
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

export const getListSlider = (client_token = localStorage.getItem("token")) => {
  // console.log("get post");
  // let data = {
  //   post_group: "post",
  //   post_status: "1",
  // };
  let dataBody = {
    auth: {
      client_uid: `rspaw`,
      client_key: client_key,
      client_token: client_token,
    },
  };
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseUrlDev}client/slider/select`, {
        headers: {
          "X-User": `rspaw`,
          "X-Key ": client_key,
          "X-Token": client_token,
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

export const getListSliderbyId = (
  id,
  client_token = localStorage.getItem("token")
) => {
  // console.log("get post");
  // let data = {
  //   post_group: "post",
  //   post_status: "1",
  // };
  let dataBody = {
    auth: {
      client_uid: `rspaw`,
      client_key: client_key,
      client_token: client_token,
    },
    ...id,
  };
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrlDev}client/slider/detail`, dataBody, {
        headers: {
          "X-User": `rspaw`,
          "X-Key ": client_key,
          "X-Token": client_token,
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

export const uploadImage = (data, client_token) => {
  // console.log("get post");
  // let data = {
  //   post_group: "post",
  //   post_status: "1",
  // };

  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrlDev}client/fileupload`, data, {
        headers: {
          "X-User": `rspaw`,
          "X-Key ": client_key,
          "X-Token": client_token,
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

export const addSlider = async (data, client_token) => {
  // console.log("get post");
  // let data = {
  //   post_group: "post",
  //   post_status: "1",
  // };
  let dataBody = {
    auth: {
      client_uid: `rspaw`,
      client_key: client_key,
      client_token: client_token,
    },
    ...data,
  };
  try {
    return new Promise(async (resolve, reject) => {
      await axios
        .post(`${baseUrlDev}client/slider/insert`, data, {
          headers: {
            "X-User": `rspaw`,
            "X-Key ": client_key,
            "X-Token": client_token,
          },
        })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  } catch (error) {
    console.log(error);
  }
};

export function updateSlider(
  data,
  client_token = localStorage.getItem("token")
) {
  return new Promise((resolve, reject) => {
    axios
      .put(`${baseUrlDev}client/slider/update`, data, {
        headers: {
          "X-User": `rspaw`,
          "X-Key ": client_key,
          "X-Token": client_token,
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function deleteSlider(
  data,
  client_token = localStorage.getItem("token")
) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrlDev}client/slider/delete`, data, {
        headers: {
          "X-User": `rspaw`,
          "X-Key ": client_key,
          "X-Token": client_token,
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export const getAllPage = (client_token = localStorage.getItem("token")) => {
  // console.log("get menu");
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseUrlDev}client/page/select`, {
        headers: {
          "X-User": `rspaw`,
          "X-Key ": client_key,
          "X-Token": client_token,
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

export const getAllNavParent = (
  client_token = localStorage.getItem("token")
) => {
  // console.log("get menu");
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseUrlDev}client/nav/parent`, {
        headers: {
          "X-User": `rspaw`,
          "X-Key ": client_key,
          "X-Token": client_token,
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

export const insertNav = (
  data,
  client_token = localStorage.getItem("token")
) => {
  // console.log("get menu");
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrlDev}client/nav/insert`, data, {
        headers: {
          "X-User": `rspaw`,
          "X-Key ": client_key,
          "X-Token": client_token,
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

export const addPage = (data, client_token) => {
  // console.log("get post");
  // let data = {
  //   post_group: "post",
  //   post_status: "1",
  // };
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrlDev}client/page/insert`, data, {
        headers: {
          "X-User": `rspaw`,
          "X-Key ": client_key,
          "X-Token": client_token,
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

export const getPageById = (
  data,
  client_token = localStorage.getItem("token")
) => {
  // console.log("get post");
  // let data = {
  //   post_id: "1",
  // };
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrlDev}client/page/detail`, data, {
        headers: {
          "X-User": `rspaw`,
          "X-Key ": client_key,
          "X-Token": client_token,
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

export const updatePage = (data, client_token) => {
  // console.log("get post");
  // let data = {
  //   post_group: "post",
  //   post_status: "1",
  // };
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrlDev}client/page/update`, data, {
        headers: {
          "X-User": `rspaw`,
          "X-Key ": client_key,
          "X-Token": client_token,
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

export const deletePage = (id, client_token) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrlDev}client/page/delete`, id, {
        headers: {
          "X-User": `rspaw`,
          "X-Key ": client_key,
          "X-Token": client_token,
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
