let data = {
    isAlertVisible: false,
    message:""
}
const alertReducer = (state = data, action) => {
    switch (action.type) {
        case "alertState":
            return { ...state, isAlertVisible: !state.isAlertVisible}
        case "messageChange":
            return {...state,message:action.message}
        default :
            return state
    }
}
export default alertReducer;
export let alertReducerAC = () => ({
    type: "alertState",
})
export let messageChangeAC=(message)=>({
    type:"messageChange",
    message
})
