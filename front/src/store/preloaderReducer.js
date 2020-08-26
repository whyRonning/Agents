let data={
    isPreloaderVisible:false
}
let preloaderReducer=(state=data,action)=>{
    switch (action.type) {
        case "SwitchPreloader":
            return {...data,isPreloaderVisible: !state.isPreloaderVisible}
        default :
            return {...state}
    }
}
export let PreloaderAC=()=>({
    type: "SwitchPreloader"

})
export default preloaderReducer