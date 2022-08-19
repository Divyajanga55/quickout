import clientPromise from '../../mongodb/connection';

// req.cookies

async function validateEmailPass({ email }) {
  const client = await clientPromise;
  const db = client.db('quickout');
  const userCollec = db.collection('users');
  const query = { email: { $regex: email } };
  return userCollec.findOne(query);
}

export { validateEmailPass };
