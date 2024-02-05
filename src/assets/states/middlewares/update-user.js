import axios from 'axios';
import { updateProfile } from '../actions/user-action';

export const updateUser = (id, user) =>
    async (dispatch) => {
        try {
            const response = await axios.put(`http://localhost:5000/ipo/users/${id}`, user);
            dispatch(updateProfile(response.data.userData));
        } catch (error) {
            console.log('An error occurred:', error);
        }
};
