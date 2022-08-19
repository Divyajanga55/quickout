import { useEffect, useState } from 'react';
import { LoginStyles } from '../styles';
import { postReqAsync } from '../../helpers/api-helpers';

function StudentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const handleLogin = () => {
    if (!email) {
      return setErr('Enter email');
    }
    if (!password) {
      return setErr('Enter password');
    }
    setLoading(true);
    postReqAsync('/api/auth/signin', { email, password })
      .then((json) => {
        if (json.message === 'Success') {
          setErr('Login successfull');
          setTimeout(() => {
            window.open('/student', '_self');
          }, 500);
        } else {
          setLoading(false);
          setErr(json.message || 'something went wrong');
        }
      })
      .catch((err) => {
        setLoading(false);
        setErr('something went wrong');
      });
  };
  useEffect(() => {
    setErr('');
  }, []);
  return (
    <>
      <LoginStyles />
      <div>
        <img
          src="https://cdn2.iconfinder.com/data/icons/audio-16/96/user_avatar_profile_login_button_account_member-512.png"
          alt="login"
          className="center"
        />
        <p style={{ textAlign: 'center', fontSize: '3rem' }}>Student Login</p>
        <table>
          <tbody>
            <tr>
              <td
                style={{
                  fontSize: '40px',
                  position: 'relative',
                  left: '530px',
                }}
              >
                Username
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="email"
                  style={{
                    position: 'relative',
                    left: '530px',
                    height: '30px',
                    width: '190px',
                    textAlign: 'center',
                    fontSize: '20px',
                  }}
                  placeholder="Enter your name"
                  name="username"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td
                style={{
                  fontSize: '40px',
                  position: 'relative',
                  left: '530px',
                }}
              >
                Password
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="password"
                  style={{
                    position: 'relative',
                    left: '530px',
                    height: '30px',
                    width: '190px',
                    textAlign: 'center',
                    fontSize: '20px',
                  }}
                  name="pwd"
                  onChange={(event) => setPassword(event.target.value)}
                  id="pwd"
                />
                <a
                  // href="sforgot.html"
                  style={{
                    position: 'relative',
                    left: '560px',
                    fontSize: '20px',
                  }}
                >
                  forgot password?
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <p style={{ textAlign: 'center' }}>{err}</p>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="reset"
                  style={{
                    position: 'relative',
                    left: '530px',
                    position: 'relative',
                    top: '20px',
                    fontSize: '20px',
                  }}
                />
              </td>
              <td colSpan="2">
                <button
                  type="button"
                  onClick={handleLogin}
                  disabled={loading}
                  style={{
                    position: 'relative',
                    top: '20px',
                    right: '80px',
                    left: '450px',
                    fontSize: '20px',
                  }}
                >
                  Login
                </button>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  position: 'relative',
                  left: '530px',
                  fontSize: '18px',
                  position: 'relative',
                  top: '30px',
                }}
              >
                If you are not registered ?{' '}
                <a href="/signup/student">Register </a> here
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StudentLogin;
