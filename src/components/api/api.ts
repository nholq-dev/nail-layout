import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:9090",
    headers: {
        "Content-Type": "application/json"
    }
});

export default {
    getUser(id: number){
        return apiClient.get(`/users/${id}`);
    },
    postUser(params: {}){
        return apiClient.post("/users",params);
    }
}