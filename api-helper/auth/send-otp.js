import clientPromise from '../../mongodb/connection';

async function saveOtpOnDB({ email, otp }) {
  const conn = await clientPromise; //  come from mongodb 
  const db = conn.db('quickout'); // select db quickout
  const otpColl = db.collection('otp');       
  await otpColl.deleteMany({ email: email });
  const savedOtp = await otpColl.insertOne({ email: email, otp: otp });
  return savedOtp;
}

export { saveOtpOnDB };
