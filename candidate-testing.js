const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName ="";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let questions;
let correctAnswers;
let candidateAnswers;
question = "Who was the first American woman in space?.";
correctAnswer = "Sally Ride";
candidateAnswer="";

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Please enter the candidate name");
//console.log(candidateName);

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
candidateAnswer = input.question(question);

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

/*if (candidateAnswer === correctAnswer){
  console. log("Correct Answer!");

} else{
  console.log("Incorrect Answer..Try Again!");
} checking */

 
  
if (candidateAnswer === correctAnswer){
   console.log("correctAnswer");
} else{

  console.log("Incorrect");
}
  let grade;
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Welcome to Quiz " + candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};