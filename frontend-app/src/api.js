import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000';

export const fetchWelcomeMessage = async () => {
    const response = await axios.get(`${API_BASE_URL}/`);
    return response.data;
};

export const createItem = async (item) => {
    const response = await axios.post(`${API_BASE_URL}/items/`, item);
    return response.data;
};
