import * as axios from "axios";
const URL = "http://127.0.0.1:5000/clients";

const usersAPI = {
  getUserProfile(userID) {
    return axios.get(`${URL}/${userID}`);
  },
  getUsers(count, page) {
    return axios.get(`${URL}/?count=${count}&page=${page}`);
  },
};

export default usersAPI;
