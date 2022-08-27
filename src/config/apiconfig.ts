let httpProtocol: string = 'https://';
let host: string;
let backendBaseUrl: string;

const buildEnv = process.env.REACT_APP_ENV;
console.log('Build environment: ', buildEnv);

switch (buildEnv) {
  case 'production':
    host = '';
    backendBaseUrl = '';
    break;
  case 'development':
    host = 'http://3.224.174.111:8080/';
    backendBaseUrl = '';
    break;
  case 'staging':
    host = 'http://3.224.174.111:8080/';
    backendBaseUrl = '';
    break;
  case 'hotfix':
    host = '';
    backendBaseUrl = '';
    break;
  default:
    host = 'http://3.224.174.111:8080/';
    backendBaseUrl = '';
    break;
}

export const HTTP_PROTOCOL = `${httpProtocol}`;
export const BASE_URL = `${host}`;
export const BACKEND_BASE_URL = `${backendBaseUrl}`;