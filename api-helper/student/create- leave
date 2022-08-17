import clientPromise from '../../mongodb/connection';

async function saveLeave(data = {}) {
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
  } = data;
  const client = await clientPromise;
  const db = client.db('quickout');
  const leaveCollec = db.collection('leavse');
  return leaveCollec.insertOne({
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
}

export { saveLeave };