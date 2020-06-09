//state
let customStyles = [];
let viewClass;
let bgCorloClass;

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
const $bgc = document.querySelector('.container_bgc')
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
  timePoints.map(timePoint => (timePoint === $time.textContent ? printComment(hour) : false));

  if($btnHoursView.classList.contains('isAct')) {
    hour = hour % 12 || 12;
    hour = hour < 10 ? `0${hour}` : hour;
    
    $time.textContent = `${ampm} ${hour}:${minute}:${second}`;
  }
}, 1000);


// 스타일 적용
const setStyle = () => {
  customStyles.forEach(style => {
    $main.style[style.name] = style.value;
  })
};

// 스타일 상태정보 추가
const addState = (name, value) => {
  if (customStyles.every(style => style.name !== name)) {
    customStyles = [{ name: name, value: value}, ...customStyles];
  } else {
    customStyles = customStyles.map(style => style.name === name ? {...style, name: name, value: value } : style );
  }
};

// 초기값 설정
const setInitStyle = () => {
  const data = JSON.parse(localStorage.getItem('customStyles'))

  const font = data.filter(style => style.name === 'fontFamily')[0].value;
  const $selectedFont = document.querySelector(`[value = "${font}"]`);
  const color = data.filter(style => style.name === 'color')[0].value;


  $selectedFont.setAttribute('selected', '');
  $fontColor.setAttribute('value', `${color}`);
  classToggle()
}


// 리페인팅
const paint = (name, value) => {
  addState(name, value);
  setStyle();
}

// 로컬스토리지에 저장되어있는 스타일 가져오기
const getStyle = () => {
  const data = JSON.parse(localStorage.getItem('customStyles'))

  if (!data) return;

  customStyles = data;
 
  setInitStyle();
  paint();
};

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
}

// 배경색 랜덤추출
// const getRandomBgc = () => {
//   const str = 'abcdef0123456789';
//   let random = '';

//   for(let i = 0; i < 6; i++) {
//     let count = Math.floor(Math.random() * str.length);
//     random += str[count];
//   }

//   return random;
// }

// 로컬스토리지에 커스텀 스타일 저장
const saveStyle = () => {
  localStorage.setItem('customStyles', JSON.stringify(customStyles));
}

// 로컬스토리지 및 현 스타일 제거
const clearStyle = () => {
  const data = JSON.parse(localStorage.getItem('customStyles'))
  if (!data) return;

  const font = data.filter(style => style.name === 'fontFamily')[0].value;
  const $selectedFont = document.querySelector(`[value = "${font}"]`);

  $selectedFont.removeAttribute('selected');
  $fontColor.setAttribute('value', ``);

  localStorage.clear();
  $main.style = '';
}

// eventBinding
window.addEventListener('load', () => {
  renderInit();
  getStyle();
});

// setting 메뉴 열기
$btnSettingOpen.onclick = e => {
  classToggle($setting, 'active');
  hide($btnSettingOpen);
};

// hours view 클래스 추가 & 제거
// 1. 마우스 이벤트
$btnHoursView.onclick = () => {
  classToggle($btnHoursView, 'isAct');
  viewClass = $btnHoursView.classList[classList.length - 1];
};
// 2. 키보드 이벤트
$btnHoursView.onkeyup = ({ keyCode }) => {
  if (keyCode === 39) classAdd($btnHoursView, 'isAct');
  else if(keyCode === 37) classRemove($btnHoursView, 'isAct');
};

// 폰트 설정
$font.onchange = ({ target }) => {
  paint($font.name, target.value);
};

// 폰트 색 설정
$fontColor.oninput = ({ target }) => {
  paint($fontColor.name, target.value);
};

// 배경 색 설정
// 1. 마우스 이벤트
$bgc.onchange = ({ target }) => {
  const bgColor = window.getComputedStyle(target).backgroundColor;

  multiClassToggle($bgc, 'select', target.previousElementSibling);
  paint(target.name, bgColor);
  bgCorloClass = target.previousElementSibling.classList[classList.length - 1];
};
// 2. 키보드 이벤트
$bgc.onkeyup = ({ keyCode, target }) => {
  if (keyCode !== 13) return;

  const bgColor = window.getComputedStyle(target).backgroundColor
  multiClassToggle($bgc, 'select', target);
  paint(target.nextElementSibling.name, bgColor);
  bgCorloClass = target.classList[classList.length - 1];
};

// 커스텀 스타일 저장 & 해제
$state.onclick = ({ target }) => {
  if (target.matches('.btn_settingSave')) saveStyle();
  else if (target.matches('.btn_settingClear')) clearStyle();
};

// setting 메뉴 내부 포커스 제어
$btnSettingClose.onkeydown = e => {
  if(e.keyCode !== 9) return;

  $btnHoursView.focus();
  e.preventDefault();
};

// setting 메뉴 닫기
$btnSettingClose.onclick = () => {
  classToggle($setting, 'active');
  show($btnSettingOpen);
  $btnSettingOpen.focus();
};


