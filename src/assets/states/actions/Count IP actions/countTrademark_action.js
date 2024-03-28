export const registeredTrademark = (count) => ({
    type: "REGISTERED_TRADEMARK",
    payload: count
});

export const appliedTrademark = (count) => ({
    type: "APPLIED_TRADEMARK",
    payload: count
});

export const registeredDesign = (count) => ({
    type: "REGISTERED_DESIGN",
    payload: count
});

export const appliedDesign = (count) => ({
    type: "APPLIED_DESIGN",
    payload: count
});

export const resetcount = () => ({
    type: "RESET_COUNT"
});