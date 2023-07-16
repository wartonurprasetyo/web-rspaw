import React from "react";

// Creating the context object and passing the default values.
const authContext = React.createContext({
  loading: null,
  setLoading: (params: boolean) => {},
});

export default authContext;
