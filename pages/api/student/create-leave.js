import { onlyPost } from '../../../utils/backend-helpers';
import { saveLeave } from '../../../api-helper/student/create-leave';

async function handler(req, res) {
  const body = JSON.parse(req.body);
  const email = req.cookies['QUICKOUT-TOKEN'];
  if(!email) {
    return res.status(502).json({
      message: 'Not logged in',
    });
  }
  // console.log('email-->', email);
  try {
    const {
      name,
      id,
      gender,
      year,
      className,
      dorm,
      outpassType,
      reason,
      applyFor,
      date,
      stuMobile,
      prtMobile,
      numDays,
    } = body;
    const insert = await saveLeave({
      email,
      name,
      id,
      gender,
      year,
      className,
      dorm,
      outpassType,
      reason,
      applyFor,
      date,
      stuMobile,
      prtMobile,
      numDays,
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
