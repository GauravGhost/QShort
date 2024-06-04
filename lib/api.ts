import axios from "axios";
const baseUrl = "https://qshortb.zesp.in";

export async function create(url: string) {
    try {
        const response = await axios({
            url: baseUrl,
            method: 'POST',
            data: { url: url }
        });
        return response.data;
    } catch (error: any) {
        if (error.response) {
            return error.response.data;
        }
        return error;
    }
}

export async function fetch(url: string | undefined) {
    try {
        const response = await axios({
            url: `${baseUrl}/${url}`,
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });
        return response.data;

    } catch (error: any) {
        if (error.response) {
            return error.response.data;
        }
        return error.message;
    }
}