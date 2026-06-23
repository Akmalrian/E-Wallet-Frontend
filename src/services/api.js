
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:9000";

const apiFetch = async (endpoint, options = {}) => {
    const url = `${BASE_URL}${endpoint}`;
    const defaultHeaders = {
        "Content-Type": "application/json",
    };
    const token = localStorage.getItem("token");
    if (token) {
        defaultHeaders["Authorization"] = `Bearer ${token}`;
    }
    const config = {
        ...options,
        headers: {
            ...defaultHeaders,
            ...options.headers,
        },
    };

    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || data.message || "Something went wrong");
    }
    return data;
};

export default apiFetch;