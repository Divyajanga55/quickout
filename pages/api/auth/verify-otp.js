import { onlyPost } from '../../../utils/backend-helpers';
import { getOtpFromDB } from '../../../api-helper/auth/verify-otp';

async function handler(req, res) {
  const email = req.body.email;
  const otp = req.body.otp;
  try {
    const savedOtp = await getOtpFromDB({ email });
    if (savedOtp === false) {
      return res
        .status(404)
        .json({ message: `Email doen't exist`, status: false });
    }
    if (String(savedOtp) === String(otp)) {
      return res
        .status(200)
        .json({ message: 'Authentication success', status: true });
    } else {
      return res.status(401).json({ message: `Password wrong`, status: false });
    }
  } catch (err) {
    console.log('Error -->', err);
    return res
      .status(502)
      .json({ message: 'Something went wrong', status: false });
  }
}

export default onlyPost(handler);