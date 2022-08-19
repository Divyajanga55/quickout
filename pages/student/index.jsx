import { getReqAsync } from '../../helpers/api-helpers';

function StudenetDashboard() {
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
  return (
    <div>
      <p> Welcome to Student Dashboard</p>
      <button onClick={onLogout}>Logout</button>
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
