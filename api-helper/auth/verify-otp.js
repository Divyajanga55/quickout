import clientPromise from '../../mongodb/connection';

async function getOtpFromDB({ email }) {
  const conn = await clientPromise;
  const db = conn.db('quickout');
  const otpColl = db.collection('otp');
  const otpDoc = await otpColl.findOne({ email: email });
  if(!otpDoc) return false;
  return otpDoc?.otp;
}

export { getOtpFromDB };