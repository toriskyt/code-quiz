var timerEl = document.getElementById('countdown');
var imgTag = document.createElement("img");
var startbutton = document.getElementById("start-button");
var quizbox = document.getElementById("quizbox");
var questionBox = document.getElementById("questionBox");
var Q = 0;
var countDownp = document.querySelector("#countDown");

var wrongGuesses = 0;
var totalWins = 0;
var totalLosses = 0;
var timerInterval = null;
var secondsLeft = 0;

startbutton.addEventListener("click", function() {
    var startbox = document.getElementById("startbox");
    startbox.setAttribute("class", "hide");
    quizbox.removeAttribute("class");
    setTime()
    makeQuizcard();
});

function setTime() {
    secondsLeft = 30;
    countDownp.textContent = secondsLeft;
    // Sets interval in variable
    timerInterval = setInterval(function () {
        secondsLeft--;
        countDownp.textContent = secondsLeft;
        
        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            endGame ()
        }

    }, 1000);
}


var questions = [
    {
        question: "What is an Array?",
        choices: [
            "High-level list", "Class", "Semantic Element"
        ],
        answer: "High-level list"
    },
    {
        question: "Which is a semantic tag?",
        choices: [
            "Div", "Header", "Span"
        ],
        answer: "Header"
    },
    {
        question: "A form is used to...",
        choices: [
            "Add context to a page", "Create a media link", "Collect user input"
        ],
        answer: "Collect user input"
    },
    {
        question: "An HTML form element can contain...",
        choices: [
            "Input", "Output", "Both Input and Output"
        ],
        answer: "Both Input and Output"
    },
    {
        question: "The correct document type for HTML is...",
        choices: [
            "!DOCTYPE html", "CSS", "JS"
        ],
        answer: "!DOCTYPE html"
    },
]

function makeQuizcard(){
    var quizText = document.createElement("h2");
    var choiceBox = document.getElementById("choiceBox");
    questionBox.innerHTML = "";
    choiceBox.innerHTML = "";
    quizText.textContent = questions [Q].question;
    questionBox.appendChild(quizText);
    questions[Q].choices.forEach(function(choice) {
        var choiceBtn = document.createElement("button");
        choiceBtn.textContent = choice;
        choiceBtn.setAttribute("value", choice);
        choiceBtn.onclick = checkAnswer;
        choiceBox.appendChild(choiceBtn);
    })  
}

function checkAnswer() {
    console.log(this.value);
if(this.value !== questions[Q].answer) {
    console.log("Incorrect");
}
else {
    console.log("Correct!");
}

Q++; 
if(Q === questions.length) {
    console.log("End game");
    gameOver ();
} else {
  makeQuizcard();
}
}
function gameOver() {
    questionBox.innerHTML = "";
    choiceBox.innerHTML = "";  
}





// imgTag.setAttribute("src", "assets/images/hoopla-is-dead.png");
// imgTag.setAttribute("alt", "Start Test");

// imgTag.addEventListener("click", function(){
//     console.log("Maybe this will start");
// });

// document.body.appendChild(imgTag);



// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals 
// that stores high scores
// SO THAT I can gauge my progress compared to my peers
// ```

// ## Acceptance Criteria

// ```
// GIVEN I am taking a code quiz
// WHEN I click the start button
    // create button
// THEN a timer starts and I am presented 
// with a question
    // create timer
    // create buttons w/multiple choice questions
// WHEN I answer a question
// THEN I am presented with another question
    // create second prompt
// WHEN I answer a question incorrectly
    // create correct choices
    // create prompt that reads "correct" and "wrong"
// THEN time is subtracted from the clock
    // i--
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
    // alert - Game is over
// WHEN the game is over
// THEN I can save my initials and set my score on the board
    // input