import axios from 'axios';
import { updateProfile } from '../actions/user-action';

export const updateUser = (id, user) => async (dispatch) => {
    const response = await axios.put(`/ipo/users/${id}`, user);
    dispatch(updateProfile(response.data.userData));
};