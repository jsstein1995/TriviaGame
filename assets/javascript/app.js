
var wrong = 0;
var correct = 0;
var total = 0;

window.onload = function () {
    $("#start").on("click", start);

}
var number = 120;
var intervalId;

function start() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    questions();
}

function decrement() {
    number--;
    $("#main").html("<p>" + "Time remaining: " + number + "</p>");

    if (number === 0) {
        stop();
        endGame();
    }
}

function stop() {
    clearInterval(intervalId);
}


function questions() {

    var trivia = [
        {
            q: "1: Judith Keppel's questions: Complete the saying: 'As sick as a...'?",
            choices: ["Partridge", "Puffin", "Parrot", "Penguin"],
            correctAnswer: "Parrot"
        },

        {
            q: "2: Which legal document states a person's wishes regarding the disposal of thier property after death?",
            choices: ["Would", "Shall", "Should", "Will"],
            correctAnswer: "Will"
        },

        {
            q: "3: Complete the title of the James Bond film: 'The Man With the...'?",
            choices: ["Golden Tooth", "Golden Gun", "Golden Eagle", "Golden Delicious"],
            correctAnswer: "Golden Gun"
        },

        {
            q: "4: Which of these fruits shares its name whith something superior or desirable?",
            choices: ["Apricot", "Grapefruit", "Plum", "Mango"],
            correctAnswer: "Plum"
        },

        {
            q: "5: In which sport do two teams pull at opposite ends of a rope?",
            choices: ["Tug of war", "Basketball", "Ice hockey", "Polo"],
            correctAnswer: "Tug of War"
        },

        {
            q: "6: Sherpas and Gurkas are native to which country?",
            choices: ["Russia", "Ecuador", "Nepal", "Morocco"],
            correctAnswer: "Nepal"
        },

        {
            q: "7: Prime Minister Tony Blair was born in which country?",
            choices: ["England", "Northern Ireland", "Scotland", "Wales"],
            correctAnswer: "Scotland"
        },

        {
            q: "8: Whose autobiography has the title 'A Long Walk To Freedom'?",
            choices: ["Ranulph Fennes", "Mother Teresa", "Nelson Mandela", "Mikhail Gorbachev"],
            correctAnswer: "Nelson Mandela"
        },

        {
            q: "9: Duffel coats are named after a town in which country?",
            choices: ["Belgium", "Holland", "Germany", "Austria"],
            correctAnswer: "Belgium"
        },

        {
            q: "10: Complete this stage instruction in Shakespeare's 'The Winter's Tale': 'Exit, persued by a...'?",
            choices: ["Tiger", "Clown", "Bear", "Dog"],
            correctAnswer: "Would"
        }
    ]
    var questionDiv = $("#questions")

    for (var i = 0; i < trivia.length; i++) {
        questionDiv.append("<h2>" + trivia[i].q + "</h2>");
        for (var j = 0; j < trivia[i].choices.length; j++) {
            questionDiv.append("<input type='radio' name='question-" + i +
                "'value='" + trivia[i].choices[j] + "''>" + trivia[i].choices[j]);
        }
    }
    $("#done").append("<button id='done'>Done</button>");
}

// create done button and click event
$("#done").on('click', function () {
    endGame();
});

function endGame() {
    clearInterval(intervalId);
    var inputs = $("#questions").children("input:checked");
    for (var i = 0; i < inputs.length; i++) {
        if ($(inputs[i]).val() === trivia[i].correctAnswer) {
            correct++;
        } else {
            wrong++;
        }
    }
    $("#questions").empty();
    $("#questions").append("Correct: " + correct + " ");
    $("#questions").append("Wrong: " + wrong + " ");
    $("#questions").append("Total: " + total + " ");


}








