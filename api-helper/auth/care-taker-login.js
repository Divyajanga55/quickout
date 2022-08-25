import clientPromise from '../../mongodb/connection';

// req.cookies

async function validateEmailPassCareTaker({ email }) {
  const client = await clientPromise;
  const db = client.db('quickout');
  const userCollec = db.collection('caretakers');
  const query = { email: { $regex: email } };
  return userCollec.findOne(query);
}

export { validateEmailPassCareTaker };
