const initialState = {
    registeredTrademarks: 0,
    appliedTrademarks: 0,
    registeredDesigns: 0,
    appliedDesigns: 0,
    registeredCopyrights: 0,
    appliedCopyright: 0
}

const countTrademark = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTERED_TRADEMARK':
            return { ...state, registeredTrademarks: action.payload };
        case "APPLIED_TRADEMARK":
            return { ...state, appliedTrademarks: action.payload };
        case 'REGISTERED_DESIGN':
            return { ...state, registeredDesigns: action.payload };
        case "APPLIED_DESIGN":
            return { ...state, appliedDesigns: action.payload };
        case 'REGISTERED_COPYRIGHT':
            return { ...state, registeredCopyright: action.payload };
        case "APPLIED_COPYRIGHT":
            return { ...state, appliedCopyright: action.payload };
        case "RESET_COUNT":
            return initialState;
        default:
            return state;
    }
}

export default countTrademark;