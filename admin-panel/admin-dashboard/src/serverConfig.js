const isProduction = process.env.NODE_ENV === "production";

const config = {
  apiEndpoint: isProduction
    ? process.env.REACT_APP_PROD_ENDPOINT
    : process.env.REACT_APP_TEST_ENDPOINT,
};

export default config;
