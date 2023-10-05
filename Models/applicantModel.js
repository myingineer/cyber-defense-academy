const mongoose = require('mongoose');
const validator = require('validator');


// First Name, Last Name, Phone Number, Email, Country, Zipcode
const applicantSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please Input Your First Name']
    },
    lastName: {
        type: String,
        required: [true, 'Please Input Your Last Name']
    },
    phoneNumber: {
        type: String,
        required: [true, 'Please Input Your Phone Number']
    },
    emailAddress: {
        type: String,
        required: [true, 'Please Input Your Email'],
        unique: [true, 'Email Already Exists'],
        lowercase: true,
        validate: [validator.isEmail, 'Please Enter a Valid Email']
    },
    country: {
        type: String,
        required: [true, 'Please State Your Country']
    },
    zipCode: {
        type: Number,
        required: [true, 'Please Enter Your Zipcode']
    }
});

const Applicant = mongoose.model('Applicant', applicantSchema);
module.exports = Applicant;