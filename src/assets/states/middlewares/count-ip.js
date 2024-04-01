import axios from 'axios';
import { registeredTrademark, appliedTrademark, registeredDesign, appliedDesign, registeredCopyright, appliedCopyright } from '../actions/Count IP actions/countTrademark_action';
import { loadingBar } from '../actions/Loading-Action';

export const countTrademark = (id) =>
    async (dispatch) => {
        dispatch(loadingBar(40))
        const response = await axios.get(`http://localhost:5000/ipo/dashboard/user/countIp/${id}`);
        console.log(response);
        dispatch(loadingBar(80))
        const {
            registeredTrademarks,
            appliedTrademarks,
            registeredDesigns,
            appliedDesigns,
            registeredCopyrights,
            appliedCopyrights
        } = response.data;
        dispatch(loadingBar(90))
        dispatch(registeredTrademark(registeredTrademarks));
        dispatch(appliedTrademark(appliedTrademarks));
        dispatch(registeredDesign(registeredDesigns));
        dispatch(appliedDesign(appliedDesigns));
        dispatch(registeredCopyright(registeredCopyrights));
        dispatch(appliedCopyright(appliedCopyrights));
        dispatch(loadingBar(100))
    };

