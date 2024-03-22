export const publishedData = (data) => ({
    type: "PUBLISHED-DATA",
    payload: data
})

export const authorizedPerson = (data) => ({
    type: "AUTHORIZED-DATA",
    payload: data
})

//Only for owner person
export const ownerExtent = (data) => ({
    type: "EXTENT-DATA",
    payload: data
})

//Only for owner person
export const ownerAssignment = (data) => ({
    type: "ASSIGNMENT-DATA",
    payload: data
})

export const classification = (data) => ({
    type: "CLASSIFICATION-DATA",
    payload: data
})


export const applicantDetail = (data) => ({
    type: "APPLICANT-DATA",
    payload: data
})

//Work type {type: artistic,cinema,literally,record}
export const workType = (type) => ({
    type: "WORK-TYPE",
    payload: type
})
export const logoDetail = (data) => ({
    type: "LOGO_DETAIL-DATA",
    payload: data
})

// Only for Artistic work
export const advertisedWork = (data) => ({
    type: "WORK_ADVERTISED-DATA",
    payload: data
})

//Only for Artistic work
export const goodsAssociate = (data) => ({
    type: "GOODS_ASSOCIATION-DATA",
    payload: data
})

export const resetDetails = () => ({
    type: "RESET_DETAILS"
})

