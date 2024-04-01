export const designRepresentative = (data) => ({
    type: "REPRESENTATIVE-DATA",
    payload: data
})
export const designClassification = (data) => ({
    type: "CLASSIFICATION-DATA",
    payload: data
})
export const designOwnerDetail = (data) => ({
    type: "OWNER_DETAILS-DATA",
    payload: data
})
export const designAttachmentDetail = (data) => ({
    type: "ATTACHMENT_DETAILS-DATA",
    payload: data
})
export const designResetDetails = () => ({
    type: "RESET_DETAILS"
})