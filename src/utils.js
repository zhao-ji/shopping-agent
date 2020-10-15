import axios from "axios";

const api = axios.create({
    baseURL: '',
    timeout: 1000,
    headers: {
        "X-Requested-With": "dashboard",
    },
    xsrfCookieName: "csrftoken",
    xsrfHeaderName: "X-CSRFTOKEN",
    withCredentials: true,
});

api.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response.status === 401 || error.response.status === 403) {
            window.location.href = "/login";
        }
    },
);

export default api;
