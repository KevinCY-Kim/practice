// script.js

// 페이지가 로드되면 실행
document.addEventListener("DOMContentLoaded", () => {
  const h1 = document.querySelector("h1");
  const aboutText = document.querySelector("section p");

  // 제목 클릭하면 알림창 뜨기
  h1.addEventListener("click", () => {
    alert("형의 웹사이트에 오신 걸 환영합니다!");
  });

  // 마우스 올리면 텍스트 변경
  aboutText.addEventListener("mouseenter", () => {
    aboutText.textContent = "🔥 지금 마우스를 올렸어요!";
  });

  aboutText.addEventListener("mouseleave", () => {
    aboutText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  });
});