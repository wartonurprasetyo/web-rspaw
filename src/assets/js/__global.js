import moment from "moment";
import ImageIcon from "../images/no-image.png";
export const formatDate = (date, format = "DD MMMM YYYY") => {
  return moment(date).format(format);
};

export const trimText = (text) => {
  if (!text) return "";
  let splitedText = text.replace(/<(.|\n)*?>/g, "");
  return splitedText;
};

export const imageOnError = (event, type = "") => {
  // console.log(event);
  event.currentTarget.src = ImageIcon;
  //   if (type === "user") event.currentTarget.src = ProfileIcon;
  event.currentTarget.className = `${event.currentTarget.className} error`;
};
