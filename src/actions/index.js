import axios from 'axios';

export const FETCH_POST = 'FETCH_POST'


const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=skip1234'

export function fetchPost () {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
        type: FETCH_POST,
        paylod: request
    }
}