// import './ind-styles.css';
import { QuickoutStyles } from './styles';

export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: `url(
          'https://i.pinimg.com/236x/3a/a9/f6/3aa9f6586dbbffdd8ed87920f7c8b4db.jpg'
        )`,
      }}
      className="center"
    >
      <QuickoutStyles />
      <div className="bounce">
        <p
          style={{
            textAlign: 'center',
            fontSize: '70px',
            fontWeight: 'bold',
            color: 'greenyellow',
          }}
        >
          WELCOME TO QUICKOUT
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          marginTop: '100px',
        }}
      >
        <a href="/login/student">
          <div className="A"></div>
          <span
            style={{
              color: 'blue',
              fontSize: '20px',
              fontWeight: 'bold',
              display: 'block',
              textAlign: 'center',
              // position: 'relative',
              // top: '50px',
            }}
          >
            STUDENT PORTAL
          </span>
        </a>
        <a href="/login/caretaker">
          <div className="B"></div>
          <span
            style={{
              color: 'blue',
              fontSize: '20px',
              fontWeight: 'bold',
              display: 'block',
              textAlign: 'center',
              // position: 'relative',
              // top: '50px',
            }}
          >
            CARETAKER PORTAL
          </span>
        </a>
        <a href="/login/warden">
          <div className="C"></div>
          <span
            style={{
              color: 'blue',
              fontSize: '20px',
              fontWeight: 'bold',
              display: 'block',
              textAlign: 'center',
              // position: 'relative',
              // top: '50px',
            }}
          >
            WARDEN PORTAL
          </span>
        </a>
        <a href="/login/welfare">
          <div className="D"></div>
          <span
            style={{
              color: 'blue',
              fontSize: '20px',
              fontWeight: 'bold',
              display: 'block',
              textAlign: 'center',
              // position: 'relative',
              // top: '50px',
            }}
          >
            WELFARE DEAN PORTAL
          </span>
        </a>
        <a href="/login/security">
          <div className="E"></div>
          <span
            style={{
              color: 'blue',
              fontSize: '20px',
              fontWeight: 'bold',
              display: 'block',
              textAlign: 'center',
              // position: 'relative',
              // top: '50px',
            }}
          >
            SECURITY PORTAL
          </span>
        </a>
      </div>
      {/* <p>
        <span
          style={{
            color: 'blue',
            fontSize: '20px',
            fontWeight: 'bold',
            position: 'relative',
            top: '50px',
          }}
        >
          STUDENT PORTAL
        </span>
        <span
          style={{
            color: 'blue',
            fontSize: '20px',
            fontWeight: 'bold',
            position: 'relative',
            top: '50px',
            left: '150px',
          }}
        >
          CARETAKER PORTAL
        </span>
        <span
          style={{
            color: 'blue',
            fontSize: '20px',
            fontWeight: 'bold',
            position: 'relative',
            top: '50px',
            left: '200px',
          }}
        >
          WARDEN PORTAL
        </span>
        <span
          style={{
            color: 'blue',
            fontSize: '20px',
            fontWeight: 'bold',
            position: 'relative',
            top: '50px',
            left: '260px',
          }}
        >
          WELFARE DEAN PORTAL
        </span>
        <span
          style={{
            color: 'blue',
            fontSize: '20px',
            fontWeight: 'bold',
            position: 'relative',
            top: '50px',
            left: '300px',
          }}
        >
          SECURITY PORTAL
        </span>
      </p> */}
    </div>
  );
}
