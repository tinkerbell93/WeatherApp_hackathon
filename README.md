# WeatherApp_hackathon

팀명 : '3'조

팀원 : 이우성 윤유비 김가현

주제 : simple 크롬 확장프로그램 날씨 클론 프로젝트

[simple 크롬 확장프로그램](https://chrome.google.com/webstore/detail/simple/ofpamglakelakiehjfhgfcikpponflgi)



## 목표

1. HTML, CSS 최소화, JS 기능 구현
2. 시간내에 완성된 페이지 구현 
3. 팀원들간의 깃헙 사용
4. Weather API 사용
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

- 날씨 
  - 미세먼지
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



