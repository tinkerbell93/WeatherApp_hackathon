# WeatherApp_hackathon

팀명 : '3'조

팀원 : 이우성 윤유비 김가현

주제 : simple 크롬 확장프로그램 날씨 클론 프로젝트

[simple 크롬 확장프로그램](https://chrome.google.com/webstore/detail/simple/ofpamglakelakiehjfhgfcikpponflgi)



## 목표

1. HTML, CSS 최소화, JS 기능 구현
2. 시간내에 완성된 페이지 구현 
3. 팀원들간의 깃헙 사용
4. OpenWeatherMap API 사용
5. 가독성 있는 코드 작성
6. 오류 최소화



## 구현기능

### Must

- 시계
  - 시간
  - 날짜
- 날씨
  - 최저 기온 / 최고 기온
  - 요일
  - 현재 위치 - 지역
- 사이드 바
  - 배경색상 수정
  - 폰트색상 커스텀
  - Hours Display 



### Optional

- 시계
  - 시간대 별로 글자 출력
- 날씨 
  - 위치 선정
- 사이드 바
  - 폰트 수정
  - 섭씨, 화씨 노출여부
  - 이미지 업로드로 배경 커스컴 



### 사용 API

OpenWeatherMap API



## 컨벤션

#### HTML

- 네이밍 규칙: 스네이크 케이스



#### CSS

- 



#### JS

- 네이밍 규칙
  - 변수 : 카멜 케이스
  - 생성자 함수 : 파스칼 케이스
- 변수 선언 rule
  1. 전역변수는 코드의 가장상단에 모아서 선언할 것.
  2. 그 외, 꼭 전역에 필요하지 않은 변수들은 실행하는 함수 내에서 가장 상단에 선언할 것.
  3. 함수내에 선언 시 매번 재 생성하는 불합리한 경우 상위스코프에 선언할 것.
- 노드 생성 rule
  1. text 노드 '만' 생성 시 : textContent 사용
  2. element 노드 혹은 element 노드 + 텍스트 노드 생성 시 : innerHTML 사용



## 회의내용

### 200526

- 기상앱으로 결정
- 팀장 우성님

[ TODO ]

- 기상 앱 클론 하고 싶은것
- api 사용법
- 기상 앱에 추가하고 싶은 기능(옵션)



### 200527

- clone 코딩할 사이트
- 개인별 컴포넌트 구분
- 추가하고 싶은 기능
- 디렉토리 구조
- html 마크업 클래스 네이밍 + 자바스크립트 변수 네이밍 규칙정하기
- 웹 api / 웹팩 사용법?
- 조이름
- css 레이아웃?

[ TODO ]

- Hours Display 생각 해보기

- 디렉토리 구조

- html 레이아웃 

  header, section 영역 구분 어떻게 할 것인지 ?

- reset.css 어디까지 커스텀 할 것인지?

- 필요 리소스 확인(이미지, 폰트 등.)



### 200528

- Hours Display 구현 생각 해보기

  1. TEXT만 갈아끼우는 방법이 있음 
  2. class 동적 추가 삭제
  3. 요소 동적 추가 삭제

- 디렉토리 구조

  1. index.html

  2. css

     common.css

     style.css

  3. js

     weather.js

  4. img
  5. font

- html 구조

  body > main > h1 + section#clock + section#weather + button.btn + section#set

- common.css 결정

- 폰트 리소스

  [Balsamiq Sans](https://fonts.google.com/specimen/Balsamiq+Sans?sidebar.open&selection.family=Balsamiq+Sans|Nanum+Myeongjo&preview.text=balsamic&preview.text_type=custom&query=balsamiq)

  [Montserrat]([https://fonts.google.com/specimen/Montserrat?sidebar.open&selection.family=Balsamiq+Sans|Nanum+Myeongjo&preview.text=03:27:53+abc+%EA%B0%80%EB%82%98%EB%8B%A4&preview.text_type=custom](https://fonts.google.com/specimen/Montserrat?sidebar.open&selection.family=Balsamiq+Sans|Nanum+Myeongjo&preview.text=03:27:53+abc+가나다&preview.text_type=custom))

  [Nanum Gothic]([https://fonts.google.com/specimen/Nanum+Gothic?sidebar.open&selection.family=Balsamiq+Sans|Nanum+Myeongjo&preview.text=03:27:53+abc+%EA%B0%80%EB%82%98%EB%8B%A4&preview.text_type=custom](https://fonts.google.com/specimen/Nanum+Gothic?sidebar.open&selection.family=Balsamiq+Sans|Nanum+Myeongjo&preview.text=03:27:53+abc+가나다&preview.text_type=custom)) - 한글지원

  [Nanum Myeongjo]([https://fonts.google.com/specimen/Nanum+Myeongjo?sidebar.open&selection.family=Balsamiq+Sans|Nanum+Myeongjo&preview.text=03:27:53+abc+%EA%B0%80%EB%82%98%EB%8B%A4&preview.text_type=custom](https://fonts.google.com/specimen/Nanum+Myeongjo?sidebar.open&selection.family=Balsamiq+Sans|Nanum+Myeongjo&preview.text=03:27:53+abc+가나다&preview.text_type=custom)) - 한글지원

  [Wallpoet]([https://fonts.google.com/specimen/Wallpoet?sidebar.open&selection.family=Balsamiq+Sans|Nanum+Myeongjo&preview.text=03:27:53+abc+%EA%B0%80%EB%82%98%EB%8B%A4&preview.text_type=custom&query=wall](https://fonts.google.com/specimen/Wallpoet?sidebar.open&selection.family=Balsamiq+Sans|Nanum+Myeongjo&preview.text=03:27:53+abc+가나다&preview.text_type=custom&query=wall))

- 날씨 아이콘 리소스

  [폰트어썸](https://fontawesome.com/icons?d=gallery&q=weather)

  [erikflowers](https://erikflowers.github.io/weather-icons/)

[ TODO ]

- Hours Display 

  주말에 시계 구현 후 어떤방식으로 할지 결정하기

- 기상예보 업데이트 주기 시간

- 사이드바 기능 추가

  메인 배경 커스텀 이미지 업로드도 ?

- openWeathApi에서 제공하는 날씨 종류 알아보기

- meta tag?

- 세부레이아웃 구상

  반응형
  
- 폰트 사용하려면 서버가 있어야 하는데 어떻게 구현할 것인가?

- 폰트는 width값이 동일한 MONO를 사용해야함



### 200530

- Hours Display 
  1. 가현 : defalut 상태 까지 구현
  2. 우성: 그다음 24 -> 12 / 12 -> 24 변경 구현

- 자바스크립트 변수 선언 rule

  ```
  1. 전역변수는 코드의 가장상단에 모아서 선언할 것.
  2. 그 외, 꼭 전역에 필요하지 않은 변수들은 실행하는 함수 내에서 가장 상단에 선언할 것.
  3. 함수내에 선언 시 매번 재 생성하는 불합리한 경우 상위스코프에 선언할 것.
  ```

- 자바스크립트 노드 생성 rule

  ```
  1. text 노드 '만' 생성 시  : textContent 사용
  2. element 노드 혹은 element 노드 + 텍스트 노드 생성 시 : innerHTML 사용
  ```

- 기상예보 업데이트 주기 시간 

  3시간마다 업데이트

- openWeathApi에서 제공하는 날씨 종류에 따른 어플리케이션 이미지 구현

  (switch문을 활용하여 아래 8가지 case로 분류)

  1. Thunderstorm 
  2. Drizzle
  3. Rain
  4. Snow
  5. Atmosphere
  6. Clear
  7. Clouds
  8. default 알수없음

  https://openweathermap.org/weather-conditions  참고

- meta tag

  ```html
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- edge유저를 위한 meta -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  
  <!-- SEO 최적화 -->
  <meta property="og:title" content="제목">
  <meta property="og:description" content="간단설명">
  <meta property="og:image" content="이미지경로">
  <meta property="og:url" content="사이트url">
  <meta name="author" content="">
  <meta name="description" content="">
  <meta name="keywords" content="">
  <meta name="robots" content="ALL">
  ```

- 모노스페이스 폰트 사용

<br>

> Next conference : 06  / 01 PM 17:00

[ TODO ] 

<우성/가현>

- Hours Display

  setInterval , 즉시실행함수 중 어떤 것을 쓸건지 협의 필요

<우성>

- 사이드바 기능 추가 

  메인 배경 커스텀 이미지 업로드 기능 추가 & 배경 크기 설정

- 로컬스토리지 구현방법 생각

<가현>

- 시간대에 따라서 나올 comment 구현방법 생각

<공통사항>

- meta - SEO 추가에 관한 내용 추가 결정 

  https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/itemprop 

- 파비콘 이미지 소스확인

- 세부 레이아웃 구상 (반응형)

  1. 모바일버전
  2. PC버전 

- 폰트 구현방법 생각

  1. 웹폰트 사용
  2. 로컬스토리지 사용

- 모노스페이스 폰트 3개씩 찾아오기



### 200601

- Hours Display

  setInterval

- 사이드바 기능 추가 

  메인 배경 커스텀 이미지 업로드 기능 추가 

  배경 크기 설정 

  웹폰트 설정

  로컬스토리지 이용

- 시간대에 따라서 나올 comment 구현방법 생각

  // Good Morning 6 - 11

​      // Good Afternoon 12 - 17

​      // Good Evening  18 - 23

​      // Good Night 00 - 5

- `<meta name="robots" content="ALL">` 제외

- 파비콘

  ```html
  <div>아이콘 제작자 <a href="https://www.flaticon.com/kr/free-icon/sun_2917242?term=%EB%82%A0%EC%94%A8&page=1&position=4" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/kr/" title="Flaticon">www.flaticon.com</a></div> 
  ```


- 세부 레이아웃

  - #clock

    날짜 time태그 사용

  - #weather

    모바일 - 요일별 w 100%

    날씨 아이콘 픽스

    | 아이콘 명        | class 명 |
    | ---------------- | -------- |
    | Thunderstorm     | f016     |
    | Drizzle          | f04e     |
    | Rain             | f04e     |
    | Snow             | f076     |
    | Atmosphere       | f014     |
    | Clear            | f00d     |
    | Clouds           | f013     |
    | default 알수없음 | f04c     |

    날씨 업데이트 1시간 주기
    
  - #set
  
    오른쪽 슬라이드
  
    전체적인 폰트사이즈 크게
  
    선택은 radio
  
    세팅 버튼 이미지 - 폰트어썸
  
    ul > li
  
    세팅 기능은 모두 로컬스토리지로 관리
  
- 웹폰트 사용

  'Noto Sans', 'Roboto Mono', 'B612 Mono', 'Cutive Mono'

[ TODO ]

<공통사항>

- 파비콘 이미지 저작권 정보 처리?

- 배경색 수정에 대하여 폰트 색상 처리?

- 레이아웃

  - #set

    색상과 이미지를 지정해서 갈 것인지?

    사용자가 선택하게 할 것인지?



### 200605

- 파비콘이미지 저작권 정보 넣지 않아도 되는 이미지로 처리

- #set

  background 색상을 타일선택으로 설정 (기존 `input type="color"`)

- onload는 초기값 세팅해야 하는 세팅영역에 추가

- 모듈 JS - 가현,우성 / 유비

