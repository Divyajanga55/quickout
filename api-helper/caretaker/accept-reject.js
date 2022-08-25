import { ObjectId } from 'mongodb';
import clientPromise from '../../mongodb/connection';

async function acceptOrReject({ email, id, status }) {
  const client = await clientPromise;
  const db = client.db('quickout');
  const careColl = db.collection('caretakers');
  const query = { email: { $regex: email } };
  const careTaker = await careColl.findOne(query);
  if (!careTaker) return false;

  const leaveColl = db.collection('leavse');
  return leaveColl.updateOne(
    { _id: ObjectId(id) },
    {
      $set: {
        accepted: status,
      },
    }
  );
}

export { acceptOrReject };
