let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container"); // Fixed the selector solih
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen"); // Fixed the selector solih
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//10 asuult
const quizArray = [
    {
        id: "0",
        question: "Нэгэн төрлийн найрлагатай ул хөрсийг инженер геологи-д тодорхойлохдоо Кн______үед авч үзнэ.",
        options: [
            "Кн<5 үед",
            "Кн=5 үед",
            "Кн<3 үед",
            "Кн>3 үед",
        ],
        correct: "Кн<3 үед",
    }, 
    {
        id: "1",
        question: "Ip=0.077 утгатай байвал ямар ул хөрс байх вэ?",
        options: [
            "шавранцар ул хөрс",
            "элсэнцэр ул хөрс",
            "элсэн ул хөрс",
            "шавар ул хөрс",
        ],
        correct: "шавранцар ул хөрс", 
    },
    {
        id: "2",
        question: "Цэвдэгийн температурыг цооног-т хэмжихдээ хэдэн метр гүнд хэмжих ёстой вэ?",
        options: [
            "20м гүнд",
            "10м гүнд",
            "5м гүнд",
            "Гэсэлтийн гүнээс доош",
        ],
        correct: "10м гүнд", 
    },
    {
        id: "3",
        question: "Цэвдэг ул хөрсөнд өрөмдлөг явуулах колонков өрөмдлөгийн хошууны диаметр хэд байх ёстой вэ?",
        options: [
            "127 мм",
            "110 мм",
            "151 мм",
            "168 мм",
        ],
        correct: "151 мм", 
    },
    {
        id: "4",
        question: "Уруйгаар зөөгдөж ирэх хажуу хэсгийн нийт агуулгыг аль томъёогоор олох вэ?",
        options: [
            "Wt.c=500*L*G*0.5[m3]",
            "Wt.c=1000*H*a*b*F[m3]",
            "Wt.c=V*F[m3]",
            "Wt.c=1000*T*b*F[m3]",
        ],
        correct: "Wt.c=1000*H*a*b*F[m3]",
    },
    { 
        id: "5",
        question: "Хээрийн туршилтын хэв гажилтын модулийн тооцоог график-т дүрслэхдээ _____ утгуудыг авдаг.",
        options: [
            "D(мПа), S(м)",
            "V(kПа), O([км])",
            "P(Па), L(мм)",
            "P(мПа), S(мм)",
        ],
        correct: "P(мПа), S(мм)", 
    },
    {
        id: "6",
        question: "Ул хөрсний байгалийн чийг нэмэгдэхэд _____ үзүүлэлтүүд ихсэнэ.",
        options: [
            "n, e, Sr",
            "g, n, Ip",
            "n, Pd, g",
            "e, Ps, Sr",
        ],
        correct: "n, e, Sr",  
    },
    {
        id: "7",
        question: "Ул хөрсний эзэлхүүн жинг ____ -аар тодорхойлдог. Үүнд...",
        options: [
            "1 арга",
            "6 арга",
            "4 арга",
            "2 арга",
        ], 
        correct: "4 арга", 
    },
    {
        id: "8",
        question: "Эллювийн хурдас чулуулагт явуулах өрөмдлөгийн зай ____ байх ёстой.",
        options: [
            "80 метр",
            "Хамаагүй",
            "Хол байх",
            "Ойр ойрхон",
        ],
        correct: "Ойр ойрхон",
    },
    {
        id: "9",
        question: "Эдгээр ул хөрсний үзүүлэлтүүдээс тооцооны үзүүлэлтийг сонго?",
        options: [
            "Е, R, N",
            "С, Ф, Е",
            "Ф, G, R", 
            "Х, С, Д",
        ],
        correct: "С, Ф, Е", 
    },
]; 

restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
  });
  
  nextBtn.addEventListener("click", () => {
    questionCount += 1;

    if (questionCount === quizArray.length) {
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        userScore.innerHTML = "Таны оноо " + questionCount + " асуултаас " + scoreCount + " авлаа";
    } else {
        countOfQuestion.innerHTML = questionCount + 1 + " дэхь нь " + quizArray.length + " Асуултаас ";
        quizDisplay(questionCount);
        count = 11;
        clearInterval(countdown);
        timerDisplay(); 
    }
});

const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count === 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
}; 

const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");

    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
       
    quizCards[questionCount].classList.remove("hide");
};

function quizCreator() {
    quizArray.sort(() => Math.random()-0.5);

    for (let i of quizArray) {
        i.options.sort(() => Math.random()-0.5);
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");

        countOfQuestion.innerHTML = 1 + " дэхь " + quizArray.length+" Асуултаас";
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question"); 
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);

        div.innerHTML += `
        <button class="option-div" onclick="checker(this)">
            ${i.options[0]}
        </button>
        <button class="option-div" onclick="checker(this)">
            ${i.options[1]}
        </button>
        <button class="option-div" onclick="checker(this)">
            ${i.options[2]}
        </button>
        <button class="option-div" onclick="checker(this)">
            ${i.options[3]}
        </button>
        `;
        quizContainer.appendChild(div);
    }
} 

function checker(userOption){
    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName
    ("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    if (userSolution === quizArray[questionCount].correct){
        userOption.classList.add("correct");
        scoreCount++;
    }  
    else{
        userOption.classList.add("incorrect");

        options.forEach((element) =>{
            if((element.innerText = quizArray[questionCount].correct)){
                element.classList.add("correct");
            }
        });
    }
    clearInterval(countdown);
    options.forEach((element) => {
        element.disabled = true;
    });
}

function initial(){
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}
//alert("Инженер геологийн хээрийн судалгаа, лаборатори, суурин боловсруулалтын судалгааны талаарх асуултууд");
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
}); 

window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};
