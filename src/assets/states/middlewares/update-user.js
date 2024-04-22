import axios from 'axios';
import { updateProfile } from '../actions/user-action';
import { loadingBar } from '../actions/Loading-Action';

export const updateUser = (id, user) =>
    async (dispatch) => {
        dispatch(loadingBar(40))
        const response = await axios.put(`http://localhost:5000/ipo/users/${id}`, user);
        dispatch(loadingBar(70))
        dispatch(updateProfile(response.data.userData));
        dispatch(loadingBar(100))
    };


export const userName = (userIds) =>
    async (dispatch) => {
        dispatch(loadingBar(40))
        // console.log(userIds);
        const response = await axios.post('http://localhost:5000/ipo/users/names', userIds);
        dispatch(loadingBar(70))
        // dispatch(updateProfile(response.data.userData));
        // console.log(response.data);
        dispatch(loadingBar(100))
    };

