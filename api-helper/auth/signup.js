import clientPromise from '../../mongodb/connection';

// req.cookies

async function saveProfile({ email, name, userType, password, id }) {
  const client = await clientPromise;
  const db = client.db('quickout');
  const userCollec = db.collection('users');
  const query = { email: { $regex: email } };
  await userCollec.deleteMany(query);
  const studentType = 'student';

  return userCollec.insertOne({
    email,
    name,
    userType,
    password: password,
    profileUpdated: false,
    verified: studentType === userType,
    id,
  });
}

export { saveProfile };