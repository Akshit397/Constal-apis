let animals;

const mongoose = require('mongoose');

const ContractSchema = new mongoose.Schema({
    prop1: ""
},
{
    versionKey: false,
    timestamps: true,
    toJSON: {
        virtuals: true
    }
})
