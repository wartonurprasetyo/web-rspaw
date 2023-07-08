const Config: any = {
  BaseUrlDev: "http://117.74.123.165:8899/api/",
  BaseUrlProd: "http://117.74.123.165:8899/api/",
};
let baseUrl = "";
export const check = () => {
  if (process.env.NODE_ENV == "production") {
    baseUrl = Config.BaseUrlProd;
  } else {
    baseUrl = Config.BaseUrlDev;
  }
  return baseUrl;
};
export default Config;
