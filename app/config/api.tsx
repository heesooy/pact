const baseUrl = 'https://u6dmt1htic.execute-api.us-east-2.amazonaws.com/dev/';
const loginEndpoint = 'login';
const registerEndpoint = 'register';

const apiConfig = {
  baseUrl,
  loginUrl: baseUrl + loginEndpoint,
  registerUrl: baseUrl + registerEndpoint,
};

export default apiConfig;
