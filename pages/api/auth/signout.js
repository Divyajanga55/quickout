import { onlyGet } from '../../../utils/backend-helpers';
import { serialize } from 'cookie';

async function handler(req, res) {
  try {
    res.setHeader(
      'Set-Cookie',
      serialize('QUICKOUT-TOKEN', '', {
        httpOnly: true,
        maxAge: -1,
        path: '/',
      })
    );
    res.json({
      status: true,
    });
  } catch (err) {
    console.log('Error -->', err);
    return res
      .status(502)
      .json({ message: 'Something went wrong', status: false });
  }
}

export default onlyGet(handler);
