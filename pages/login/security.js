import { LoginStyles } from '../styles';

function StudentLogin() {
  return (
    <>
      <LoginStyles />
      <div>
        <img
          src="https://cdn2.iconfinder.com/data/icons/audio-16/96/user_avatar_profile_login_button_account_member-512.png"
          alt="login"
          className="center"
        />
        <p style={{ textAlign: 'center', fontSize: '3rem' }}>Security Login</p>
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
                  id="pwd"
                />
                <a
                  href="sforgot.html"
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
                  onClick={() => (document.location = 'sd.html')}
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
                <a href="registration1.html">Register </a> here
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StudentLogin;
