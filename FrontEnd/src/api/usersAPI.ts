import axios from "axios";
import {user} from '../types/userTypes'
const URL = "http://127.0.0.1:5000/clients";

type getUserProfileType = {
  clientProfile: user;
};
type getUsersType = {
  clients: Array<user>;
};

const usersAPI = {
  getUserProfile(userID: string) {
    return axios.get<getUserProfileType>(`${URL}/${userID}`);
  },
  getUsers(count: number, page: number) {
    return axios.get<getUsersType>(`${URL}/?count=${count}&page=${page}`);
  },
};

export default usersAPI;
