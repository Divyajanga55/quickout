import { onlyPost } from '../../../utils/backend-helpers';
import { updateProfile } from   '../../../api-helper/auth/update-profile';

async function handler(req, res) {
  try {
    // const { email, name, userType, password, id } = req.body;
    const { email, mobile, cls, year, paName, paMobile, address } = req.body;
    const result = await updateProfile({
      email,
      mobile,
      cls,
      year,
      paName,
      paMobile,
      address,
    });
    if (result) {
      return res.status(200).json({
        message: 'Success',
      });
    } else {
      return res.status(502).json({
        message: 'Something went wrong',
      });
    }
  } catch (err) {
    console.log('Error -->', err);
    return res
      .status(502)
      .json({ message: 'Something went wrong', status: false });
  }
}

export default onlyPost(handler);