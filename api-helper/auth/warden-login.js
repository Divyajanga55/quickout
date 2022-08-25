import clientPromise from '../../mongodb/connection';

// req.cookies

async function validateEmailPassWarden({ email }) {
  const client = await clientPromise;
  const db = client.db('quickout');
  const userCollec = db.collection('warden');
  const query = { email: { $regex: email } };
  return userCollec.findOne(query);
}

export { validateEmailPassWarden };
