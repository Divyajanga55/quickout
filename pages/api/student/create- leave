import { onlyPost } from '../../../utils/backend-helpers';
import { saveLeave } from '../../../api-helper/student/create-leave';

async function handler(req, res) {
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
      caretaker,
      warden,
      date,
      stuMobile,
      prtMobile,
      numDays,
    } = req.body;
    const insert = await saveLeave({
      name,
      id,
      gender,
      year,
      className,
      dorm,
      outpassType,
      reason,
      caretaker,
      warden,
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