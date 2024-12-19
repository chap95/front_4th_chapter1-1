export const USER_NAME_INPUT_ID = "username";
export const LOGIN_FORM_ID = "login-form";
//? 객체가 커질 경우에 성능
//? ID 값을 상수로 관리할 것인가? --> 리터럴 상수

//? 영서님 질문사항
//? 1. 모든 id값을 상수로 관리할것인지
//? 2. 테스트 코드의 이점은 유지보수성에 있는것인데, id값이 의도치않게 바뀐것에 대한 tc 검증은 어떻게 할 수 있을지..?
//? ID 방식의 참조를 지양 , 다양한 문제점이 발생

export const LoginPage = () => {
  return `
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      <form id="${LOGIN_FORM_ID}">
        <div class="mb-4">
          <input type="text" id="username" placeholder="사용자 이름" class="w-full p-2 border rounded">
        </div>
        <div class="mb-6">
          <input type="password" placeholder="비밀번호" class="w-full p-2 border rounded">
        </div>
        <button type="submit" id="loginButton" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
      </form>
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
      </div>
      <hr class="my-6">
      <div class="text-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
      </div>
    </div>
  </main>
`;
};
