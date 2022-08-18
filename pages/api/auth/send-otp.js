import { onlyPost } from '../../../utils/backend-helpers';
import sendMail from '../../../nodemailer/index';
import { generateOtp } from '../../../utils/helpers';

import { saveOtpOnDB } from '../../../api-helper/auth/send-otp';

async function handler(req, res) {
  const email = req.body.email;
  const otp = generateOtp();
  try {
    await saveOtpOnDB({ email: email, otp: otp });
    const info = await sendMail({ email: email, otp: otp });
    if (info) {
      return res.status(200).json({ message: 'OTP sent', status: true });
    } else {
      return res
        .status(502)
        .json({ message: 'Something went wrong', status: false });
    }
  } catch (err) {
    console.log('Error -->', err);
    return res
      .status(502)
      .json({ message: 'Something went wrong', status: false });
  }
}

export default onlyPost(handler);
