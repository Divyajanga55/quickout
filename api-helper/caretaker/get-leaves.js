import clientPromise from '../../mongodb/connection';

async function getCaretakerLeaves({ email }) {
  const client = await clientPromise;
  const db = client.db('quickout');
  const careColl = db.collection('caretakers');
  const query = { email: { $regex: email } };
  const careTaker = await careColl.findOne(query);
  if (!careTaker) return false;
  const gender = careTaker.gender;
  const leaveColl = db.collection('leavse');
  return leaveColl
    .find({ applyFor: { $regex: /caretaker/i }, gender: gender })
    .toArray();
}

export { getCaretakerLeaves };
