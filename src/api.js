
import { mockData } from "./mock-data";
import axios from "axios";
import NProgress from "nprogress";
import "./nprogress.css";

const checkToken = async (accessToken) => {
  const result = await fetch(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  )
    .then((res) => res.json())
    .catch((error) => error.json());

  return result;
};

const removeQuery = () => {
  if (window.history.pushState && window.location.pathname) {
    var newurl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname;
    window.history.pushState("", "", newurl);
  } else {
    newurl = window.location.protocol + "//" + window.location.host;
    window.history.pushState("", "", newurl);
  }
};

// const getToken = async (code) => {
//   const encodeCode = encodeURIComponent(code);
//   const { access_token } = await fetch(
//     "https://dxchgdtgc1.execute-api.eu-central-1.amazonaws.com/dev/api/token/" +
//     encodeCode
//   )
//     .then((res) => {
//       console.log(res.json(), 'tokeniser')
//       return res.json();
//     })
//     .catch((error) => error);

//   access_token && localStorage.setItem("access_token", access_token);
//   console.log(access_token, 'tokeniser2')
//   return access_token;
// };

const getToken = async (code) => {
  const encodeCode = encodeURIComponent(code);
  try {
    const res = await fetch(
      "https://dxchgdtgc1.execute-api.eu-central-1.amazonaws.com/dev/api/token/" +
      encodeCode
    )
    const { access_token } = await res.json();
    console.log(access_token, 'tokeniser')
    return access_token
  } catch (error) {
    console.error(error)
  }
  // const { access_token } = await fetch(
  //   "https://dxchgdtgc1.execute-api.eu-central-1.amazonaws.com/dev/api/token/" +
  //   encodeCode
  // )
  //   .then((res) => {
  //     console.log(res.json(), 'tokeniser')
  //     return res.json();
  //   })
  //   .catch((error) => error);

  // access_token && localStorage.setItem("access_token", access_token);
  // console.log(access_token, 'tokeniser2')
  // return access_token;
};

export const getAccessToken = async () => {
  const accessToken = localStorage.getItem("access_token");
  const tokenCheck = accessToken && (await checkToken(accessToken));

  if (!accessToken || tokenCheck.error) {
    await localStorage.removeItem("access_token");
    const searchParams = new URLSearchParams(window.location.search);
    const code = await searchParams.get("code");
    if (!code) {
      const results = await axios.get(
        "https://dxchgdtgc1.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url"
      );
      const { authUrl } = results.data;
      return (window.location.href = authUrl);
    }
    return code && getToken(code);
  }
  return accessToken;
};

export const getEvents = async () => {
  NProgress.start();

  if (window.location.href.startsWith("http://localhost")) {
    NProgress.done();
    return mockData;
  }

  const token = await getAccessToken();

  if (token) {
    removeQuery();
    const url =
      "https://dxchgdtgc1.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/" +
      token;
    const result = await axios.get(url);
    if (result.data) {
      var locations = extractLocations(result.data.events);
      localStorage.setItem("lastEvents", JSON.stringify(result.data));
      localStorage.setItem("locations", JSON.stringify(locations));
    }
    NProgress.done();
    return result.data.events;
  }
};

export const extractLocations = (events) => {
  var extractLocations = events.map((event) => event.location);
  var locations = [...new Set(extractLocations)];
  return locations;
};
