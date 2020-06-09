//state
let customStyles = [];

const $main = document.querySelector('main');
const $btnHoursView = document.querySelector('.hoursView_outerToggle');
const $btnSettingOpen = document.querySelector('.btn_settingOpen');
const $setting = document.getElementById('setting');
const $font = document.getElementById('font');
const $fontColor = document.getElementById('font_color');
const $bgc = document.querySelector('.container_bgc')
const $state = document.querySelector('.item_state');
const $btnSettingClose = document.querySelector('.btn_settingClose');

// function

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
  const font = JSON.parse(localStorage.getItem('customStyles')).filter(style => style.name === 'fontFamily')[0].value;
  const $selectedFont = document.querySelector(`[value = "${font}"]`);
  const color = JSON.parse(localStorage.getItem('customStyles')).filter(style => style.name === 'color')[0].value;


  $selectedFont.setAttribute('selected', '');
  $fontColor.setAttribute('value', `${color}`);
}


// 리페인팅
const paint = (name, value) => {
  addState(name, value);
  setStyle();
}

// 로컬스토리지에 저장되어있는 스타일 가져오기
const getStyle = () => {
  if (!JSON.parse(localStorage.getItem('customStyles'))) return;

  customStyles = JSON.parse(localStorage.getItem('customStyles'));

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
const getRandomBgc = () => {
  const str = 'abcdef0123456789';
  let random = '';

  for(i = 0; i < 6; i++) {
    let count = Math.floor(Math.random() * str.length);
    random += str[count];
  }

  return random;
}

// 로컬스토리지에 커스텀 스타일 저장
const saveStyle = () => {
  localStorage.setItem('customStyles', JSON.stringify(customStyles));
}

// 로컬스토리지 및 현 스타일 제거
const clearStyle = () => {
  const font = JSON.parse(localStorage.getItem('customStyles')).filter(style => style.name === 'fontFamily')[0].value;
  const $selectedFont = document.querySelector(`[value = "${font}"]`);
  const color = JSON.parse(localStorage.getItem('customStyles')).filter(style => style.name === 'color')[0].value;

  $selectedFont.removeAttribute('selected');
  $fontColor.setAttribute('value', ``);

  localStorage.clear();
  $main.style = '';
}



// eventBinding

// 로딩이벤트
window.addEventListener('load', getStyle);

// setting 메뉴 열기
$btnSettingOpen.onclick = e => {
  classToggle($setting, 'active');
  hide($btnSettingOpen);
};

// hours view 클래스 추가 & 제거
// 1. 마우스 이벤트
$btnHoursView.onclick = () => {
  classToggle($btnHoursView, 'isAct');
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
};
// 2. 키보드 이벤트
$bgc.onkeyup = ({ keyCode, target }) => {
  if (keyCode !== 13 || keyCode !== 9) return;

  const bgColor = window.getComputedStyle(target.nextElementSibling).backgroundColor
  multiClassToggle($bgc, 'select', target);
  paint(target.nextElementSibling.name, bgColor);
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