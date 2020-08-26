const {Schema, model} = require("mongoose")

const schema = new Schema({
    Name: {type: String, required: true},
    SecondName: {type: String, required: true},
    Position: {type: String, required: true},
    Photo: {type: String, required: true},
    Mail: {type: String, required: true}
})
module.exports = model("Team", schema);