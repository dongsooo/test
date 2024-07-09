// 호버함수 시작
//호버 함수

let hoverListeners = [];

function addHoverEffect(atagClass, hoverClass) {
  const atag = document.querySelector(atagClass);
  const hoverElement = document.querySelector(hoverClass);

  if (!atag || !hoverElement) return; // 요소가 없을 경우 반환

  const mouseOverListener = function () {
    hoverElement.style.display = "block";
  };

  const mouseOutListener = function () {
    hoverElement.style.display = "none";
  };

  atag.addEventListener("mouseover", mouseOverListener);
  atag.addEventListener("mouseout", mouseOutListener);

  hoverListeners.push({ atag, mouseOverListener, mouseOutListener });
}

function initializeHoverEffects() {
  if (window.innerWidth > 1023) {
    addHoverEffect(".notebookAtag", ".notebookHover");
    addHoverEffect(".phoneAtag", ".phoneHover");
    addHoverEffect(".bikeAtag", ".bikeHover");
    addHoverEffect(".paperAtag", ".paperHover");
    addHoverEffect(".gamepadAtag", ".gamepadHover");
    addHoverEffect(".cardAtag", ".cardHover");
    addHoverEffect(".cupAtag", ".cupHover");
  }
}

function removeHoverEffects() {
  hoverListeners.forEach(({ atag, mouseOverListener, mouseOutListener }) => {
    atag.removeEventListener("mouseover", mouseOverListener);
    atag.removeEventListener("mouseout", mouseOutListener);
  });
  hoverListeners = [];
}

// 페이지 로드 시 호버 효과 초기화
initializeHoverEffects();

// 윈도우 크기 조절 시 다시 확인하여 동적으로 호버 효과 추가/제거
window.addEventListener("resize", function () {
  removeHoverEffects();
  initializeHoverEffects();
});

// --------
function openNewWindow(url) {
  // 새 창의 너비와 높이를 설정합니다.
  let newWindow = window.open(url, "_blank", "width=360,height=740");
  // 포커스를 새 창에 맞춥니다.
  if (newWindow) {
    newWindow.focus();
  }
}

let skillData = [70, 60, 50, 45]; // 숙련도 데이터

// Canvas 요소 가져오기
let ctx = document.getElementById("myBarChart").getContext("2d");

// 애니메이션 상태 저장 변수
let animationComplete = false;

// 막대 그래프 생성
let myBarChart = new Chart(ctx, {
  type: "bar", // 그래프 유형: 막대 그래프
  data: {
    labels: ["HTML+CSS", "JavaScript", "Jquery", "React"], // X 축 레이블
    datasets: [
      {
        label: "숙련도", // 레이블 비움
        data: skillData, // 각 막대의 데이터 값
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)", // 막대 색상
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)", // 막대 테두리 색상
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1, // 막대 테두리 두께
      },
    ],
  },
  options: {
    indexAxis: "x", // Y 축에 데이터 표시
    plugins: {
      legend: {
        display: false, // 레전드(범례) 숨기기
      },
    },
    scales: {
      x: {
        beginAtZero: true, // X 축 시작 값 설정
      },
    },
    responsive: true, // 반응형 크기 조정
    maintainAspectRatio: false, // 캔버스 비율 유지 해제
    animation: {
      duration: 500,
      easing: "easeOutQuart",
      onProgress: function (animation) {
        if (animationComplete) return; // 애니메이션이 완료된 경우 실행 중지
        const chart = animation.chart;
        const width = chart.width;
        const height = chart.height;
        const ctx = chart.ctx;
        ctx.save();
        ctx.clearRect(0, 0, width, height);
        ctx.translate(width / 2, height / 2);
        ctx.scale(
          animation.currentStep / animation.numSteps,
          animation.currentStep / animation.numSteps
        );
        ctx.translate(-width / 2, -height / 2);
        chart.draw();
        ctx.restore();
      },
      onComplete: function () {
        animationComplete = true; // 애니메이션 완료 상태 설정
        // 애니메이션 콜백 제거
        myBarChart.options.animation.onProgress = null;
        myBarChart.options.animation.onComplete = null;
      },
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const paperAtag = document.querySelector(".paperAtag");
  const xMark = document.querySelector(".xMark");
  const myIntroduce = document.querySelector(".myIntroduce");

  paperAtag.addEventListener("click", function (event) {
    event.preventDefault();
    myIntroduce.style.display = "block";
    document.body.style.overflow = "hidden"; // 스크롤 막기
  });

  xMark.addEventListener("click", function () {
    myIntroduce.style.display = "none";
    document.body.style.overflow = "auto"; // 스크롤 원래대로 복원
  });
});

// 배경색 변경 함수
// 배경색 변경 함수
function changeBackgroundColor() {
  const wrap = document.querySelector(".wrap");
  const currentColor = wrap.style.backgroundColor;
  wrap.style.backgroundColor = currentColor === "skyblue" ? "navy" : "skyblue";

  // 배경색에 따라 .myRoom 요소에 필터 적용
  const myRoom = document.querySelector(".myRoom");
  if (wrap.style.backgroundColor === "navy") {
    myRoom.style.filter = "brightness(0.8)";
  } else {
    myRoom.style.filter = "brightness(1)";
  }
}

// 30초마다 배경색 변경
// setInterval(changeBackgroundColor, 20000);

// 페이지 로드 시 초기 배경색 설정
document.addEventListener("DOMContentLoaded", () => {
  const wrap = document.querySelector(".wrap");
  wrap.style.backgroundColor = "skyblue";
});

// Swiper 객체 생성
var swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  slidesPerView: "auto",
  // slidesPerView: 5,
  spaceBetween: 60,
  initialSlide: 2,
  centeredSlides: true,
  loop: false,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
