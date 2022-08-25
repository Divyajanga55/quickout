import clientPromise from '../../mongodb/connection';

async function getWardenLeaves({ email }) {
  const client = await clientPromise;
  const db = client.db('quickout');
  const warColl = db.collection('warden');
  const query = { email: { $regex: email } };
  const careTaker = await warColl.findOne(query);
  if (!careTaker) return false;
  const gender = careTaker.gender;
  const leaveColl = db.collection('leavse');
  return leaveColl
    .find({
      applyFor: { $regex: /warden/i },
      gender: (gender || '').toLowerCase(),
    })
    .toArray();
}

export { getWardenLeaves };
