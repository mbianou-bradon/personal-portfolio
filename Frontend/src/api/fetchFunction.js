import axios from "axios"

const client = axios.create({
    baseURL: "https://personal-portfolio-coj2.onrender.com"
});

export default async function fetchData(props){

    const endpoint = props
    console.log(endpoint)
    const response = await client.get(endpoint)

    return response;
}