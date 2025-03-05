let currentPage = 1;

// 다음 페이지로 이동하는 함수
function nextPage() {
    document.getElementById(`page-${currentPage}`).classList.remove("active");
    currentPage++;
    if (currentPage <= 5) {
        document.getElementById(`page-${currentPage}`).classList.add("active");
    }
}

// 테스트를 다시 시작하는 함수
function restartTest() {
    document.getElementById(`page-${currentPage}`).classList.remove("active");
    currentPage = 1;
    document.getElementById(`page-${currentPage}`).classList.add("active");
}

