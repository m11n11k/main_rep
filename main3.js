let questionEl = document.querySelector('.question')
let answers = Array.from(document.querySelectorAll('.answer'))

class Question {
    constructor(question, correct, ...answers) {
        this.question = question
        this.correct = correct
        this.answers = answers
    }

    display() {
        questionEl.innerHTML = this.question
        for (let i = 0; i < answers.length; i++) {
            if (this.answers[i]) {
                answers[i].innerHTML = this.answers[i]
            } else {
                answers[i].innerHTML = ""
            }
        }
    }
}

let current_questions = [
    new Question('She ______ to the cinema every weekend.', 'goes', 'go', 'goes', 'going', 'went', 'gone'),
    new Question('Я люблю читати книги.', 'I love to read books.', 'I love to read books.', 'I read books love.', 'I loving read books.', ' I loves reading books.', 'I to read books love.'),
    new Question('He is interested ______ learning new languages.', 'in', 'at', 'on', 'of', 'in', 'with')
];

let point_answer_given = 0
let current_question = current_questions[point_answer_given]
current_question.display()

answers.forEach((answerEl) => {
    answerEl.addEventListener('click', function () {
        if (answerEl.innerHTML.trim() === current_question.correct) {
            alert("Правильно!")
        } else {
            alert("Неправильно!")
        }

        setTimeout(() => {
            point_answer_given++;
            if (point_answer_given < current_questions.length) {
                current_question = current_questions[point_answer_given]
                current_question.display();
            } else {
                alert("Ви завершили всі запитання!")
            }
        }, 500)
    });
});
