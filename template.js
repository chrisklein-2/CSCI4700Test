
let numQuestions = 3;
let numCorrect = 0;
let questionsAnswered = 0;

function correct() {
    //document.getElementById("answer").innerHTML = "Well done. You are correct!";
    numCorrect++;
    questionsAnswered++;
    deButton();
}
function incorrect() {
    //document.getElementById("answer").innerHTML = "Sorry, that isn't the right answer!";
    questionsAnswered++;

    deButton();
}

function deButton(){
  let button = document.getElementById("correct");
  button.disabled = true; // Disable the button
  let buttons = document.querySelectorAll(".incorrect"); // Select all buttons with class "disable-btn"
    buttons.forEach(button => {
        button.disabled = true; // Disable each button
    });
}

window.onload = function(){
  setQuestion1();
  setQuestion2();

};

function setQuestion1(){
    let list = document.getElementById("question1"); // Get the list by ID
    let items = Array.from(list.children); // Convert the list items (li elements) to an array

    for (let i = items.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // Get a random index
        list.appendChild(items[j]); // Move the random item to the new position
    }
}

function setQuestion2(){
  let number = getRandomInt(2,6);
  document.getElementById("randomNum").innerHTML = number;

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkIfRight(){
  questionsAnswered++;
  let button = document.getElementById("blank");
  button.disabled = true;

  let answer = document.getElementById("fillInAnswer").value;

  let question = document.getElementById("randomNum").innerHTML;

  if(answer == question*4){
    //document.getElementById("filledInBlank").innerHTML = "Well done. You are correct!";
    numCorrect++;
  }
  else {
    //document.getElementById("filledInBlank").innerHTML = "Sorry, that isn't the right answer!";
    //continue;
  }
}

function checkIfHelloRight() {
  questionsAnswered++;
  let button = document.getElementById("helloWorld");
  button.disabled = true;

  let answer = document.getElementById("helloWorldAnswer").value;

  let correct = 'cout';

  if(answer==correct || answer == "printf"){
   // document.getElementById("helloWorldCorrect").innerHTML = "You are correct!";
    numCorrect++;
  }
  else {
    //document.getElementById("helloWorldCorrect").innerHTML = "You are wrong!";
   // continue;
  }

}

function question4Button(){

  let answer = document.getElementById("question4").value;

  console.log(answer);

}

function done(){
  if(questionsAnswered!=numQuestions){
    document.getElementById("done").innerHTML = "Please answer all the questions";
    return;

  }
  let score = numCorrect/numQuestions*100;
  score = Math.trunc(score * 100) / 100;
  var pass;
  if(score>64){
    pass = "You passed!"
  }
  else {
    pass = "You failed!"
  }

  document.getElementById("done").innerHTML = "Your result is " + score + "%! " + pass;

  let button = document.getElementById("doneButton");
  button.disabled = true; // Disable the button

}
