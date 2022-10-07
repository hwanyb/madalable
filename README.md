<div align=center>

#### 나만의 만다라트를 만들어 todo로 관리할 수 있는 웹서비스
# **Mandalable**

![mandalable](https://user-images.githubusercontent.com/80311884/234560062-445b9523-febb-4400-8b01-81041510f039.png)
<br/><br/>
목표를 효율적으로 수립할 수 있는 **만다라트**를 만들고 실천할 수 있도록 돕는 서비스를 만들고 싶어 진행한 프로젝트입니다.

firebase를 통해 로그인기능과 실시간 데이터베이스 기능을 구현하였습니다.

반응형으로 구현하였습니다.

테스트 id : test@co.kr <br />
테스트 pw : test1234

### [**Mandalable 방문하기**](https://mandalable-7a560.web.app)
<br /><hr />
</div>

## 🔍 미리보기
### Auth 페이지
- 만다라블 소개
- 만다라트 생성 방법 안내
- 로그인, 회원가입 기능

![auth](https://user-images.githubusercontent.com/80311884/234808234-50d5c574-d30d-4387-bbc5-95237a8c4cab.gif)

### Home 페이지
- 만다라트 생성 기능
- 만다라트 CRUD 기능
- 만다라트 이미지 저장 기능

![home-create](https://user-images.githubusercontent.com/80311884/234808255-136956a3-ccc1-4220-baa3-c9716033e924.gif)

![home-mandal](https://user-images.githubusercontent.com/80311884/234808259-7448c88a-f386-452d-8ea9-82f4ee331b2f.gif)

![home-mandal (2)](https://user-images.githubusercontent.com/80311884/234808257-407823d1-392c-47cd-945c-aeb1b035275c.gif)

### To Do 페이지
- 실천 과제 완료 / 미완료 체크 기능

![todo](https://user-images.githubusercontent.com/80311884/234808265-f99f5b29-d7b7-468e-8c04-2254e2cc7c92.gif)

### Overview 페이지
- 실천과제 여부에 따른 시각화된 성공률 제공 기능

![overview](https://user-images.githubusercontent.com/80311884/234808260-bcafc409-8576-4e7b-9244-f11107b9b806.gif)

## 🕑 작업기간
2022.09.10 - 2022.10.05 (약 1개월)

## 🔧 설치 방법
```
git clone https://github.com/hwanyb/mandalable.git
cd directory_name
npm install
npm run start
```

## 🛠 기술 스택
<div align=left>
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white" />
    <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white" />
    <img src="https://img.shields.io/badge/Redux-764ABC?style=flat&logo=Redux&logoColor=white" />
    <img src="https://img.shields.io/badge/styled-DB7093?style=flat&logo=styled-components&logoColor=white" />
    <img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=Firebase&logoColor=white" />
</div><br />

## 📌 기능 소개
### 주요 기능
|기능|내용|
|--|------|
|**만다라트 생성 기능**|핵심목표를 중심으로 8가지의 세부목표를 생성하고 세부목표를 중심으로 8개의 실천과제를 만들 수 있는 기능|
|**TO DO 리스트 기능**|생성한 만다라트의 실천과제들을 TO DO 리스트로 만들어 관리할 수 있는 기능|
|**성공률 overview 기능**|실천과제의 완료여부에 따라 만다라트와 목표들의 성공률을 시각화하여 제공|

### 상세 기능
- 로그인, 로그아웃 및 회원가입
- 생성한 만다라트 CRUD (Create, Read, Update, Delete)
- 생성한 만다라트를 이미지로 저장하는 기능

## 📂 디렉토리 구조
```
mandalable
|  .env
|  .firebaserc
│  .gitignore
|  firebase.json
│  package-lock.json
│  package.json
│  README.md
|  tsconfig.json
│          
├─public
│      favicon.ico
│      featPicker.css
│      guide1.png
│      guide2.png
│      guide3.png
│      index.html
│      logo192.png
│      logo512.png
│      logo_gray200.png
│      logo_header.png
│      manifest.json
│      mockup.jpg
│
└─src
    │  App.tsx
    │  firebase.ts
    │  index.tsx
    │  react-app-env.d.ts
    │  types.ts
    │
    ├─components
    │  │  Loading.tsx
    │  │  TodoContainer.tsx
    │  │
    │  ├─Auth
    │  │      AuthContainer.tsx
    │  │      AuthMain.tsx
    │  │      styled.ts
    │  │
    │  ├─common
    │  │  │  Empty.tsx
    │  │  │  MandalartCard.tsx
    │  │  │
    │  │  └─layout
    │  │          GNB.tsx
    │  │          Header.tsx
    │  │          Layout.tsx
    │  │
    │  ├─Home
    │  │      CreateMandalart.tsx
    │  │      MandalartCardContainer.tsx
    │  │      MandalartDetail.tsx
    │  │      TodoDetail.tsx
    │  │
    │  └─Overview
    │          GoalOverview.tsx
    │          MandalartCardContainer.tsx
    │          SuccessContainer.tsx
    │          TodoOverview.tsx
    │
    ├─modules
    │      appReducer.ts
    │      authReducer.ts
    │      goalReducer.ts
    │      index.ts
    │      mandalartReducer.ts
    │      overviewReducer.ts
    │
    ├─pages
    │      Auth.tsx
    │      Home.tsx
    │      Overview.tsx
    │      Todo.tsx
    │
    └─styles
            Common.ts
            GlobalStyle.ts
            styled.d.ts
            theme.ts
```


## 📚 느낀 점

- Firestore에 배열 내 요소만 수정하는 기능이 없다는 점을 배움
- 기획단계에서 정확하게 기능을 명세하지 않고 개발을 진행하면 어려움이 뒤따라온다는 점을 배움
- 복잡한 구조의 데이터를 서버리스 서비스만으로 구현하기에는 한계가 있다는 점을 배움


## ✏ 개선사항

- 회원 탈퇴 기능 개발 필요
- 주 n회, 월 n회 등 다회성 과제에 대한 todo 로직 개발 필요