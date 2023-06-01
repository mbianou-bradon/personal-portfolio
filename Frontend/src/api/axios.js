import axios from "axios"

const client = axios.create({
    baseURL: "https://personal-portfolio-coj2.onrender.com"
});

export default client;