
var wrong = 0;
var correct = 0;
var total = 0;

window.onload = function () {
    $("#start").on("click", start);

}
var number = 10;
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
        wrong++;
        total++;
    }
}

function stop() {
    clearInterval(intervalId);
}


function questions() {

    // Change the HTML to show the question and answers.
    $('#question1').html("1: Judith Keppel's questions: Complete the saying: 'As sick as a...'?");
        $('<form ><input type="radio" name="radiobtn" value="Partridge">Partridge</input>').appendTo('#answer1');
        $('<form ><input type="radio" name="radiobtn" value="Puffin">Puffin</input>').appendTo('#answer1');
        $('<form ><input type="radio" name="radiobtn" value="Parrot">Parrot</input>').appendTo('#answer1');
        $('<form ><input type="radio" name="radiobtn" value="Penguin">Penguin</input>').appendTo('#answer1');
    
    $('#question2').html("2: Which legal document states a person's wishes regarding the disposal of thier property after death?");
        $('<form ><input type="radio" name="radiobtn" value="Would">Would</input>').appendTo('#answer2');
        $('<form ><input type="radio" name="radiobtn" value="Shall">Shall</input>').appendTo('#answer2');
        $('<form ><input type="radio" name="radiobtn" value="Should">Should</input>').appendTo('#answer2');
        $('<form ><input type="radio" name="radiobtn" value="Will">Will</input>').appendTo('#answer2');

    $('#question3').html("3: Complete the title of the James Bond film: 'The Man With the...'?");
        $('<form ><input type="radio" name="radiobtn" value="Golden Tooth">Golden Tooth</input>').appendTo('#answer3');
        $('<form ><input type="radio" name="radiobtn" value="Golden Gun">Golden Gun</input>').appendTo('#answer3');
        $('<form ><input type="radio" name="radiobtn" value="Golden Eagle">Golden Eagle</input>').appendTo('#answer3');
        $('<form ><input type="radio" name="radiobtn" value="Golden Delicious">Golden Delicious</input>').appendTo('#answer3');

    $('#question4').html("4: Which of these fruits shares its name whith something superior or desirable?");
        $('<form ><input type="radio" name="radiobtn" value="Apricot">Apricot</input>').appendTo('#answer4');
        $('<form ><input type="radio" name="radiobtn" value="Grapefruit">Grapefruit</input>').appendTo('#answer4');
        $('<form ><input type="radio" name="radiobtn" value="Plum">Plum</input>').appendTo('#answer4');
        $('<form ><input type="radio" name="radiobtn" value="Mango">Mango</input>').appendTo('#answer4');

    $('#question5').html("5: In which sport do two teams pull at opposite ends of a rope?");
        $('<form ><input type="radio" name="radiobtn" value="Tug of war">Tug of war</input>').appendTo('#answer5');
        $('<form ><input type="radio" name="radiobtn" value="Basketball">Basketball</input>').appendTo('#answer5');
        $('<form ><input type="radio" name="radiobtn" value="Ice hockey">Ice hockey</input>').appendTo('#answer5');
        $('<form ><input type="radio" name="radiobtn" value="Polo">Polo</input>').appendTo('#answer5');

    $('#question6').html("6: Sherpas and Gurkas are native to which country?");
        $('<form ><input type="radio" name="radiobtn" value="Russia">Russia</input>').appendTo('#answer6');
        $('<form ><input type="radio" name="radiobtn" value="Ecuador">Ecuador</input>').appendTo('#answer6');
        $('<form ><input type="radio" name="radiobtn" value="Nepal">Nepal</input>').appendTo('#answer6');
        $('<form ><input type="radio" name="radiobtn" value="Morocco">Morocco</input>').appendTo('#answer6');

    $('#question7').html("7: Prime Minister Tony Blair was born in which country?");
        $('<form ><input type="radio" name="radiobtn" value="England">England</input>').appendTo('#answer7');
        $('<form ><input type="radio" name="radiobtn" value="Northern Ireland">Northern Ireland</input>').appendTo('#answer7');
        $('<form ><input type="radio" name="radiobtn" value="Scotland">Scotland</input>').appendTo('#answer7');
        $('<form ><input type="radio" name="radiobtn" value="Wales">Wales</input>').appendTo('#answer7');

    $('#question8').html("8: Whose autobiography has the title 'A Long Walk To Freedom'?");
        $('<form ><input type="radio" name="radiobtn" value="Ranulph Fennes">Ranulph Fennes</input>').appendTo('#answer8');
        $('<form ><input type="radio" name="radiobtn" value="Mother Teresa">Mother Teresa</input>').appendTo('#answer8');
        $('<form ><input type="radio" name="radiobtn" value="Nelson Mandela">Nelson Mandela</input>').appendTo('#answer8');
        $('<form ><input type="radio" name="radiobtn" value="Mikhail Gorbachev">Mikhail Gorbachev</input>').appendTo('#answer8');

    $('#question9').html("9: Duffel coats are named after a town in which country?");
        $('<form ><input type="radio" name="radiobtn" value="Belgium">Belgium</input>').appendTo('#answer9');
        $('<form ><input type="radio" name="radiobtn" value="Holland">Holland</input>').appendTo('#answer9');
        $('<form ><input type="radio" name="radiobtn" value="Germany">Germany</input>').appendTo('#answer9');
        $('<form ><input type="radio" name="radiobtn" value="Austria">Austria</input>').appendTo('#answer9');

    $('#question10').html("10: Complete this stage instruction in Shakespeare's 'The Winter's Tale': 'Exit, persued by a...'?");
        $('<form ><input type="radio" name="radiobtn" value="Tiger">Tiger</input>').appendTo('#answer10');
        $('<form ><input type="radio" name="radiobtn" value="Clown">Clown</input>').appendTo('#answer10');
        $('<form ><input type="radio" name="radiobtn" value="Bear">Bear</input>').appendTo('#answer10');
        $('<form ><input type="radio" name="radiobtn" value="Dog">Dog</input>').appendTo('#answer10');

        $('<button><input type="submit" name="submitbtn"></input>').appendTo(done);
    }

 // create done button and click event
 $("submitbtn").on('click', function(){
    endGame();
    

 });
 

 function endGame(){
    $("#questions").empty();
    $("#questions").append("Correct: " + correct +" ");
    $("#questions").append("Wrong: " + wrong+" ");
    $("#questions").append("Total: " + total+" ");
 }
 



 



