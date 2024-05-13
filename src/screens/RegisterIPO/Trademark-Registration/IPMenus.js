import React from 'react'
import trademarkIcon from '../../../assets/Icons/icons8trademark641-1@2x.png'
import patentIcon from '../../../assets/Icons/icons8patent64-1@2x.png'
import copyrightIcon from '../../../assets/Icons/icons8copyright64-1@2x.png'
import designIcon from '../../../assets/Icons/icons8design64-1@2x.png'
import './ipMenus.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { registerCopyrightHelp, registerDesignHelp, registerPatentHelp, registerTrademarkHelp }
    from '../../../assets/states/actions/Helpdesk-Content'
import { useEffect } from 'react'
import { patentResetDetails } from '../../../assets/states/actions/Patent Registration/patent-action'
import { copyrightResetDetails } from '../../../assets/states/actions/Copyright_Data handle/copyrightData-action'
import { trademarkResetDetails } from '../../../assets/states/actions/Trademark registration/Trademark-action'
import { designResetDetails } from '../../../assets/states/actions/Design/design-action'

const IPMenus = ({ Progress }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        Progress(100);
    }, [])

    // This function clear the cache which store the temporary
    // data and cause the repetition problem
    // Example --> Trademark data show in copyright data or vice versa
    const resetDetails = () => {
        dispatch(patentResetDetails())
        dispatch(copyrightResetDetails())
        dispatch(trademarkResetDetails())
        dispatch(designResetDetails())
    }

    const trademarkBtnClick = () => {
        dispatch(registerTrademarkHelp())
        navigate("/confirmationScreen", { state: { type: "trademark" } });
        resetDetails()
    }
    const copyrightBtnClick = () => {
        dispatch(registerCopyrightHelp())
        navigate('/copyright/confirmation', { state: { type: "copyright" } })
        resetDetails()
    }
    const patentBtnClick = () => {
        dispatch(registerPatentHelp())
        navigate('/confirmationScreen', { state: { type: "patent" } });
        resetDetails()
    }
    const designBtnClick = () => {
        dispatch(registerDesignHelp())
        navigate("/confirmationScreen", { state: { type: "design" } });
        resetDetails()
    }
    return (
        <div className="IP-Menus">
            <div className='Ip-btn ' onClick={trademarkBtnClick}>
                <span>+</span>
                <h4 className="title">Register Trademark</h4>
                <img src={trademarkIcon} />
            </div>
            <div className='Ip-btn ' onClick={copyrightBtnClick}>
                <span>+</span>
                <h4 className="title">Register Copyright</h4>
                <img src={copyrightIcon} />
            </div>
            <div className='Ip-btn ' onClick={patentBtnClick}>
                <span>+</span>
                <h4 className="title">Register Patent</h4>
                <img src={patentIcon} />
            </div>
            <div className='Ip-btn ' onClick={designBtnClick}>
                <span>+</span>
                <h4 className="title">Register Design</h4>
                <img src={designIcon} />
            </div>
        </div>
    )
}

export default IPMenus
