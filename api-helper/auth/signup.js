import clientPromise from '../../mongodb/connection';

// req.cookies

async function saveProfile({
  email,
  name,
  year,
  gender,
  cls,
  dorm,
  stuMobile,
  parMobile,
  password,
  confPassword,
}) {
  const client = await clientPromise;
  const db = client.db('quickout');
  const userCollec = db.collection('users');
  const query = { email: { $regex: email } };
  await userCollec.deleteMany(query);
  // const studentType = 'student';

  return userCollec.insertOne({
    email,
    name,
    year,
    gender,
    cls,
    dorm,
    stuMobile,
    parMobile,
    password,
    confPassword,
  });
}

export { saveProfile };
