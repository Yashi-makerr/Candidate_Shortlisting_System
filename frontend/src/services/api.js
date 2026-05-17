import axios from "axios";

const API = axios.create({
  baseURL:
    "https://candidate-shortlisting-backend-hmvc.onrender.com/api"
});

export default API;