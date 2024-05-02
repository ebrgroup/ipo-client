import axios from 'axios';
import { searchIp, trackIp } from '../actions/IP-Lookup-actions/Tabledata-action';
import { loadingBar } from '../actions/Loading-Action';

export const searchByName = (name, type) =>
    async (dispatch) => {
        dispatch(loadingBar(40));
        try {
            console.log(type.toLowerCase());
            const response = await axios.get(`ipo/searchIp/${type.toLowerCase()}/${name}`);
            dispatch(loadingBar(70));
            dispatch(searchIp(response.data));
            dispatch(loadingBar(100));
        } catch (error) {
            console.error('Error searching by name:', error);
        }
    };

export const trackById = (id, userId, status, type) =>
    async (dispatch) => {
        dispatch(loadingBar(40))
        const response = await axios.post(`/ipo/trackIp/${type.toLowerCase()}`, { id, userId, status });
        dispatch(loadingBar(70))
        dispatch(trackIp(response.data));
        dispatch(loadingBar(100))
    };

export const getIp = (id, status, type) =>
    async (dispatch) => {
        dispatch(loadingBar(40))

        const response = await axios.post(`/ipo/user/${type.toLowerCase()}`, { id, status });
        dispatch(loadingBar(70))
        dispatch(searchIp(response.data));
        // console.log(response.data);
        dispatch(loadingBar(100))
    };

