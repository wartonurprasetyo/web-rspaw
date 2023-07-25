const Config: any = {
  // BaseUrlDev: "http://117.74.123.165/api/",
  BaseUrlDev: "https://rspaw.or.id/api/",
  BaseUrlProd: "https://rspaw.or.id/api/",
  client_key:
    "9d3b5bc28d45a4a1180ab98b23f8685e6e79f250be7b7b1be0feaecb2b06fb57",
};
let baseUrl = "";
export const check = () => {
  // console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV == "production") {
    baseUrl = Config.BaseUrlProd;
  } else {
    baseUrl = Config.BaseUrlDev;
  }
  return baseUrl;
};

export default Config;
