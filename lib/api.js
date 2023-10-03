import axios from "axios";
const baseUrl = "http://localhost:4000";

export async function create(url) {
    try {
        const response = await axios({
            url: baseUrl,
            method: 'POST',
            data: { url: url }
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
        return error.message;
    }
}

export async function fetch(url) {
    try {
        const response = await axios({
            url: `${baseUrl}/${url}`,
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });
        return response.data;

    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
        return error.message;
    }
}