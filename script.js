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
    document.getElementById(`page-${currentPage}`).classList.remove("active");

    let resultText = "";
    
    if (totalScore >= 6) {
        resultText = "당신은 **저속노화 관계**입니다! 🎉<br>긍정적인 관계를 유지하고 균형 잡힌 사고를 가지고 있습니다.";
    } else if (totalScore >= 4) {
        resultText = "당신은 **보통노화 관계**입니다! 😊<br>때때로 관계에서 갈등을 겪을 수도 있지만, 조절을 통해 개선할 수 있습니다.";
    } else {
        resultText = "당신은 **가속노화 관계**입니다! ⚠️<br>감정 조절과 관계 유지에 노력을 더 기울여보세요!";
    }

    document.getElementById("result-text").innerHTML = resultText;
    document.getElementById("result-page").style.display = "block";
}

