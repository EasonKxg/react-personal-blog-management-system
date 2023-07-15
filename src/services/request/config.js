const env = process.env;
const baseURL =
  env.NODE_ENV === "development"
    ? env.REACT_APP_DEV_BASE_URL
    : env.REACT_APP_PRO_BASE_URL;

export default baseURL;
