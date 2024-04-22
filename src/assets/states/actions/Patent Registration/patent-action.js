export const patentReferenceData = (data) => ({
    type: 'REFERENCE-DATA',
    payload: data
});

export const patentPersonDetails = (data) => ({
    type: 'PERSON-DETAILS',
    payload: data
});

export const patentCompanyDetails = (data) => ({
    type: 'COMPANY-DETAILS',
    payload: data
});

export const patentPirorityClaimDetails = (data) => ({
    type: 'PRIORITY-CLAIM-DETAILS',
    payload: data
});

export const patentCopiesData = (data) => ({
    type: 'COPIES-DATA',
    payload: data
});

export const patentDocumentsData = (data) => ({
    type: 'DOCUMENTS-DATA',
    payload: data
});

export const patentResetDetails = (data) => ({
    type: 'RESET-DETAILS',
    payload: data
});