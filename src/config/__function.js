export const createArrayEntityFromObject = (obj) => {
  return Object.keys(obj);
};

export const getEntity = (keys, obj) => {
  return keys
    .map((k) => {
      if (typeof obj[k] == "boolean") {
        // console.log("obj[k]", obj[k], "[k]", [k]);
        return obj[k];
        // return { key: [k], value: obj[k] };
      } else {
        if (obj[k]) return { key: [k], value: obj[k] };
      }
    })
    .filter((el) => el != undefined);
};

export const getEntityPy = (keys, obj) => {
  return keys
    .map((k) => {
      if (typeof obj[k] == "boolean" || typeof obj[k] == "number") {
        // console.log("obj[k]", obj[k], "[k]", [k]);
        // return obj[k];
        return { key: [k], value: obj[k] };
      } else {
        if (obj[k]) return { key: [k], value: obj[k] };
      }
    })
    .filter((el) => el != undefined);
};

export const createQueryUrl = (arr, separator) => {
  let query = "";
  arr.map((el, n) => {
    if (arr.length - 1 > n)
      return (query = `${query}${el.key}=${el.value}${separator}`);
    if (typeof el.value == "boolean" || typeof el.value == "number") {
      // console.log("el", el);
      query = `${query}${el.key}=${el.value}`;
    } else if (el.value) {
      query = `${query}${el.key}=${el.value}`;
    }
  });
  // console.log(query);
  return query;
};
