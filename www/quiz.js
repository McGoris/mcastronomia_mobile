
var totQuestions = questions.length;
var currentQuestion = Math.floor(Math.random()*totQuestions);
var values = [];
var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');


function checkIfOccur(cQ,values) {
	
	if (values.length == 0) {
		values[0] = cQ;
		return false;	
	}	
	else {

		for(var a=0; a < values.length ; a++){
			if (values[a]== cQ) {
				return true;
			}else{
				values[values.length+1]=cQ;
				return false;			
			}
			
		}		
		
	}
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionEl.textContent = q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};

function sprawdzQuiz() {
	
	var selectedOption = document.querySelector('input[type=radio]:checked');
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer  == answer)
	{		
		
		document.getElementById("id"+answer).style.background = "#007700";		
		
	} 
	
	else 
	
	{				
		
		document.getElementById("id"+answer).style.background = "#770000";
	   
	}
	setTimeout(function(){ location.reload(); }, 1000);
	
}


function loadNextQuestion() {
		
	
	var selectedOption = document.querySelector('input[type=radio]:checked');
	
	
	
	var answer = selectedOption.value;
	
	
			
	if(questions[currentQuestion].answer  == answer)
	{		
		
		document.getElementById("id"+answer).style.background = "#007700";		
		
	} 
	
	else 
	
	{				
		
		document.getElementById("id"+answer).style.background = "#770000";
	   
	}
	//while (true){	
	//	if (checkIfOccur(currentQuestion, values) == false) {
	//		break;		
//		}	else {
	//			currentQuestion = Math.floor(Math.random()*totQuestions);		
//	}	
//	}

	
	currentQuestion = Math.floor(Math.random()*totQuestions);
	selectedOption.checked = false;	
	setTimeout(function(){ location.reload(); }, 1000);

	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);
