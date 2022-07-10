const nodemailer = require('nodemailer');
import otpTemplate from '../utils/otp-template';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL,
    pass: process.env.GMAIL_PASSWORD,
  },
});

async function sendMail({ email, otp }) {
  const options = {
    from: process.env.GMAIL,
    to: email,
    subject: `Welcome to QuickOut, your OTP: ${otp}`,
    html: otpTemplate({ otp }),
  };
  return transporter.sendMail(options);
}

export default sendMail;
