// DOMs
const $date = document.querySelector('#clock .date');
const $time = document.querySelector('#clock .time');
const $comment = document.querySelector('#clock .comment');

let Today = new Date();

// FUNCTIONs
// date
const printDate = () => {
  const year = Today.getFullYear();
  const month = Today.getMonth() + 1;
  const date = Today.getDate();
  const dayNams = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const day = dayNams[Today.getDay()];

  // print date
  $date.textContent = `${year}.${month}.${date}.${day}`;
};

// comment
const printComment = hour => {
  // comments
  const [morning, afternoon, evening, night] = ['Good morning', 'Good afternoon', 'Good evening', 'Good night'];

  if (hour < 6) {
    $comment.textContent = night;
  } else if (hour < 12) {
    $comment.textContent = morning;
  } else if (hour < 18) {
    $comment.textContent = afternoon;
  } else {
    $comment.textContent = evening;
  }
};

// date, comment init
const renderInit = () => {
  printDate();
  printComment(Today.getHours());
};

window.onload = renderInit();

// clock
setInterval(() => {
  // time
  Today = new Date();
  let hour = Today.getHours();
  hour = hour < 10 ? `0${hour}` : hour;
  let minute = Today.getMinutes();
  minute = minute < 10 ? `0${minute}` : minute;
  let second = Today.getSeconds();
  second = second < 10 ? `0${second}` : second;
  const ampm = hour < 12 ? 'AM' : 'PM';
  // change comment
  const timePoints = ['06:00:00', '12:00:00', '18:00:00', '00:00:00'];

  // print time 24hour
  $time.textContent = `${hour}:${minute}:${second}`;

  // print comment
  timePoints.map(timePoint => (timePoint === $time.textContent ? printComment(hour) : false));
}, 1000);
