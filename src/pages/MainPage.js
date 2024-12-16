import Card from "../components/Card";
import { Footer, Header, Navigation } from "../components/Layout";

const DUMMY_DATA = [
  {
    name: "홍길동",
    content: "오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!",
    createdAt: "5분 전",
  },
  {
    name: "김철수",
    content: "새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!",
    createdAt: "15분 전",
  },
  {
    name: "이영희",
    content: "오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?",
    createdAt: "30분 전",
  },
  {
    name: "박민수",
    content: "주말에 등산 가실 분 계신가요? 함께 가요!",
    createdAt: "1시간 전",
  },
  {
    name: "정수연",
    content: "새로 나온 영화 재미있대요. 같이 보러 갈 사람?",
    createdAt: "2시간 전",
  },
];

export const MainPage = () => {
  return `
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
    ${Header()}
    ${Navigation()}

      <main class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
        </div>

        <div class="space-y-4">
          ${DUMMY_DATA.map((data) => {
            return Card(data);
          }).join("")}
          
        </div>
      </main>

      ${Footer()}
    </div>
  </div>
`;
};