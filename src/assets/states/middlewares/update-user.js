import axios from 'axios';
import { updateProfile } from '../actions/user-action';
import { loadingBar } from '../actions/Loading-Action';

export const updateUser = (id, user) =>
    async (dispatch) => {
<<<<<<< HEAD
        try {
            const response = await axios.put(`http://localhost:5000/ipo/users/${id}`, user);
            dispatch(updateProfile(response.data.userData));
        } catch (error) {
            console.log('An error occurred:', error);
        }
};
=======
        dispatch(loadingBar(40))
        const response = await axios.put(`http://localhost:5000/ipo/users/${id}`, user);
        dispatch(loadingBar(70))
        console.log('50');
        dispatch(updateProfile(response.data.userData));
        dispatch(loadingBar(100))
    };

>>>>>>> 3de42ae40a196c02ab92d99ce3c793aecd5c879c
