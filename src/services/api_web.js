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

export const getAllMenus = () => {
  console.log("get menu");
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseUrlDev}client/nav/all`, {
        headers: {
          client_uid: `rspaw`,
          client_key:
            "9d3b5bc28d45a4a1180ab98b23f8685e6e79f250be7b7b1be0feaecb2b06fb57",
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
