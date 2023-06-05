import axios from "axios"

const client = axios.create({
    baseURL: "https://personal-portfolio-coj2.onrender.com"
    // baseURL: "http://127.0.0.1:4000"
});

export default client;