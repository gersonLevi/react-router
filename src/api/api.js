import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export const search = async (url, setdata) => {
    const answer = await api.get(url);
    setdata(answer.data);
};
