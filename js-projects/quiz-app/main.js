const quizData = [
    {
        question: 'How old is Javascript?',
        a: '23',
        b: '27',
        c: '45',
        d: '20',
        correct: 'b'
    },
    {
        question: 'Who was the inventer of Javascript?',
        a: 'Brendan Eich',
        b: 'Guido Van Rossum',
        c: 'Bjarne Stroustrup',
        d: 'Dennis Ritchie',
        correct: 'a'
    },
    {
        question: 'In which year was JavaScript invented?',
        a: '1983',
        b: '1996',
        c: '2000',
        d: '1995',
        correct: 'd'
    },
    {
        question: 'Which is the most used Javascript Framework for frontend?',
        a: 'Vue',
        b: 'React',
        c: 'Angular',
        d: 'Ember',
        correct: 'b'
    },
    {
        question: 'Which is the most popular languange in 2022?',
        a: 'Python',
        b: 'Javascript',
        c: 'Java',
        d: 'PHP',
        correct: 'b'
    }
];

/*Grabing all the elements */
const question = document.getElementById('questions');
const a = document.getElementById('a+');
const b = document.getElementById('b+');
const c = document.getElementById('c+');
const d = document.getElementById('d+')
const btn = document.getElementById('submit');
const body = document.querySelector('body')
const all_answer = document.querySelectorAll('.answer');

let index = 0;
let score = 0;
//get the getSelected answer
function getSelected() {
  let ans = undefined;
  all_answer.forEach((el) => {
    if (el.checked) {
      ans = el.id;
    }
  });
  return ans;
}
//disselect all answer
function deselectans() {
  all_answer.forEach((el) => {
    el.checked = false;
  });
}
//load the quiz data
function getquiz() {
  deselectans();
    question.innerText = quizData[index].question;
    a.innerText = quizData[index].a;
    b.innerText = quizData[index].b;
    c.innerText = quizData[index].c;
    d.innerText = quizData[index].d;
    console.log(question)
}
//move forward the quiz
function startquiz() {
  btn.addEventListener('click', () => {
    let ans = getSelected();
    if (ans) {
      if (ans == quizData[index].correct) {
        score++;
      }
    }
    index++;
    if (index < quizData.length) {
      getquiz();
    } else {
        const h1 = document.createElement('h2').innerText = 'Quiz completed:' + score;
        body.appendChild(h1)
      location.reload();
    }
  });
}
getquiz();
startquiz();