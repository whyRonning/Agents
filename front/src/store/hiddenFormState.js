let Formdates = {
    isFormVisible: false,
}
const FormState = (state = Formdates, action) => {
    switch (action.type) {
        case 'FormState' :
            return {...state, isFormVisible: !state.isFormVisible}
        default :
            return {...state};

    }
};

export let HiddenForm = () => ({
    type: "FormState"
})
export default FormState;