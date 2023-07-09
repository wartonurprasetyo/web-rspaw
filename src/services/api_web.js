// import _ from "lodash";
import Config from "../config/Config";
import axios from "axios";

const baseUrlDev = Config.BaseUrlDev;
console.log("axios", axios);

export const reqToken = () => {
  console.log("get menu");
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${baseUrlDev}reqtoken`,
        {},
        {
          headers: {
            client_uid: `rspaw`,
            client_key:
              "9d3b5bc28d45a4a1180ab98b23f8685e6e79f250be7b7b1be0feaecb2b06fb57",
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
  console.log("get menu");
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      client_uid: `rspaw`,
      client_key:
        "9d3b5bc28d45a4a1180ab98b23f8685e6e79f250be7b7b1be0feaecb2b06fb57",
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
  console.log("get menu");
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseUrlDev}client/nav/all`, {
        headers: {
          client_uid: `rspaw`,
          client_key:
            "9d3b5bc28d45a4a1180ab98b23f8685e6e79f250be7b7b1be0feaecb2b06fb57",
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
  console.log("get post");
  // let data = {
  //   post_url: "/post/halo",
  // };
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrlDev}client/post/detailbyurl`, data, {
        headers: {
          client_uid: `rspaw`,
          client_key:
            "9d3b5bc28d45a4a1180ab98b23f8685e6e79f250be7b7b1be0feaecb2b06fb57",
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
  console.log("get post");
  // let data = {
  //   post_id: "1",
  // };
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrlDev}client/post/detailbyid`, data, {
        headers: {
          client_uid: `rspaw`,
          client_key:
            "9d3b5bc28d45a4a1180ab98b23f8685e6e79f250be7b7b1be0feaecb2b06fb57",
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
  console.log("get post");
  // let data = {
  //   post_group: "post",
  //   post_status: "1",
  // };
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrlDev}client/post/group`, data, {
        headers: {
          client_uid: `rspaw`,
          client_key:
            "9d3b5bc28d45a4a1180ab98b23f8685e6e79f250be7b7b1be0feaecb2b06fb57",
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
