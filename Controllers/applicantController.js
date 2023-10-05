const Applicant = require("../Models/applicantModel");
const sendEmail = require("../Utils/sendMailToOwner");
const emailApplicant = require('../Utils/sendMailToApplicant');
const CustomError = require('../Utils/customError');


exports.home = (req, res) => {
    res.status(200).json({
        status: "Success",
        message: "Welcome to the landing page",
    });
};

exports.emailTheOwnerAndApplicant = async (req, res, next) => {
    try {
        const applicant = await Applicant.create(req.body);

        try {
            await emailApplicant({
                email: applicant.emailAddress,
                subject: `Welcome On-Board`,
                lastName: applicant.lastName,
                firstName: applicant.firstName
            });

            await sendEmail({
                email: process.env.OWNER_EMAIL,
                subject: 'A New Applicant Enrolled',
                lastName: applicant.lastName,
                firstName: applicant.firstName,
                emailAddress: applicant.emailAddress,
                phoneNumber: applicant.phoneNumber,
                country: applicant.country,
                zipCode: applicant.zipCode
            });

            res.status(200).json({
                status: 'Success',
                message: 'Enrollment Successful. A mail would be sent to your email shortly. If you do not get it, Check your SPAM folder'
            });
        } catch (err) {
            const error = new CustomError(`An Error Occured. Please Try Again`, 500);
            return next(error);
        };

    } catch (error) {
        return next(error);
    };
};
