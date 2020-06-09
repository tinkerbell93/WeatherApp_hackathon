<<<<<<< HEAD
export const obj = {
  time: 100
};
export function foo() {
  const x = 1;
  console.log(x);
  
}
=======
// DOMs
const $date = document.querySelector('#clock .date');
const $time = document.querySelector('#clock .time');
const $comment = document.querySelector('#clock .comment');

// 날짜
let Today = new Date();
const year = Today.getFullYear();
const month = Today.getMonth() + 1;
const date = Today.getDate();
const dayNams = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const day = dayNams[Today.getDay()];

// 날짜 출력
$date.textContent = `${year}.${month}.${date}.${day}`;

// 시계
setInterval(() => {
  // 시간
  Today = new Date();
  let hour = Today.getHours();
  hour = hour < 10 ? `0${hour}` : hour;
  let minute = Today.getMinutes();
  minute = minute < 10 ? `0${minute}` : minute;
  let second = Today.getSeconds();
  second = second < 10 ? `0${second}` : second;
  let ampm = hour < 12 ? 'AM' : 'PM';

  // 코멘트
  const [morning, afternoon, evening, night] = ['Good morning', 'Good afternoon', 'Good evening', 'Good night'];

  // 시간 24시 출력
  $time.textContent = `${hour}:${minute}:${second}`;

  // 코멘트 출력
  if (hour < 6) {
    $comment.textContent = night;
  } else if (hour < 12) {
    $comment.textContent = morning;
  } else if (hour < 18) {
    $comment.textContent = afternoon;
  } else {
    $comment.textContent = evening;
  };

}, 1000);







>>>>>>> 3631fab3e55f4423d3d8d48d8b808c9b8499ed63
