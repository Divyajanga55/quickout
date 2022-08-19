import Head from 'next/head';
import { useEffect, useState } from 'react';
import { StudentSignupSt } from '../styles';
import { validateEmail } from '../../../helpers/helpers';
import { postReqAsync } from '../../../helpers/api-helpers';

function StudentSignupOTP({ setStuEmail }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpSent, setotpSent] = useState(false);
  const [err, setErr] = useState('');
  useEffect(() => {
    setotpSent(false);
    setErr('');
  }, [email]);
  useEffect(() => {
    setErr('');
  }, [otp]);
  const sendotp = () => {
    const isInvalid = validateEmail(email);
    if (isInvalid) {
      return setErr(isInvalid);
    }
    setLoading(true);
    postReqAsync('/api/auth/send-otp', { email: email })
      .then((json) => {
        if (json.status === true) {
          setErr('Otp sent to your email');
          setotpSent(true);
        } else {
          setErr('something went wrong try again');
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setErr('something went wrong try again');
      });
  };
  const login = () => {
    if (!otpSent) {
      return setErr('Generte otp first');
    }
    if (otp.length !== 6) {
      return setErr('Enter valid otp');
    }
    setLoading(true);
    postReqAsync('/api/auth/verify-otp', { email: email, otp: otp })
      .then((json) => {
        console.log('came-->', json);
        if (json.status === true) {
          setErr('OTP verified');
          setTimeout(() => {
            setStuEmail(email);
          }, 500);
        } else {
          setErr(json.message || 'something went wrong try again');
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log('err-->', err);
        setLoading(false);
        setErr('something went wrong try again');
      });
  };
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <StudentSignupSt />
      <div
        style={{
          backgroundImage: `url('https://wallpaperaccess.com/full/1900913.jpg')`,
          backgroundSize: 'cover',
          minHeight: '100vh',
        }}
      >
        <h2
          style={{
            fontSize: '50px',
            textAlign: 'center',
            margin: 0,
            padding: '2rem',
          }}
        >
          REGISTERATION
        </h2>
        <table align="center">
          <tbody>
            <tr>
              <td>
                <div className="input-container">
                  <i className="fa fa-envelope icon"></i>
                  <input
                    type="email"
                    placeholder="enter email"
                    name="email"
                    id="text1"
                    onChange={(evnt) => setEmail(evnt.target.value)}
                    style={{ width: '300px' }}
                  />
                  <button disabled={loading} onClick={sendotp}>
                    Generate OTP
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="input-container">
                  <i className="fa fa-plus icon"></i>
                  <input
                    type="number"
                    placeholder="OTP"
                    name="OTP"
                    id="text2"
                    onChange={(evnt) => setOtp(evnt.target.value)}
                    style={{ width: '300px' }}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <p>{err}</p>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button
                  type="button"
                  disabled={loading}
                  onClick={login}
                  //   onclick="document.location='javascript:validate()'"
                  style={{
                    position: 'relative',
                    top: '20px',
                    right: '80px',
                    fontSize: '20px',
                  }}
                >
                  Login
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StudentSignupOTP;
