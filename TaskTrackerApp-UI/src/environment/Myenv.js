import { useEffect as UseEffect } from "react";
import axios from "axios";

//const API_URL = "/api/task/";
const API_URL_ENV = "/api/UIenv/";
const MODE = "dev";

export let env = [];

const api = async () => {
  if (MODE === "dev") {
    const response = await axios.get(API_URL_ENV + "/dev");
    return response.data;
  } else if (MODE === "prod") {
    const response = await axios.get(API_URL_ENV + "/dev");
    return response.data;
  }
};

export const getenv = () => {
  return env;
};

function Myenv() {
  UseEffect(async () => {
    const res = await api();
    env = res;
    console.log(env.name);
  }, []);
}

export default Myenv;

/* 
how to get data from myenv

import { getenv } from "../environment/Myenv";
const env = getenv();
{console.log(env.REACT_APP_CLIENTID)}

*/

/*



<h1>{tasks.name}</h1>
*/

/* 
import axios from "axios";

const API_URL = "/api/task/";
const API_URL_ENV = "/api/UIenv/";
const MODE = "dev";
//const MODE = 'prod'

// Get user goals
const getApiUri = () => {
  return API_URL;
};

// Get user goals
const getENVmode = async () => {
  if (MODE === "dev") {
    const response = await axios.get(API_URL_ENV + "/dev");
    return response.data;
  } else if (MODE === "prod") {
    const response = await axios.get(API_URL_ENV + "/dev");
    return response.data;
  }
};
export { getApiUri, getENVmode };



*/
