import { useState } from 'react';
import StudentSignupOTP from './otp';
import StuSignUp from './signup';

function StudentSignupIn() {
  const [stuMail, setStuEmail] = useState('');
  return stuMail ? <StuSignUp stuMail={stuMail} /> : <StudentSignupOTP setStuEmail={setStuEmail} />;
}

export default StudentSignupIn;
