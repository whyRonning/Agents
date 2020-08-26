
let date = {
    teamDate: ["1","2"]
};
const realtorsDate = (state = date, action) => {
    switch (action.type) {
        case "GetTeam":
            return {...state, teamDate: [...action.team]};
        default:
            return state
    }
};
export let GetTeamAC = (team) => ({
    type: "GetTeam",
    team
});
export default realtorsDate;