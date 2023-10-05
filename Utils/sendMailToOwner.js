const nodemailer = require('nodemailer');

const sendEmail = async (option) => {
    // Create A Transporter 
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_HOST,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    // DEFINE EMAIL OPTIONS
    const emailOptions = {
        from: 'CYBER DEFENSE ACADEMY',
        to: option.email,
        subject: option.subject,
        html: `
            <div style="background-color: #f4f4f4; padding: 20px; height: fit-content;">
                <div style="max-width: 600px; margin: 0 auto; background-color: white; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border-radius: 10px;">
                    <div style="text-align: center; background-color:  #000F89; color: white; padding: 10px 0; border-radius: 10px 10px 0 0;">
                        <h1>A New Applicant Enrolled</h1>
                    </div>
                    <div style="padding: 20px;">
                        <h2 style="text-align: center">APPLICANT'S DETAILS</h2>
                        <p>APPLICANT'S LAST NAME: ${option.lastName}</p>
                        <p>APPLICANT'S FIRST NAME: ${option.firstName}</p>
                        <p>APPLICANT'S EMAIL ADDRESS: ${option.emailAddress}</p>
                        <p>APPLICANT'S PHONE NUMBER: ${option.phoneNumber}</p>
                        <p>APPLICANT'S COUNTRY: ${option.country}</p>
                        <p>APPLICANT'S ZIP CODE: ${option.zipCode}</p>
                    </div>
                    <div style="text-align: center; background-color:  #000F89; color: white; padding: 10px 0; border-radius: 0 0 10px 10px;">
                        <p>&copy; 2023 CYBER DEFENSE ACADEMY. All rights reserved.</p>
                    </div>
                </div>
            </div>
        `
    };

    await transporter.sendMail(emailOptions);
};

module.exports = sendEmail;
