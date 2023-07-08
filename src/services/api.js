// import _ from "lodash";
import Config from "../../config/Config";
const axios = require("axios");

const baseUrlDev = Config.BaseUrlDev;
const bearer = () => {
  let company = JSON.parse(localStorage.getItem("company_redux"));
  let newToken = _.find(JSON.parse(localStorage.getItem("token_redux")), {
    cid: company.initial,
  });
  return newToken.token;
};

export const reauthenticate = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${baseUrlDev}authentication/member/security-code/validation`,
        data,
        {
          headers: {
            Authorization: `Bearer ${bearer().replaceAll('"', "")}`,
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

export const reauthenticateCardSecurityCode = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${baseUrlDev}authentication/member/security-code/card/validation`,
        data,
        {
          headers: {
            Authorization: `Bearer ${bearer().replaceAll('"', "")}`,
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

export const requestOtp = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrlDev}authentication/guest/otp/request`, data, {})
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const requestOtpMember = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrlDev}authentication/member/otp/request`, data, {
        headers: {
          Authorization: `Bearer ${bearer().replaceAll('"', "")}`,
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

export const sendOtp = (url, data, otp = "000000") => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrlDev}${url}`, data, {
        headers: {
          Authorization: `Bearer ${bearer().replaceAll('"', "")}`,
          "otp-security-code": otp,
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

export const logout = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseUrlDev}authentication/member/logout`, {
        headers: {
          Authorization: `Bearer ${bearer().replaceAll('"', "")}`,
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

// Auth Custom Menu

export const authCustomMenu = (company, id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${baseUrlDev}authentication/one-time-access-token/member/request/${company}/${id}`,
        {
          headers: {
            Authorization: `Bearer ${bearer().replaceAll('"', "")}`,
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
