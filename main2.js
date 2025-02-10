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
    new Question('Яке слово написане правильно?', 'дзвінкий', 'дзвінкий', 'звінкий', 'дзвінкій', 'звінкій', 'дзвинкий'),
    new Question('У якому рядку всі слова є синонімами до слова "говорити"?', 'мовити, казати, розповідати', 'кричати, мовчати, читати', 'шепотіти, писати, слухати', 'бігти, розмовляти, стрибати', ' співати, розповідати, їсти', 'мовити, казати, розповідати'),
    new Question('Я люблю читати книжки про ______ ', 'Україну', 'Україна', 'України', 'Україну', 'Україною', 'Україн')
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
