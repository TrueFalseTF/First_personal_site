var counterTrueAnswer = 0;
function askQuestion(textBoxId, trueAnswer, AnswerResalt, couter_attempt_askQ) {
	    var userAnswer = document.getElementById(textBoxId).value;
		if (userAnswer.toLowerCase() == trueAnswer) {
			document.getElementById(AnswerResalt).innerHTML = "Правильно.";
			counterTrueAnswer++;
			document.getElementById(couter_attempt_askQ).innerHTML = couter_attempt + ". Правильно.";
		} else {
			document.getElementById(AnswerResalt).innerHTML = "Вы ошиблись.";
			document.getElementById(couter_attempt_askQ).innerHTML = couter_attempt + ". Вы ошиблись.";
		}
    }  	

var couter_attempt = 1;

function playPazzle() {

	if (couter_attempt > 3){
    	couter_attempt = 1;    

    document.getElementById("couter_attempt1.1").innerHTML = " ";
    document.getElementById("couter_attempt2.1").innerHTML = " ";
    document.getElementById("couter_attempt3.1").innerHTML = " ";
    document.getElementById("couter_attempt1.2").innerHTML = " ";
    document.getElementById("couter_attempt2.2").innerHTML = " ";
    document.getElementById("couter_attempt3.2").innerHTML = " ";
    document.getElementById("couter_attempt1.3").innerHTML = " ";
    document.getElementById("couter_attempt2.3").innerHTML = " ";
    document.getElementById("couter_attempt3.3").innerHTML = " ";
    document.getElementById("couter_attempt1.4").innerHTML = " ";
    document.getElementById("couter_attempt2.4").innerHTML = " ";
    document.getElementById("couter_attempt3.4").innerHTML = " ";
}

	counterTrueAnswer = 0;

    askQuestion("UserAnswer1", "сигнал", "AnswerResalt1", "couter_attempt1." + couter_attempt);
    
    askQuestion("UserAnswer2", "информация", "AnswerResalt2", "couter_attempt2." + couter_attempt);
    
    askQuestion("UserAnswer3", "смысл", "AnswerResalt3", "couter_attempt3." + couter_attempt);

    couter_attempt++;

    document.getElementById("resalt").innerHTML = "Общие количество правильных ответов: " + counterTrueAnswer;/*Теория смыслов*/
}
