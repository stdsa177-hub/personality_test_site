const questions = [
    { question: "친구들과 놀 때 어떤 걸 더 좋아해?", answers: ["대화하기", "활동하기"] },
    { question: "여행할 때 선호하는 것은?", answers: ["계획된 일정", "즉흥적인 여행"] }
];

let currentQuestion = 0;

function nextQuestion(answer) {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        document.getElementById('quiz-container').innerHTML = `<h2>테스트가 완료되었습니다!</h2>`;
    }
}

function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question').textContent = q.question;
    const buttons = document.querySelectorAll('.answer-btn');
    buttons[0].textContent = q.answers[0];
    buttons[1].textContent = q.answers[1];
}

showQuestion();
