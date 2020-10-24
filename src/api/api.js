import * as axios from "axios";
const URL = "https://social-network.samuraijs.com/api/1.0";

const usersAPI = {
  getUserProfile(userID) {
    return axios.get(`${URL}/profile/${userID}`);
  },
  getUsers(count, page) {
    return axios.get(`${URL}/users?count=${count}&page=${page}`);
  },
};

export default usersAPI;
