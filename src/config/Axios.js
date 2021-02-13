import axios from "axios";

const Axios = axios.create({
  baseURL: "https://opentdb.com/api.php?amount=10",
});

export default Axios;
