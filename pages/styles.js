import { createGlobalStyle } from 'styled-components';

export const QuickoutStyles = createGlobalStyle`
.bounce {
  height: 90px;
  overflow: hidden;
  position: relative;
  color: #333;
}

.bounce p {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  line-height: 80px;
  text-align: center;
  -moz-transform: translateX(50%);
  -webkit-transform: translateX(50%);
  transform: translateX(50%);
  -moz-animation: bouncing-text 5s linear infinite alternate;
  -webkit-animation: bouncing-text 5s linear infinite alternate;
  animation: bouncing-text 10s linear infinite alternate;
}
@-moz-keyframes bouncing-text {
  0% {
    -moz-transform: translateX(50%);
  }
  100% {
    -moz-transform: translateX(-50%);
  }
}

@-webkit-keyframes bouncing-text {
  0% {
    -webkit-transform: translateX(50%);
  }
  100% {
    -webkit-transform: translateX(-50%);
  }
}

@keyframes bouncing-text {
  0% {
    -moz-transform: translateX(50%);
    -webkit-transform: translateX(50%);
    transform: translateX(50%);
  }
  100% {
    -moz-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
}

.A {
    display:inline-block;
    /* position: relative;top:50px; */
    margin:30px;
    height:20px;
    width:15px;
    padding:80px;
    border-radius:10px;
    background-image:url('https://img.lovepik.com/element/45004/6050.png_300.png');
    background-size:185px; 
}
.B{
  display:inline-block;
    /* position: relative;left:100px;top:50px; */
    margin:30px;
    height:20px;
    width:15px;
    padding:80px;
    border-radius:8px;
    background-image:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPhHXzhvCz3PVn4JnxIEVA_qckIU4FkXRTXw&usqp=CAU');
    background-size:175px;
}
.C{display:inline-block;
    /* position: relative;left:130px;top:50px; */
    margin:30px;
    height:15px;
    width:15px;
    padding:80px;
    border-radius:10px;
    background-image:url("https://iqac.sgtuniversity.ac.in/wp-content/uploads/2017/09/women.png");
    background-size: 185px;
}
.D{display:inline-block;
    /* position: relative;left:150px;top:50px; */
    margin:30px;
    height:15px;
    width:15px;
    padding:80px;
    border-radius:10px;
    background-image:url("https://iqac.sgtuniversity.ac.in/wp-content/uploads/2017/09/Men.png");
    background-size: 175px;
}
.E{display:inline-block;
    /* position: relative;left:180px;top:50px; */
    margin:20px;
    height:15px;
    width:15px;
    padding:80px;
    border-radius:10px;
    background-image:url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQce2KfkJ0ZtmDZMkq8QvFVNIUVL7wYx6C1tA&usqp=CAU");
    background-size: 175px;
}
.center{
    background-size:500px;
    }

`;

export const LoginStyles = createGlobalStyle`
body{
  background-size:1400px;
   backface-visibility: visible;
    background-image:url('https://wallpapercave.com/wp/wp3448655.jpg');
}
.center {
  display:block;
    margin-left:500px;
    margin-bottom:50px;
    padding:10px;
    width:200px;
  }
`;
