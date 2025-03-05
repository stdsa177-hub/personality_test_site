let currentPage = 1;

// 다음 페이지로 이동하는 함수
function nextPage() {
    document.getElementById(`page-${currentPage}`).classList.remove("active");
    currentPage++;
    if (currentPage <= 5) {
        document.getElementById(`page-${currentPage}`).classList.add("active");
    }
}

// 결과 페이지 표시 함수
function showResult() {
    document.getElementById(`page-${currentPage}`).classList.remove("active");
    document.getElementById("result-page").style.display = "block";
}

