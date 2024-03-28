export const trademarkRepresentative = (data) => ({
    type: "REPRESENTATIVE-DATA",
    payload: data
})
export const trademarkClassification = (data) => ({
    type: "CLASSIFICATION-DATA",
    payload: data
})
export const trademarkOwnerDetail = (data) => ({
    type: "OWNER_DETAILS-DATA",
    payload: data
})
export const trademarkLogoDetail = (data) => ({
    type: "LOGO_DETAILS-DATA",
    payload: data
})
export const trademarkResetDetails = () => ({
    type: "RESET_DETAILS"
})

