import clientPromise from '../../mongodb/connection';

async function getStudentLeaves({ email }) {
  const client = await clientPromise;
  const db = client.db('quickout');
  const userCollection = db.collection('leavse');
  return userCollection.find({ email: email }).toArray();
}

export { getStudentLeaves };
