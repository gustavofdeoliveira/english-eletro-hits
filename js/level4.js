var question = 1;
var resultado = 0;
var total = 8;
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
 document.getElementById('errou').innerHTML = "<h1>Fail: <br>"+errou+"</h1>";
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
		            	text.style.color="green";
		            	resultado++;
		            	var el = document.getElementById("a");
		            	el.innerHTML="<img src='img/certo.png'>";
		            }else if (pacote[i].value == "Pacote ii"){
		            	var text  = document.getElementById('opcao2');
						text.style.color="red";
						var el = document.getElementById("b1");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote iii") {
		            	var text  = document.getElementById('opcao3');
						text.style.color="red";
						var el = document.getElementById("b2");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote iiii") {
		            	var text  = document.getElementById('opcao4');
						text.style.color="red";
		            	var el = document.getElementById("b3");
		            	el.innerHTML="<img src='img/errado.png'>";

		            }
		        }
		    }
		}


function questao2(){
		  var pacote = document.getElementsByName('Pacote');
		    for (var i = 0; i < pacote.length; i++){
		        if ( pacote[i].checked ) {
		            if(pacote[i].value == "Pacote i"){
		            	var text  = document.getElementById('op5');
		            	text.style.color="red";
		            	var el = document.getElementById("e4");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote ii"){
		            	var text  = document.getElementById('op6');
						text.style.color="red";
						var el = document.getElementById("e5");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote iii") {
		            	var text  = document.getElementById('op7');
						text.style.color="red";
						var el = document.getElementById("e6");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote iiii") {
		            	var text  = document.getElementById('op8');
						text.style.color="green";
						resultado++;
		            	var el = document.getElementById("c2");
		            	el.innerHTML="<img src='img/certo.png'>";

		            }
		        }
		    }
		}

function questao3(){
		  var pacote = document.getElementsByName('Pacote');
		    for (var i = 0; i < pacote.length; i++){
		        if ( pacote[i].checked ) {
		            if(pacote[i].value == "Pacote i"){
		            	var text  = document.getElementById('opcao5');
		            	text.style.color="red";
		            	var el = document.getElementById("errado4");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote ii"){
		            	var text  = document.getElementById('opcao6');
						text.style.color="red";
						var el = document.getElementById("errado5");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote iii") {
		            	var text  = document.getElementById('opcao7');
						text.style.color="green";
						resultado++;
						var el = document.getElementById("certo2");
		            	el.innerHTML="<img src='img/certo.png'>";
		            }else if (pacote[i].value == "Pacote iiii") {
		            	var text  = document.getElementById('opcao8');
						text.style.color="red";
		            	var el = document.getElementById("errado6");
		            	el.innerHTML="<img src='img/errado.png'>";

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
		            	text.style.color="red";
		            	var el = document.getElementById("errado7");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote ii"){
		            	var text  = document.getElementById('opcao10');
						text.style.color="green";
						resultado++;
						var el = document.getElementById("certo4");
		            	el.innerHTML="<img src='img/certo.png'>";
		            }else if (pacote[i].value == "Pacote iii") {
		            	var text  = document.getElementById('opcao11');
						text.style.color="red";
						var el = document.getElementById("errado8");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote iiii") {
		            	var text  = document.getElementById('op12');
						text.style.color="red";
		            	var el = document.getElementById("errado9");
		            	el.innerHTML="<img src='img/errado.png'>";

		            }
		        }
		    }
		}

function questao5(){
		  var pacote = document.getElementsByName('Pacote');
		    for (var i = 0; i < pacote.length; i++){
		        if ( pacote[i].checked ) {
		            if(pacote[i].value == "Pacote i"){
		            	var text  = document.getElementById('opcao13');
		            	text.style.color="red";
		            	var el = document.getElementById("errado10");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote ii"){
		            	var text  = document.getElementById('opcao14');
						text.style.color="red";
						var el = document.getElementById("errado11");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote iii") {
		            	var text  = document.getElementById('opcao15');
						text.style.color="red";
						var el = document.getElementById("errado12");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote iiii") {
		            	var text  = document.getElementById('op16');
						text.style.color="green";
						resultado++;
		            	var el = document.getElementById("certo5");
		            	el.innerHTML="<img src='img/certo.png'>";

		            }
		        }
		    }
		}

function questao6(){
		  var pacote = document.getElementsByName('Pacote');
		    for (var i = 0; i < pacote.length; i++){
		        if ( pacote[i].checked ) {
		            if(pacote[i].value == "Pacote i"){
		            	var text  = document.getElementById('opcao17');
		            	text.style.color="red";
		            	var el = document.getElementById("errado13");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote ii"){
		            	var text  = document.getElementById('opcao18');
						text.style.color="red";
						var el = document.getElementById("errado14");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote iii") {
		            	var text  = document.getElementById('opcao19');
						text.style.color="green";
						resultado++;
						var el = document.getElementById("certo6");
		            	el.innerHTML="<img src='img/certo.png'>";
		            }else if (pacote[i].value == "Pacote iiii") {
		            	var text  = document.getElementById('opcao20');
						text.style.color="red";
		            	var el = document.getElementById("errado15");
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
		            	var el = document.getElementById("errado16");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote ii"){
		            	var text  = document.getElementById('op22');
						text.style.color="green";
						resultado++;
						var el = document.getElementById("certo9");
		            	el.innerHTML="<img src='img/certo.png'>";
		            }else if (pacote[i].value == "Pacote iii") {
		            	var text  = document.getElementById('opcao23');
						text.style.color="red";
						var el = document.getElementById("17");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote iiii") {
		            	var text  = document.getElementById('op24');
						text.style.color="red";
		            	var el = document.getElementById("errado18");
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
		            	var text  = document.getElementById('opcao25');
		            	text.style.color="red";
		            	var el = document.getElementById("errado19");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote ii"){
		            	var text  = document.getElementById('opcao26');
						text.style.color="red";
						var el = document.getElementById("errado20");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote iii") {
		            	var text  = document.getElementById('opcao27');
						text.style.color="red";
						var el = document.getElementById("errado21");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote iiii") {
		            	var text  = document.getElementById('opcao28');
						text.style.color="green";
						resultado++;
		            	var el = document.getElementById("co8");
		            	el.innerHTML="<img src='img/certo.png'>";

		            }
		        }
		    }
		}