import { onlyPost } from '../../../utils/backend-helpers';
import { serialize } from 'cookie';

import { validateEmailPassCareTaker } from '../../../api-helper/auth/care-taker-login';

async function handler(req, res) {
  try {
    const body = JSON.parse(req.body);
    // const body = req.body
    const { email, password } = body;
    const user = await validateEmailPassCareTaker({ email });
    if (user) {
      if (password === user.password) {
        res.setHeader(
          'Set-Cookie',
          serialize('QUICKOUT-TOKEN', email, {
            httpOnly: true,
            maxAge: 60 * 60 * 24,
            path: '/',
          })
        );
        return res.status(200).json({
          message: 'Success',
        });
      } else {
        return res.status(200).json({
          message: 'Wrong password',
        });
      }
    } else {
      return res.status(502).json({
        message: 'Email not exist',
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
