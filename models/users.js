var mongoose = require('mongoose')

var messageSchema = mongoose.Schema({
    title: String,
    content: String,
    dateExp: Date,
    read: Boolean,
    sender: String,
})


var taskSchema = mongoose.Schema({
    name: String,
    category: String,
    owner: String,
    dateInsert: Date,
    dateDue: Date,
    dateCloture: Date
})


var usersSchema = mongoose.Schema({
    messages: [messageSchema],
    tasks: [taskSchema],
    firstName: String,
    lastName: String,
    email: String,
    passord: String,
    age: Number,
    statuts: String,
    gender: String,
    dateInsert: Date,
    

})

module.exports = mongoose.model('users', usersSchema)