export const loadingBar = (progress) => ({
    type: "LOADING",
    payload: progress
})
export const resetBar = () => ({
    type: "RESET"
})
