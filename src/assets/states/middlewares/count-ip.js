import axios from 'axios';
import { registeredTrademark, appliedTrademark, registeredDesign, appliedDesign } from '../actions/Count IP actions/countTrademark_action';
import { loadingBar } from '../actions/Loading-Action';

export const countTrademark = (id) =>
    async (dispatch) => {
        dispatch(loadingBar(40))
        const response = await axios.get(`http://localhost:5000/ipo/dashboard/user/countIp/${id}`);
        dispatch(loadingBar(80))
        const { 
            registeredTrademarks, 
            appliedTrademarks,
            registeredDesigns, 
            appliedDesigns 
        } = response.data;
        dispatch(loadingBar(90))
        dispatch(registeredTrademark(registeredTrademarks));
        dispatch(appliedTrademark(appliedTrademarks));
        dispatch(registeredDesign(registeredDesigns));
        dispatch(appliedDesign(appliedDesigns));
        dispatch(loadingBar(100))
    };

