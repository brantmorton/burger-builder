import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-6dbab.firebaseio.com/"
});

export default instance;