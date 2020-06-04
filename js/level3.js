var question = 1;
var resultado = 0;
var total = 26;
var mensagem="";
var errou = 0;

function changeActiveClassesAfterClick(question) {
  var currentQuestionElement = document.getElementById("question-n"+(question-1));
  var nextQuestionElement = document.getElementById("question-n"+question);
  currentQuestionElement.classList.remove('active');
  nextQuestionElement.classList.add('active');
  }

function goToNextQuestion() {
  question++;
  changeActiveClassesAfterClick(question);
  if(question==9){
  document.getElementById("btnnext").style.display = "none";
 document.getElementById('acertou').innerHTML = "<h1>Points: <br>"+resultado+"</h1>";
var text  = document.getElementById('acertou');
		            	text.style.color="green";
document.getElementById('total').innerHTML = "<h1>Total: <br>"+total+"</h1>";      	
errou = total - resultado;
 document.getElementById('errou').innerHTML = "<h1>Errou: <br>"+errou+"</h1>";
 var text  = document.getElementById('errou');
		            	text.style.color="red";

}  
}

function questao1(){
		  var pacote = document.getElementsByName('Pacote');
		    for (var i = 0; i < pacote.length; i++){
		        if ( pacote[i].checked ) {
		            if(pacote[i].value == "Pacote i"){
		            	var text  = document.getElementById('opcao1');
		            	text.style.color="red";
		            	var el = document.getElementById("errado1");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote ii"){
		            	var text  = document.getElementById('opcao2');
		            	resultado++;
						text.style.color="green";
						var el = document.getElementById("certo1");
		            	el.innerHTML="<img src='img/certo.png'>";
		            }else if (pacote[i].value == "Pacote iii") {
		            	var text  = document.getElementById('opcao3');
						text.style.color="red";
						var el = document.getElementById("errado2");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote iiii") {
		            	var text  = document.getElementById('opcao4');
						text.style.color="red";
		            	var el = document.getElementById("errado3");
		            	el.innerHTML="<img src='img/errado.png'>";

		            }
		        }
		    }
		}

function questao2(){

	var palavra = document.getElementById("alt1").value;
	if (palavra == "Fold" ) {
	var text  = document.getElementById('alt1');
						text.style.color="green";
						resultado++;
	} else{
	var text  = document.getElementById('alt1');
						text.style.color="red";
	}

	var palavra1 = document.getElementById("alt2").value;
	if (palavra1 == "intuition" ) {
	var text  = document.getElementById('alt2');
						text.style.color="green";
						resultado++;
	}else{
	var text  = document.getElementById('alt2');
						text.style.color="red";
	}

	var palavra = document.getElementById("alt3").value;
	if (palavra == "spades" ) {
	var text  = document.getElementById('alt3');
						text.style.color="green";
						resultado++;
	}else{
	var text  = document.getElementById('alt3');
						text.style.color="red";
	}

	var palavra = document.getElementById("al4").value;
	if (palavra == "I've" ) {
	var text  = document.getElementById('al4');
						text.style.color="green";
						resultado++;
	}else{
	var text  = document.getElementById('al4');
						text.style.color="red";
	}

	var palavra = document.getElementById("alt5").value;
	if (palavra == "nobody" ) {
	var text  = document.getElementById('alt5');
						text.style.color="green";
						resultado++;
	}else{
	var text  = document.getElementById('alt5');
						text.style.color="red";
	}
	var palavra = document.getElementById("alt6").value;
	if (palavra == "nobody" ) {
	var text  = document.getElementById('alt6');
						text.style.color="green";
						resultado++;
	}else{
	var text  = document.getElementById('alt6');
						text.style.color="red";
	}

	var palavra = document.getElementById("alt7").value;
	if (palavra == "hard" ) {
	var text  = document.getElementById('alt7');
						text.style.color="green";
						resultado++;
	}else{
	var text  = document.getElementById('alt7');
						text.style.color="red";
	}

	var palavra = document.getElementById("alt8").value;
	if (palavra == "pair" ) {
	var text  = document.getElementById('alt8');
						text.style.color="green";
						resultado++;
	}else{
	var text  = document.getElementById('alt8');
						text.style.color="red";
	}

	var palavra = document.getElementById("alt9").value;
	if (palavra == "gambling" ) {
	var text  = document.getElementById('alt9');
						text.style.color="green";
						resultado++;
	}else{
	var text  = document.getElementById('alt9');
						text.style.color="red";
	}

	var palavra = document.getElementById("alt10").value;
	if (palavra == "without" ) {
	var text  = document.getElementById('alt10');
						text.style.color="green";
						resultado++;
	}else{
	var text  = document.getElementById('alt10');
						text.style.color="red";
	}
	var palavra = document.getElementById("alt11").value;
	if (palavra == "rough" ) {
	var text  = document.getElementById('alt11');
						text.style.color="green";
						resultado++;
	}else{
	var text  = document.getElementById('alt11');
						text.style.color="red";
	}
}

