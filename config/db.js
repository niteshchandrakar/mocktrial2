const mongoose=require("mongoose")
require("dotenv").config()

const connection=mongoose.connect("mongodb+srv://niteshnitesh:115161aa@cluster0.80feikr.mongodb.net/mock6?retryWrites=true&w=majority")

module.exports =connection