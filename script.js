let currentPage = 1;
let totalScore = 0;  // 총점 저장 변수

// 다음 페이지로 이동하는 함수 (점수 선택 포함)
function nextPage(score = 0) {
    totalScore += score; // 점수 누적
    document.getElementById(`page-${currentPage}`).classList.remove("active");
    currentPage++;

    if (currentPage <= 5) {
        document.getElementById(`page-${currentPage}`).classList.add("active");
    } else {
        showResult(); // 마지막 질문 이후 결과 표시
    }
}

// 결과 페이지 표시 함수
function showResult() {
    // 모든 질문 페이지 숨김
    document.querySelectorAll(".page-container").forEach(page => {
        page.style.display = "none";
    });

    // 결과 판별
    let resultText = "";
    
    if (totalScore >= 7) {
        resultText = "🎉 당신은 <strong>저속노화</strong>입니다!<br>긍정적인 관계를 유지하고 균형 잡힌 사고를 가지고 있습니다.";
    } else if (totalScore >= 4) {
        resultText = "😊 당신은 <strong>보통</strong>입니다!<br>때때로 관계에서 갈등을 겪을 수도 있지만, 조절 능력이 있습니다.";
    } else {
        resultText = "⚠️ 당신은 <strong>가속노화</strong>입니다!<br>감정 조절과 관계 유지에 주의가 필요합니다. 여유를 가지세요!";
    }

    // 결과 페이지 표시
    document.getElementById("result-text").innerHTML = resultText;
    document.getElementById("result-page").style.display = "flex";
}

