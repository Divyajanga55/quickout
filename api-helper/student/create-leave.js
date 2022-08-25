import clientPromise from '../../mongodb/connection';

async function saveLeave(data = {}) {
  const {
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
  } = data;
  const client = await clientPromise;
  const db = client.db('quickout');
  const leaveCollec = db.collection('leavse');
  return leaveCollec.insertOne({
    email,
    name,
    id,
    gender: (gender || '').toLowerCase(),
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
}

export { saveLeave };
