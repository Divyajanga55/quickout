import { useState } from 'react';
import { getReqAsync, postReqAsync } from '../../helpers/api-helpers';

function StudenetDashboard() {
  const [name, setName] = useState('');
  const [stuId, setStuId] = useState('');
  const [gender, setGender] = useState('Male');
  const [year, setYear] = useState('P1');
  const [cls, setCls] = useState('');
  const [dorm, setDorm] = useState('');
  const [outpassType, setOutpassType] = useState('Emergency');
  const [applyFor, setApplyFor] = useState('Caretaker');
  const [reason, setReason] = useState('');
  const [date, setDate] = useState('');
  const [stuMobile, setStuMobile] = useState('');
  const [parMobile, setParMobile] = useState('');
  const [days, setDays] = useState('');
  const [err, setErr] = useState('');
  const onLogout = () => {
    getReqAsync('/api/auth/signout')
      .then((json) => {
        if (json.status === true) {
          window.open('/login/student', '_self');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onSubmit = () => {
    if (!name) {
      return setErr('Enter name');
    }
    // all validations
    const data = {
      name: name,
      id: stuId,
      gender: gender,
      year: year,
      className: cls,
      dorm: dorm,
      outpassType: outpassType,
      reason: reason,
      applyFor: applyFor,
      date: date,
      stuMobile: stuMobile,
      prtMobile: parMobile,
      numDays: days,
    };
    postReqAsync('/api/student/create-leave', data)
      .then((json) => {
        console.log('json-->', json);
        if (json.message == 'Success') {
          setErr('Leave saved succesfully');
          document.getElementById('reset-btn').click();
        } else {
          setErr('Something went wrong');
        }
      })
      .catch((err) => {
        setErr('Something went wrong');
      });
  };
  return (
    <div
      style={{
        backgroundSize: '100vw 100vh',
        backgroundImage: `url('data:image/jpeg;base64,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')`,
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          color: 'chartreuse',
          fontSize: '50px',
          margin: 0,
          padding: '20px',
        }}
      >
        Welcome to Student Dashboard <button onClick={onLogout}>Logout</button>
        <br />
        APPLY FOR OUTPASS
        <br />
      </h1>
      <form>
        <table align="center">
          <tbody>
            <tr>
              <td style={{ fontSize: '30px', color: 'antiquewhite' }}> Name</td>
              <td>
                <input
                  type="email"
                  name="text"
                  id="text"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  style={{ height: '30px', marginBottom: '20px' }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: '30px', color: 'antiquewhite' }}>Id</td>
              <td>
                <input
                  type="text"
                  name="text"
                  id="text"
                  onChange={(event) => {
                    setStuId(event.target.value);
                  }}
                  style={{ height: '30px', marginBottom: '20px' }}
                />
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
                  onChange={(event) => {
                    setGender(event.target.value);
                  }}
                  style={{
                    width: '185px',
                    height: '30px',
                    marginBottom: '20px',
                  }}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
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
                  onChange={(event) => {
                    setYear(event.target.value);
                  }}
                  style={{
                    width: '185px',
                    height: '30px',
                    marginBottom: '20px',
                  }}
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
              <td style={{ fontSize: '30px', color: 'antiquewhite' }}>Class</td>
              <td>
                <input
                  type="text"
                  name="text"
                  onChange={(event) => {
                    setCls(event.target.value);
                  }}
                  id="text"
                  style={{ height: '30px', marginBottom: '20px' }}
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
                  onChange={(event) => {
                    setDorm(event.target.value);
                  }}
                  name="text"
                  id="text"
                  style={{ height: '30px', marginBottom: '20px' }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: '30px', color: 'antiquewhite' }}>
                Type Of Outpass
              </td>
              <td>
                {' '}
                <select
                  name="years"
                  id="years"
                  onChange={(event) => {
                    setOutpassType(event.target.value);
                  }}
                  style={{
                    width: '185px',
                    height: '30px',
                    marginBottom: '20px',
                  }}
                >
                  <option value="emergency">Emergency</option>
                  <option value="Health">Health Problem</option>
                  <option value="Normal">Normal</option>
                </select>
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: '30px', color: 'antiquewhite' }}>
                Apply for
              </td>
              <td>
                {' '}
                <select
                  name="years"
                  id="years"
                  onChange={(event) => {
                    setApplyFor(event.target.value);
                  }}
                  style={{
                    width: '185px',
                    height: '30px',
                    marginBottom: '20px',
                  }}
                >
                  <option value="Caretaker">Caretaker</option>
                  <option value="warden">Warden</option>
                  <option value="Dean">Dean</option>
                </select>
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: '30px', color: 'antiquewhite' }}>
                Reason
              </td>
              <td>
                <input
                  type="text"
                  name="text"
                  onChange={(event) => {
                    setReason(event.target.value);
                  }}
                  id="text"
                  style={{ height: '30px', marginBottom: '20px' }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: '30px', color: 'antiquewhite' }}>Date</td>
              <td>
                <input
                  type="date"
                  name="date"
                  onChange={(event) => {
                    setDate(event.target.value);
                  }}
                  id="date"
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
                  id="Number"
                  onChange={(event) => {
                    setStuMobile(event.target.value);
                  }}
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
                  id="Number"
                  onChange={(event) => {
                    setParMobile(event.target.value);
                  }}
                  style={{ height: '30px', marginBottom: '20px' }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: '30px', color: 'antiquewhite' }}>
                How Many Days
              </td>
              <td>
                <input
                  type="number"
                  id="number"
                  onChange={(event) => {
                    setDays(event.target.value);
                  }}
                  // style="height:30px ;margin-bottom:20px;"
                  style={{ height: '30px', marginBottom: '20px' }}
                />
              </td>
            </tr>
            <tr>
              <td>{err}</td>
            </tr>
            <tr>
              {/* <td>
                <button
                  type="button"
                  style={{
                    fontSize: '20px',
                    position: 'relative',
                    top: '50px',
                  }}
                  onclick="document.location='sd.html'"
                >
                  Back
                </button>
              </td> */}
              <td>
                <input
                  type="reset"
                  id="reset-btn"
                  style={{
                    fontSize: '20px',
                    position: 'relative',
                    top: '50px',
                  }}
                />
              </td>
              <td colspan="2">
                <button
                  type="button"
                  style={{
                    fontSize: '20px',
                    position: 'relative',
                    top: '50px',
                  }}
                  onClick={onSubmit}
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

// export const
export async function getServerSideProps(context) {
  const token = context.req.cookies['QUICKOUT-TOKEN'];
  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: `/login/student`,
      },
    };
  }
  return {
    props: {},
  };
}

export default StudenetDashboard;