function questao3(){
		  var pacote = document.getElementsByName('Pacote');
		    for (var i = 0; i < pacote.length; i++){
		        if ( pacote[i].checked ) {
		            if(pacote[i].value == "Pacote i"){
		            	var text  = document.getElementById('op5');
		            	text.style.color="red";
		            	var el = document.getElementById("f");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote ii"){
		            	var text  = document.getElementById('opcao6');
						text.style.color="red";
						var el = document.getElementById("5");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote iii") {
		            	var text  = document.getElementById('opcao7');
						text.style.color="red";
						var el = document.getElementById("6");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote iiii") {
		            	var text  = document.getElementById('opcao8');
						text.style.color="green";
						resultado++;
		            	var el = document.getElementById("b");
		            	el.innerHTML="<img src='img/certo.png'>";

		            }
		        }
		    }
		}


function questao4(){
		  var pacote = document.getElementsByName('Pacote');
		    for (var i = 0; i < pacote.length; i++){
		        if ( pacote[i].checked ) {
		            if(pacote[i].value == "Pacote i"){
		            	var text  = document.getElementById('opcao9');
		            	text.style.color="green";
		            	resultado++;
		            	var el = document.getElementById("c");
		            	el.innerHTML="<img src='img/certo.png'>";
		            }else if (pacote[i].value == "Pacote ii"){
		            	var text  = document.getElementById('opcao10');
						text.style.color="red";
						var el = document.getElementById("7");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote iii") {
		            	var text  = document.getElementById('opcao11');
						text.style.color="red";
						var el = document.getElementById("8");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote iiii") {
		            	var text  = document.getElementById('op12');
						text.style.color="red";
		            	var el = document.getElementById("9");
		            	el.innerHTML="<img src='img/errado.png'>";

		            }
		        }
		    }
		}

function questao5(){

	var palavra = document.getElementById("a1").value;
	if (palavra == "gong" ) {
	var text  = document.getElementById('a1');
						text.style.color="green";
						resultado++;
	} else{
	var text  = document.getElementById('a1');
						text.style.color="red";
	}

	var palavra1 = document.getElementById("a2").value;
	if (palavra1 == "bear" ) {
	var text  = document.getElementById('a2');
						text.style.color="green";
						resultado++;
	}else{
	var text  = document.getElementById('a2');
						text.style.color="red";
	}

	var palavra = document.getElementById("a3").value;
	if (palavra == "vein" ) {
	var text  = document.getElementById('a3');
						text.style.color="green";
						resultado++;
	}else{
	var text  = document.getElementById('a3');
						text.style.color="red";
	}

	var palavra = document.getElementById("a4").value;
	if (palavra == "cheer" ) {
	var text  = document.getElementById('a4');
						text.style.color="green";
						resultado++;
	}else{
	var text  = document.getElementById('a4');
						text.style.color="red";
	}

	var palavra = document.getElementById("a5").value;
	if (palavra == "loud" ) {
	var text  = document.getElementById('a5');
						text.style.color="green";
						resultado++;
	}else{
	var text  = document.getElementById('a5');
						text.style.color="red";
	}
	var palavra = document.getElementById("a6").value;
	if (palavra == "overheard" ) {
	var text  = document.getElementById('a6');
						text.style.color="green";
						resultado++;
	}else{
	var text  = document.getElementById('a6');
						text.style.color="red";
	}

	var palavra = document.getElementById("a7").value;
	if (palavra == "geeks" ) {
	var text  = document.getElementById('a7');
						text.style.color="green";
						resultado++;
	}else{
	var text  = document.getElementById('a7');
						text.style.color="red";
	}

	var palavra = document.getElementById("a8").value;
	if (palavra == "kunst" ) {
	var text  = document.getElementById('a8');
						text.style.color="green";
						resultado++;
	}else{
	var text  = document.getElementById('a8');
						text.style.color="red";
	}

	var palavra = document.getElementById("a9").value;
	if (palavra == "suddenly" ) {
	var text  = document.getElementById('a9');
						text.style.color="green";
						resultado++;
	}else{
	var text  = document.getElementById('a9');
						text.style.color="red";
	}
}

