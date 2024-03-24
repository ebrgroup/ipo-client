const initialState = {
    representative: {},
    classification: {},
    ownerdetail: {},
    attachmentdetail: {},
    reviewdetail: {}
}

const designRegistrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REPRESENTATIVE-DATA':
            return { ...state, representative: action.payload };
        case 'CLASSIFICATION-DATA':
            return { ...state, classification: action.payload };
        case 'OWNER_DETAILS-DATA':
            return { ...state, ownerdetail: action.payload };
        case 'ATTACHMENT_DETAILS-DATA':
            return { ...state, attachmentdetail: action.payload };
        case 'REVIEW_DETAILS-DATA':
            return { ...state, reviewdetail: action.payload };
        case 'RESET_DETAILS':
            return initialState;
        default:
            return state;
    }
}

export default designRegistrationReducer;