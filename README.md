# WeatherApp_hackathon

팀명 : '3'조

팀원 : 이우성 윤유비 김가현

주제 : simple 크롬 확장프로그램 날씨예보 애플리케이션 클론

[clone 사이트](https://chrome.google.com/webstore/detail/simple/ofpamglakelakiehjfhgfcikpponflgi)

[구현 영상](https://www.youtube.com/watch?v=QwLIlq60Drk) 

![image](https://user-images.githubusercontent.com/62285872/84174356-7b264a00-aab9-11ea-8cb1-ead00e1ea54d.png)

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
  - 요일
  
- 날씨
  - 최저 기온 / 최고 기온
  - 현재 위치 - 지역
  
- 사이드 바

  - Hours Display 
  - 폰트 수정

  - 폰트색상 수정
  - 배경색상 수정



### Optional

- 시계
  - 시간대 별로 글자 출력 -> 구현완료
- 날씨 
  - 위치 선정
- 사이드 바
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
