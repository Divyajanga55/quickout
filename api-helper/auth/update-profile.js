import clientPromise from '../../mongodb/connection';

// req.cookies

async function updateProfile({
  email,
  mobile,
  cls,
  year,
  paName,
  paMobile,
  address,
}) {
  const client = await clientPromise;
  const db = client.db('quickout');
  const updateDetails = filterObject({
    mobileNumber: mobile,
    class: cls,
    year,
    parentName: paName,
    parentMobile: paMobile,
    address,
    profileUpdated: true,
  });
  
  const userCollec = db.collection('users');
  const query = { email: { $regex: email } };
  return userCollec.updateOne(query, {
    $set: updateDetails,
  });
}

const filterObject = (obj = {}) => {
  const newObj = {};
  for (let key in obj) {
    if (obj[key]) newObj[key] = obj[key];
  }
  return newObj;
};

export { updateProfile };