const initialState = {
    published: {},
    self: {},
    extent: {},
    assignment: {},
    workType: '',
    classification: {},
    ownerdetail: {},
    logodetail: {},
    advertised: {},
    goodsServices: {}
}

const copyrightReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PUBLISHED-DATA':
            return { ...state, published: action.payload };
        case 'AUTHORIZED-DATA':
            return { ...state, self: action.payload };
        case 'EXTENT-DATA':
            return { ...state, extent: action.payload };
        case 'ASSIGNMENT-DATA':
            return { ...state, assignment: action.payload };
        case 'WORK-TYPE':
            return { ...state, workType: action.payload };
        case 'CLASSIFICATION-DATA':
            return { ...state, classification: action.payload };
        case 'APPLICANT-DATA':
            return { ...state, ownerdetail: action.payload };
        case 'LOGO_DETAILS-DATA':
            return { ...state, logodetail: action.payload };
        case 'APPLICANT-DATA':
            return { ...state, advertised: action.payload };
        case 'LOGO_DETAILS-DATA':
            return { ...state, goodsServices: action.payload };

        case 'RESET_DETAILS':
            return initialState;
        default:
            return state;
    }
}

export default copyrightReducer;