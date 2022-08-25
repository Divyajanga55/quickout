import { onlyGet } from '../../../utils/backend-helpers';

import { getCaretakerLeaves } from '../../../api-helper/caretaker/get-leaves';

async function handler(req, res) {
  const email = req.cookies['QUICKOUT-TOKEN'];
  if (!email) {
    return res.status(502).json({
      message: 'Not logged in',
    });
  }
  // console.log('email-->', email);
  try {
    const leaves = await getCaretakerLeaves({ email });
    if (!leaves)
      return res
        .status(502)
        .json({ message: 'Something went wrong', status: false });
    return res.status(200).json({
      message: 'Success',
      leaves: leaves,
    });
  } catch (err) {
    console.log('Error -->', err);
    return res
      .status(502)
      .json({ message: 'Something went wrong', status: false });
  }
}

export default onlyGet(handler);
