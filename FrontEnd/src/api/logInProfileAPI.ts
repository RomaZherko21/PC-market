import axios from "axios";
import {User} from '../types/userTypes'
const URL = "http://127.0.0.1:5000";


type postNewClientType = {
  message:string,
  err: boolean
}

const logInProfileAPI = {
  postNewClient(client:User) {
    return axios.post<postNewClientType>(`${URL}/logInProfile/registration`, client);
  },
  async getUser(logInInfo:{mail:string,password:string }) {
    let response;
    await axios
      .get<User>(
        `${URL}/logInProfile/logIn/?mail=${logInInfo.mail}&password=${logInInfo.password}`
      )
      .then((res) => {
        response = res.data;
      });
    return response;
  },
  async putUser(info:User) {
     axios.put(`${URL}/logInProfile/`, info);
  },
};

export default logInProfileAPI;
