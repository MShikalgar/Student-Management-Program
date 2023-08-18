const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const publicationSchema = new Schema({
    title:{type: String, required :true },
    organiser:{type: String, required :true },
    details:{type: String, required :true },
    date:{type: String, required :true },
    fees:{type: String, required :true }   
})

const Publications = mongoose.model("Events",publicationSchema);
module.exports= Publications;