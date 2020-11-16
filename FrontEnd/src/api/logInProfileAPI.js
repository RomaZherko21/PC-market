import * as axios from "axios";
const URL = "http://127.0.0.1:5000";

const logInProfileAPI = {
  postNewClient(client) {
    return axios.post(`${URL}/logInProfile/registration`, client);
  },
  async getUser(logInInfo) {
    let response;
    await axios.get(`${URL}/logInProfile/logIn/?mail=${logInInfo.mail}&password=${logInInfo.password}`).then(res=>{
      response = res.data;
    })
    return response;
  },
};

export default logInProfileAPI;
