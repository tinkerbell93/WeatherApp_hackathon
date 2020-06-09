// state
let customStyles = [];

// DOMs
const $main = document.querySelector('main');
const $date = document.querySelector('#clock .date');
const $time = document.querySelector('#clock .time');
const $comment = document.querySelector('#clock .comment');
const $btnHoursView = document.querySelector('.hoursView_outerToggle');
const $btnSettingOpen = document.querySelector('.btn_settingOpen');
const $setting = document.getElementById('setting');
const $font = document.getElementById('font');
const $fontColor = document.getElementById('font_color');
const $bgc = document.querySelector('.container_bgc');
const $state = document.querySelector('.item_state');
const $btnSettingClose = document.querySelector('.btn_settingClose');

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
  timePoints.forEach(timePoint => {
    if (timePoint === $time.textContent) printComment(hour);
  });


  if ($btnHoursView.classList.contains('isAct')) {
    hour = hour % 12 || 12;
    hour = hour < 10 ? `0${hour}` : hour;

    $time.textContent = `${ampm} ${hour}:${minute}:${second}`;
  }
}, 100);


// 클래스 토글
const classToggle = (element, className) => {
  element.classList.toggle(className);
};

// 클래스 추가
const classAdd = (element, className) => {
  element.classList.add(className);
};

// 클래스 제거
const classRemove = (element, className) => {
  element.classList.remove(className);
};

// 요소 숨김
const hide = element => {
  element.style.visibility = 'hidden';
};

// 요소 드러냄
const show = element => {
  element.style.visibility = 'visible';
};

// 선택된 요소만 클래스 추가
const multiClassToggle = (element, className, target) => {
  [...element.children].forEach($item => $item.classList.toggle(className, $item === target));
};


// 스타일 적용
const setStyle = () => {
  customStyles.forEach(style => {
    $main.style[style.name] = style.value;
  });
};

// 스타일 상태정보 추가
const addState = (name, value) => {
  if (customStyles.every(style => style.name !== name)) {
    customStyles = [{ name, value }, ...customStyles];
  } else {
    customStyles = customStyles.map(style => style.name === name ? {...style, value: value } : style );
  }
};

// 초기값 설정
const setInitStyle = () => {
  if (!JSON.parse(localStorage.getItem('customStyles'))) return;
  const data = JSON.parse(localStorage.getItem('customStyles'));
  const font = data.filter(style => style.name === 'fontFamily');
  const color = data.filter(style => style.name === 'color');
  const viewClass = data.filter(style => style.name === 'viewClass');

  // 폰트 초기설정
  if (font.length) {
    const $selectedFont = document.querySelector(`[value = "${font[0].value}"]`);
    $selectedFont.setAttribute('selected', '');
  }
  // 폰트 색 초기설정
  if (color.length) $fontColor.setAttribute('value', `${color[0].value}`);
  // hours view 설정
  if (viewClass[0].value === 'isAct') classAdd($btnHoursView, 'isAct');
};

// 초기값 해제
const clearInitStyle = () => {
  if (!JSON.parse(localStorage.getItem('customStyles'))) return;
  const data = JSON.parse(localStorage.getItem('customStyles'));
  const font = data.filter(style => style.name === 'fontFamily');
  const color = data.filter(style => style.name === 'color');
  const viewClass = data.filter(style => style.name === 'viewClass');

  // 폰트 초기값 해제
  if (font.length) {
    const $selectedFont = document.querySelector(`[value = "${font[0].value}"]`);
    $selectedFont.removeAttribute('selected');
  }
  // 폰트 색 초기값 해제
  if (color.length) $fontColor.setAttribute('value', '');
  // hours view 초기값 해제
  if (viewClass[0].value === 'isAct') classRemove($btnHoursView, 'isAct');
};

// 배경색 랜덤추출
const getRandomBgc = () => {
  const str = 'abcdef0123456789';
  let random = '';

  for (let i = 0; i < 6; i++) {
    const count = Math.floor(Math.random() * str.length);

    random += str[count];
  }
  return random;
};

// 로컬스토리지에 저장되어있는 스타일 가져오기
const loadStyle = () => {
  customStyles = JSON.parse(localStorage.getItem('customStyles')) || [];

  if (!customStyles.filter(style => style.name === 'backgroundColor').length) $main.style.backgroundColor = `#${getRandomBgc()}`;

  setInitStyle();
  setStyle();
};

// 로컬스토리지에 커스텀 스타일 저장
const saveStyle = () => {
  if (!customStyles.length) return;
  localStorage.setItem('customStyles', JSON.stringify(customStyles));
};

// 로컬스토리지 및 현 스타일 제거
const clearStyle = () => {
  clearInitStyle();
  $main.style = '';
  localStorage.clear();
};


// eventBinding
// 윈도우 로딩이벤트
window.addEventListener('load', () => {
  renderInit();
  loadStyle();
});

// setting 메뉴 열기
$btnSettingOpen.onclick = () => {
  classToggle($setting, 'active');
  hide($btnSettingOpen);
};

// hours view 클래스 추가 & 제거
// 1. 마우스 이벤트
$btnHoursView.onclick = () => {
  classToggle($btnHoursView, 'isAct');
  addState('viewClass', `${$btnHoursView.classList[$btnHoursView.classList.length - 1]}`);
};
// 2. 키보드 이벤트
$btnHoursView.onkeyup = ({ keyCode }) => {
  if (keyCode === 39) classAdd($btnHoursView, 'isAct');
  else if (keyCode === 37) classRemove($btnHoursView, 'isAct');
};

// 폰트 설정
$font.onchange = ({ target }) => {
  addState($font.name, target.value);
  setStyle();
};

// 폰트 색 설정
$fontColor.oninput = ({ target }) => {
  addState($fontColor.name, target.value);
  setStyle();
};

// 배경 색 설정
// 1. 마우스 이벤트
$bgc.onchange = ({ target }) => {
  const bgColor = window.getComputedStyle(target).backgroundColor;

  multiClassToggle($bgc, 'select', target.previousElementSibling);
  addState(target.name, bgColor);
  setStyle();
};
// 2. 키보드 이벤트
$bgc.onkeyup = ({ keyCode, target }) => {
  if (keyCode !== 13) return;

  const bgColor = window.getComputedStyle(target).backgroundColor;
  multiClassToggle($bgc, 'select', target);
  addState(target.nextElementSibling.name, bgColor);
  setStyle();
};

// 커스텀 스타일 저장 & 해제
$state.onclick = ({ target }) => {
  if (target.matches('.btn_settingSave')) saveStyle();
  else if (target.matches('.btn_settingClear')) clearStyle();
};

// setting 메뉴 내부 포커스 제어
$btnSettingClose.onkeydown = e => {
  if (e.keyCode !== 9) return;

  $btnHoursView.focus();
  e.preventDefault();
};

// setting 메뉴 닫기
$btnSettingClose.onclick = () => {
  classToggle($setting, 'active');
  show($btnSettingOpen);
  $btnSettingOpen.focus();
};