function questao6(){
		  var pacote = document.getElementsByName('Pacote');
		    for (var i = 0; i < pacote.length; i++){
		        if ( pacote[i].checked ) {
		            if(pacote[i].value == "Pacote i"){
		            	var text  = document.getElementById('opcao17');
		            	text.style.color="red";
		            	var el = document.getElementById("13");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote ii"){
		            	var text  = document.getElementById('opcao18');
						text.style.color="red";
						var el = document.getElementById("14");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote iii") {
		            	var text  = document.getElementById('opcao19');
						text.style.color="green";
						resultado++;
						var el = document.getElementById("d");
		            	el.innerHTML="<img src='img/certo.png'>";
		            }else if (pacote[i].value == "Pacote iiii") {
		            	var text  = document.getElementById('opcao20');
						text.style.color="red";
		            	var el = document.getElementById("15");
		            	el.innerHTML="<img src='img/errado.png'>";

		            }
		        }
		    }
		}

function questao7(){
		  var pacote = document.getElementsByName('Pacote');
		    for (var i = 0; i < pacote.length; i++){
		        if ( pacote[i].checked ) {
		            if(pacote[i].value == "Pacote i"){
		            	var text  = document.getElementById('opcao21');
		            	text.style.color="red";
		            	var el = document.getElementById("16");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote ii"){
		            	var text  = document.getElementById('opcao22');
						text.style.color="red";
						var el = document.getElementById("17");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote iii") {
		            	var text  = document.getElementById('opcao23');
						text.style.color="green";
						resultado++;
						var el = document.getElementById("e");
		            	el.innerHTML="<img src='img/certo.png'>";
		            }else if (pacote[i].value == "Pacote iiii") {
		            	var text  = document.getElementById('op24');
						text.style.color="red";
		            	var el = document.getElementById("18");
		            	el.innerHTML="<img src='img/errado.png'>";

		            }
		        }
		    }
		}

function questao8(){
		  var pacote = document.getElementsByName('Pacote');
		    for (var i = 0; i < pacote.length; i++){
		        if ( pacote[i].checked ) {
		            if(pacote[i].value == "Pacote i"){
		            	var text  = document.getElementById('final1');
		            	text.style.color="green";
		            	resultado++;
		            	var el = document.getElementById("w");
		            	el.innerHTML="<img src='img/certo.png'>";
		            }else if (pacote[i].value == "Pacote ii"){
		            	var text  = document.getElementById('final2');
						text.style.color="red";
						var el = document.getElementById("x");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote iii") {
		            	var text  = document.getElementById('final3');
						text.style.color="red";
						var el = document.getElementById("y");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote iiii") {
		            	var text  = document.getElementById('final4');
						text.style.color="red";
		            	var el = document.getElementById("z");
		            	el.innerHTML="<img src='img/errado.png'>";

		            }
		        }
		    }
		}
