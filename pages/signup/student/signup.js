import { useEffect, useState } from 'react';
import { StuStySign } from './sign-styles';
import { postReqAsync } from '../../../helpers/api-helpers';

function StuSignUp({ stuMail }) {
  const [name, setName] = useState('');
  const [year, setYear] = useState('P1');
  const [gender, setGender] = useState('Male');
  const [cls, setCls] = useState('');
  const [dorm, setDorm] = useState('');
  const [stuMobile, setStuMobile] = useState('');
  const [parMobile, setParMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const onSave = () => {
    if (!name) {
      return setErr('Enter name');
    }
    if (!year) {
      return setErr('Enter year');
    }
    if (!gender) {
      return setErr('Enter gender');
    }
    if (!cls) {
      return setErr('Enter Class');
    }
    if (!dorm) {
      return setErr('Enter Dorm');
    }
    if (!stuMobile) {
      return setErr('Enter student mobile number');
    }
    if (!parMobile) {
      return setErr('Enter parent mobile number');
    }
    if (!password) {
      return setErr('Enter password');
    }
    if (password !== confPassword) {
      return setErr('Password mismatch');
    }
    const details = {
      name,
      year,
      gender,
      cls,
      dorm,
      stuMobile,
      parMobile,
      password,
      confPassword,
      email: stuMail,
    };
    // console.log('details-->', details);
    setLoading(true);
    postReqAsync('/api/auth/signup', details)
      .then((json) => {
        console.log('res-->', json);
        if (json.message == 'Success') {
          setErr('Profile created, please login now.');
          window.open('/login/student', '_self');
        } else {
          setErr('Something went wrong');
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setErr('Something went wrong');
        console.log('err-->', err);
      });
  };
  useEffect(() => {
    setErr('');
  }, [
    name,
    year,
    gender,
    cls,
    dorm,
    stuMobile,
    parMobile,
    password,
    confPassword,
  ]);
  return (
    <div>
      <StuStySign />
      <h1
        style={{ textAlign: 'center', color: 'lightgreen', fontSize: '50px' }}
      >
        REGISTRATION
      </h1>
      <form>
        <table align="center">
          <tbody>
            <tr>
              <td style={{ fontSize: '30px', color: 'antiquewhite' }}>Name</td>
              <td>
                <input
                  type="text"
                  name="text"
                  id="text"
                  onChange={(event) => setName(event.target.value)}
                  style={{ height: '30px', marginBottom: '20px' }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: '30px', color: 'antiquewhite' }}>
                Select Year
              </td>
              <td>
                {' '}
                <select
                  name="years"
                  id="years"
                  style={{
                    width: '185px',
                    height: '30px',
                    marginBottom: '20px',
                  }}
                  onChange={(event) => setYear(event.target.value)}
                >
                  <option value="P1">P1</option>
                  <option value="P2">P2</option>
                  <option value="E1">E1</option>
                  <option value="E2">E2</option>
                  <option value="E3">E3</option>
                  <option value="E4">E4</option>
                </select>
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: '30px', color: 'antiquewhite' }}>
                Select Gender
              </td>
              <td>
                {' '}
                <select
                  name="years"
                  id="years"
                  style={{
                    width: '185px',
                    height: '30px',
                    marginBottom: '20px',
                  }}
                  onChange={(event) => setGender(event.target.value)}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: '30px', color: 'antiquewhite' }}>Class</td>
              <td>
                <input
                  type="text"
                  name="text"
                  id="text"
                  style={{ height: '30px', marginBottom: '20px' }}
                  onChange={(event) => setCls(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: '30px', color: 'antiquewhite' }}>
                Dorm No
              </td>
              <td>
                <input
                  type="text"
                  name="text"
                  id="text"
                  onChange={(event) => setDorm(event.target.value)}
                  style={{ height: '30px', marginBottom: '20px' }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: '30px', color: 'antiquewhite' }}>
                Student Mobile Number
              </td>
              <td>
                <input
                  type="text"
                  name="number"
                  onChange={(event) => setStuMobile(event.target.value)}
                  id="Number"
                  style={{ height: '30px', marginBottom: '20px' }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: '30px', color: 'antiquewhite' }}>
                Parent Mobile Number
              </td>
              <td>
                <input
                  type="text"
                  name="number"
                  onChange={(event) => setParMobile(event.target.value)}
                  id="Number"
                  style={{ height: '30px', marginBottom: '20px' }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: '30px', color: 'antiquewhite' }}>
                Set Password
              </td>
              <td>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={(event) => setPassword(event.target.value)}
                  style={{ height: '30px', marginBottom: '20px' }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: '30px', color: 'antiquewhite' }}>
                Confirm Password
              </td>
              <td>
                <input
                  type="password"
                  onChange={(event) => setConfPassword(event.target.value)}
                  name="confirm password"
                  id="password"
                  style={{ height: '30px', marginBottom: '20px' }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="reset"
                  style={{
                    fontSize: '20px',
                    position: 'relative',
                    top: '50px',
                  }}
                />
              </td>
              <td>
                <p style={{ color: 'red' }}>{err}</p>
              </td>
              <td colSpan="2">
                <button
                  type="button"
                  style={{
                    fontSize: '20px',
                    position: 'relative',
                    top: '50px',
                  }}
                  disabled={loading}
                  onClick={onSave}
                  //   onclick="document.location='regcmp.html'"
                >
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default StuSignUp;
