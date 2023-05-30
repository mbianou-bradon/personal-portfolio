import client from "./axios";

export default async function fetchData(props){

    const endpoint = props
    const response = await client.get(endpoint)

    return response;
}