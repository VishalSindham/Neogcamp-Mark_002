var readlineSync = require('readline-sync');

var userName = readlineSync.question("Welcome , BTW who is playing this game .. ?");

var score = 0 ;


function play(question,answer){

var userAnswer = readlineSync.question(question);

if (userAnswer === answer) {
  console.log("Correct !");
  score = score +1 ;
}
else {
  console.log('oops .. This is the  answer ', answer);
}
console.log("Current Score is  "+ score);
console.log("-------------------------")
}

var questions =[
    {
      question:"True or False --- > The heist was the brainchild of the Professor ? \n a)False  \n b)True \n ",
      answer:"a", 
    },
    {
    question:"The show is actually called La Casa de Papel, which literally translates to ____\n a)The Paper House \n b)The Outcasts\n",
    answer:"a", 
    },
    {
      question: "In which country does Raquel track the Professor after the first heist??\n a)Thailand \n b)Philippines \n ",
      answer:"b",
    },
    {
      question: "What relationship did Sergio Marquina and Berlin share?  \n a)lovers \n b)brothers \n  ",
      answer: "b",
    },
    {
      question:" “Let the matriarchy begin”: Whose words are these? \n a)Nairobi \n b)Tokyo\n",
      answer: "a",
    },
        {
      question:"Whose glasses contained a bug? \n a)Angel \n b)Raquel \n",
      answer: "a",
    },
    {
      question:" Even the professor was bestowed with an unofficial city name. What place is he named after?\na)Vatican City \n b)Las Vegas\n ",
      answer:"a",
    }

  ];

for(var i=0;i<questions.length;i = i+1){
  var currentQuestion= questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}
console.log(userName + " You have scored " + score + " out of " + questions.length)


console.log('Bye ' + userName ) ;