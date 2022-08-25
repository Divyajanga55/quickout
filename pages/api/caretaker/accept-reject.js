import { onlyPost } from '../../../utils/backend-helpers';

import { acceptOrReject } from '../../../api-helper/caretaker/accept-reject';

async function handler(req, res) {
  // const body = req.body;
  const body = JSON.parse(req.body)
  const { status, id } = body;
  const email = req.cookies['QUICKOUT-TOKEN'];
  if (!email) {
    return res.status(502).json({
      message: 'Not logged in',
    });
  }
  try {
    const resp = await acceptOrReject({ email, id, status });
    if (resp) {
      return res.status(200).json({ message: 'Success' });
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
