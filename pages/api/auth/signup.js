import { onlyPost } from '../../../utils/backend-helpers';
import { saveProfile } from '../../../api-helper/auth/signup';

async function handler(req, res) {
  try {
    // name, year, gender, cls, dorm, stuMobile, parMobile, password, confPassword,
    const body = JSON.parse(req.body);
    const {
      name,
      year,
      gender,
      cls,
      dorm,
      stuMobile,
      parMobile,
      password,
      confPassword,
      email
    } = body;
    const insert = await saveProfile({
      email,
      name,
      year,
      gender,
      cls,
      dorm,
      stuMobile,
      parMobile,
      password,
      confPassword,
    });
    if (insert) {
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
