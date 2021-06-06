const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer 
let question = 'Who was the first American woman in space? ';
let correctAnswer ='Sally Ride';
let candidateAnswer ="" ;
let questions;
let correctAnswers;
let candidateAnswers='';
let numberOfCorrAns =0;
let percScored =0.0;
let grade;
//question = "Who was the first American woman in space? ";
//correctAnswer = "Sally Ride";
questions = ['Who was the first American woman in space? ', 'True or false: 5 kilometer == 5000 meters? ', '(5 + 3)/2 * 10 = ? ','Given the array [8, \'Orbit\', \'Trajectory\', 45], what entry is at index 2? ', 'What is the minimum crew size for the ISS? '];
correctAnswers = ['Sally Ride','true','40','Trajectory','3'];
//candidateAnswers="";
candidateAnswers = [""];         

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please enter the candidate name: ");

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
//candidateAnswer = input.question(question);
  for (i = 0; i < questions.length; i++) {
    candidateAnswers[i] = input.question(`${i+1})` +  questions[i]);
    let yourAns = `Your Answer:  ${candidateAnswers[i]}`;
    let corrAns = `Correct Answer: ${correctAnswers[i]}`;
  //console.log("Your Answer: "+candidateAnswers[i]);
  //console.log("Correct Answer: "+correctAnswers[i]);
    console.log(yourAns);
    console.log(corrAns);
      if(correctAnswers[i].toUpperCase() === candidateAnswers[i].toUpperCase()){
       numberOfCorrAns++;
      }
 }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let ansScore = 0;
  //console.log(candidateAnswers.length);
  for (i=0; i < candidateAnswers.length;i++){
   
    if(correctAnswers[i].toUpperCase() === candidateAnswers[i].toUpperCase()){
        ansScore = ansScore + 20 ;
        
        //console.log(ansScore);
    } 
    
   // console.log(ansScore);
     //console.log(candidateAnswers);
  }
          percScored = (numberOfCorrAns/questions.length)*100;
   //console.log(numberOfCorrAns);
   //console.log(questions.length);
    
            if (percScored >= 80){
                  grade ="Passed";
            }else {
                 grade ="Failed";
      }

  
       //console.log(ansScore);
        //console.log(candidateAnswers);
        console.log(">>> Overall Grade: " + percScored +"% (" + numberOfCorrAns + " of " +  questions.length + " responses correct)" + "<<<");
        console.log(">>> Status: " + grade + " <<<");
        return ansScore;
}

  
    
/*if (candidateAnswer === correctAnswer){
   console.log("correct Answer");
} else{

  console.log("Incorrect Answer");
}
 
  return grade;*/


function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Candidate Name: "+ candidateName);
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