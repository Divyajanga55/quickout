import Head from 'next/head';
import { StudentSignupSt } from './styles';

function StudentSignup() {
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
                <div class="input-container">
                  <i class="fa fa-envelope icon"></i>
                  <input
                    type="email"
                    placeholder="enter email"
                    name="email"
                    id="text1"
                    style={{ width: '300px' }}
                  />
                  <a href="#otpsent">Generate OTP</a>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="input-container">
                  <i class="fa fa-plus icon"></i>
                  <input
                    type="number"
                    placeholder="OTP"
                    name="OTP"
                    id="text2"
                    style={{ width: '300px' }}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <button
                  type="button"
                  onclick="document.location='javascript:validate()'"
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

export default StudentSignup;
