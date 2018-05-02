var answer = parseInt(Math.random() * 100);
var couter_attempt = 0;
var playerNum = 1;

function playNum(playerNum) {
	document.getElementById("Player_number").innerHTML = "Игрок №" + playerNum + " введите число от 0 до 100: ";
}

playNum(playerNum);

function playGuess2() {

	if (couter_attempt > 11){
		document.getElementById("couter_attempt1").innerHTML = " ";
	    document.getElementById("couter_attempt2").innerHTML = " ";
	    document.getElementById("couter_attempt3").innerHTML = " ";
	    document.getElementById("couter_attempt4").innerHTML = " ";
	    document.getElementById("couter_attempt5").innerHTML = " ";
	    document.getElementById("couter_attempt6").innerHTML = " ";
	    document.getElementById("couter_attempt7").innerHTML = " ";
	    document.getElementById("couter_attempt8").innerHTML = " ";
	    document.getElementById("couter_attempt9").innerHTML = " ";
	    document.getElementById("couter_attempt10").innerHTML = " ";
	    document.getElementById("couter_attempt11").innerHTML = " ";
	    document.getElementById("couter_attempt12").innerHTML = " ";

	    couter_attempt = 0;
	}
	
    while (true) {
	    	var userAnswer1 = document.getElementById("UserNumber").value;
	        	    	
	    	userAnswer1 = parseInt(userAnswer1);
	        
	    	if (userAnswer1 > answer) {
	    		document.getElementById("Current_answer").innerHTML = "Ваш ответ слишком большой.";
		    	couter_attempt++;
		    	document.getElementById("couter_attempt" + couter_attempt).innerHTML = couter_attempt + ". Игрок №" + playerNum + ", ваш ответ слишком большой.";	
		    		if (playerNum == 1) {
		            playerNum = 2;
		         } else {
		            playerNum = 1;
		         }
		         playNum(playerNum);
	    		break;	    	
	    	} else if (userAnswer1 < answer) {
	    		document.getElementById("Current_answer").innerHTML = "Ваш ответ слишком маленький.";
	    		couter_attempt++;
	    		document.getElementById("couter_attempt" + couter_attempt).innerHTML = couter_attempt + ". Игрок №" + playerNum + ", ваш ответ слишком маленький.";
	    		if (playerNum == 1) {
		            playerNum = 2;
		         } else {
		            playerNum = 1;
		         }
		         playNum(playerNum);
	    		break;
	    	} else if (userAnswer1 == answer) {
	    		document.getElementById("Current_answer").innerHTML = "Вы угадали! Игрок №" + playerNum + ", поздравляем с победой!";
	    		answer = parseInt(Math.random() * 100);
	    		couter_attempt = 0;
	    		if (playerNum == 1) {
		            playerNum = 2;
		         } else {
		            playerNum = 1;
		         }
		         playNum(playerNum);
		        document.getElementById("couter_attempt1").innerHTML = " ";
	    		document.getElementById("couter_attempt2").innerHTML = " ";
	    		document.getElementById("couter_attempt3").innerHTML = " ";
	    		document.getElementById("couter_attempt4").innerHTML = " ";
	    		document.getElementById("couter_attempt5").innerHTML = " ";
	    		document.getElementById("couter_attempt6").innerHTML = " ";
	    		document.getElementById("couter_attempt7").innerHTML = " ";
	    		document.getElementById("couter_attempt8").innerHTML = " ";
	    		document.getElementById("couter_attempt9").innerHTML = " ";
	    		document.getElementById("couter_attempt10").innerHTML = " ";
	    		document.getElementById("couter_attempt11").innerHTML = " ";
	    		document.getElementById("couter_attempt12").innerHTML = " ";
	    		break;
	    	} else {
	    		document.getElementById("Current_answer").innerHTML = "Ваш ответ не является числом.";
	            couter_attempt++;
	            document.getElementById("couter_attempt" + couter_attempt).innerHTML = couter_attempt + ". Игрок №" + playerNum + ", ваш ответ не является числом.";
	            break;
	    	}        
	         
         }   
}