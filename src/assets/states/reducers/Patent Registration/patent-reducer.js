const initialState = {
    referenceData: {},
    personDetails: [],
    companyDetails: [],
    priorityClaimDetails: [],
    copiesData: {},
    documentsData: {}
}

const patentRegistrationReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'REFERENCE-DATA':
            return { ...state, referenceData: action.payload }
        case 'PERSON-DETAILS':
            return { ...state, personDetails: action.payload }
        case 'COMPANY-DETAILS':
            return { ...state, companyDetails: action.payload }
        case 'PRIORITY-CLAIM-DETAILS':
            return { ...state, priorityClaimDetails: action.payload }
        case 'COPIES-DATA':
            return { ...state, copiesData: action.payload }
        case 'DOCUMENTS-DATA':
            return { ...state, documentsData: action.payload }
        case 'RESET-DETAILS':
            return initialState
        default:
            return state
    }
}

export default patentRegistrationReducer;