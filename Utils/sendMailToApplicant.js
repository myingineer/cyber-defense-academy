const nodemailer = require('nodemailer');

const emailApplicant = async (option) => {
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
                    <div style="text-align: center; background-color: blue; color: white; padding: 10px 0; border-radius: 10px 10px 0 0;">
                        <h1>CYBER DEFENSE ACADEMY</h1>
                    </div>
                    <div style="padding: 20px;">
                        <p>Hello <strong>${option.lastName.toUpperCase()} ${option.firstName}</strong>,</p>
                        <p>We are excited to share some exciting news with you!</p>
                        <p>Congratulations! You have successfully enrolled to be a part of Cyber Defense Academy.</p>
                        <p>We are excited to have you on board and look forward to an enriching learning experience together. Make sure you are prepared for an exciting journey of learning and growth!</p>
                        <p>Please Be Patient as we have a lot of Applicants at this time of the Year. Our Team would reach out to You shortly with the email you provided.</p>
                        <p>Thank you for Enrolling to be a part of our community.</p>
                        <p>Best regards,<br> CEO <br> CYBER DEFENSE ACADEMY</p>
                    </div>
                    <div style="text-align: center; background-color:  blue; color: white; padding: 10px 0; border-radius: 0 0 10px 10px;">
                        <p>&copy; 2023 CYBER DEFENSE ACADEMY. All rights reserved.</p>
                    </div>
                </div>
            </div>
        `
    };

    await transporter.sendMail(emailOptions);
};

module.exports = emailApplicant;