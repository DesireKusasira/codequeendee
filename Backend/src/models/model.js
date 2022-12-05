const mongoose = require('mongoose')
const schema=mongoose.schema

const todoSchema = new schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    middlename:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})
// (model takes the file name and todoSchema takes the schema name)
// in the function below aka mongoose.model go to the model file and fetch todoSchema
const Todo = mongoose.model("model",todoSchema)
// To export means to make the file accessible to / by other files
module.exports = Todo;
