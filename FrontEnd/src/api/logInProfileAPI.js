import * as axios from "axios";
const URL = "http://127.0.0.1:5000";

const logInProfileAPI = {
  postNewClient(client) {
    console.log("Client:", client);
    return axios
      .post(`${URL}/logInProfile/registration`, client)
      .then(function (response) {
        console.log(response.data.message);
      });
  },
  getUser(logInInfo) {
    return axios
      .get(`${URL}/logInProfile/logIn/?mail=${logInInfo.mail}&password=${logInInfo.password}`)
      .then(function (response) {
        console.log(response.data);
      });
  },
};

export default logInProfileAPI;
