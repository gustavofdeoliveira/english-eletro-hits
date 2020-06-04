var question = 1;
var resultado = 0;
var total = 17;
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
                        text.style.color="red";
                        var el = document.getElementById("errado1");
                        el.innerHTML="<img src='img/errado.png'>";
                    }else if (pacote[i].value == "Pacote ii"){
                        var text  = document.getElementById('opcao2');
                        text.style.color="red";
                        var el = document.getElementById("errado2");
                        el.innerHTML="<img src='img/errado.png'>";
                    }else if (pacote[i].value == "Pacote iii") {
                        var text  = document.getElementById('opcao3');
                        text.style.color="red";
                        var el = document.getElementById("errado3");
                        el.innerHTML="<img src='img/errado.png'>";
                    }else if (pacote[i].value == "Pacote iiii") {
                        var text  = document.getElementById('opcao4');
                        text.style.color="green";
                        resultado++;
                        var el = document.getElementById("certo1");
                        el.innerHTML="<img src='img/certo.png'>";
                    }
                }
            }
        }

function questao2(){
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
                        var el = document.getElementById("c2");
                        el.innerHTML="<img src='img/certo.png'>";
                    }else if (pacote[i].value == "Pacote iiii") {
                        var text  = document.getElementById('op8');
                        text.style.color="red";
                        var el = document.getElementById("errado6");
                        el.innerHTML="<img src='img/errado.png'>";

                    }
                }
            }
        }
function questao3(){
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



function questao4(){
          var pacote = document.getElementsByName('Pacote');
            for (var i = 0; i < pacote.length; i++){
                if ( pacote[i].checked ) {
                    if(pacote[i].value == "Pacote i"){
                        var text  = document.getElementById('op9');
                        text.style.color="green";
                        resultado++;
                        var el = document.getElementById("c4");
                        el.innerHTML="<img src='img/certo.png'>";
                    }else if (pacote[i].value == "Pacote ii"){
                        var text  = document.getElementById('op10');
                        text.style.color="red";
                        var el = document.getElementById("e7");
                        el.innerHTML="<img src='img/errado.png'>";
                    }else if (pacote[i].value == "Pacote iii") {
                        var text  = document.getElementById('op11');
                        text.style.color="red";
                        var el = document.getElementById("e8");
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
                        var text  = document.getElementById('opcao30');
                        text.style.color="red";
                        var el = document.getElementById("e1");
                        el.innerHTML="<img src='img/errado.png'>";
                    }else if (pacote[i].value == "Pacote ii"){
                        var text  = document.getElementById('opcao31');
                        text.style.color="red";
                        var el = document.getElementById("e2");
                        el.innerHTML="<img src='img/errado.png'>";
                    }else if (pacote[i].value == "Pacote iii") {
                        var text  = document.getElementById('opcao32');
                        text.style.color="red";
                        var el = document.getElementById("e3");
                        el.innerHTML="<img src='img/errado.png'>";
                    }else if (pacote[i].value == "Pacote iii") {
                        var text  = document.getElementById('opcao33');
                        text.style.color="green";
                        resultado++;
                        var el = document.getElementById("c5");
                        el.innerHTML="<img src='img/certo.png'>";
                    }
                }
            }
        }

function questao5(){
          var pacote = document.getElementsByName('Pacote');
            for (var i = 0; i < pacote.length; i++){
                if ( pacote[i].checked ) {
                    if(pacote[i].value == "Pacote i"){
                        var text  = document.getElementById('opcao34');
                        text.style.color="red";
                        var el = document.getElementById("e3");
                        el.innerHTML="<img src='img/errado.png'>";
                    }else if (pacote[i].value == "Pacote ii"){
                        var text  = document.getElementById('opcao35');
                        text.style.color="green";
                        resultado++;
                        var el = document.getElementById("c6");
                        el.innerHTML="<img src='img/certo.png'>";
                    }else if (pacote[i].value == "Pacote iii") {
                        var text  = document.getElementById('opcao36');
                        text.style.color="red";
                        var el = document.getElementById("e4");
                        el.innerHTML="<img src='img/errado.png'>";
                    }else if (pacote[i].value == "Pacote iiii") {
                        var text  = document.getElementById('o37');
                        text.style.color="red";
                        var el = document.getElementById("e5");
                        el.innerHTML="<img src='img/errado.png'>";

                    }
                }
            }
        }

function questao7(){

    var palavra = document.getElementById("b1").value;
    if (palavra == "dollars" ) {
    var text  = document.getElementById('b1');
                        text.style.color="green";
                        resultado++;
    } else{
    var text  = document.getElementById('b1');
                        text.style.color="red";
    }

    var palavra1 = document.getElementById("b2").value;
    if (palavra1 == "fugazy" ) {
    var text  = document.getElementById('b2');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('b2');
                        text.style.color="red";
    }

    var palavra = document.getElementById("b3").value;
    if (palavra == "spicy" ) {
    var text  = document.getElementById('b3');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('b3');
                        text.style.color="red";
    }

    var palavra = document.getElementById("b4").value;
    if (palavra == "forbidden" ) {
    var text  = document.getElementById('b4');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('b4');
                        text.style.color="red";
    }

    var palavra = document.getElementById("b5").value;
    if (palavra == "heart" ) {
    var text  = document.getElementById('b5');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('b5');
                        text.style.color="red";
    }
    var palavra = document.getElementById("b6").value;
    if (palavra == "white" ) {
    var text  = document.getElementById('b6');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('b6');
                        text.style.color="red";
    }

    var palavra = document.getElementById("b7").value;
    if (palavra == "horse" ) {
    var text  = document.getElementById('b7');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('b7');
                        text.style.color="red";
    }

    var palavra = document.getElementById("b8").value;
    if (palavra == "carriage" ) {
    var text  = document.getElementById('b8');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('b8');
                        text.style.color="red";
    }

    var palavra = document.getElementById("b9").value;
    if (palavra == "karats" ) {
    var text  = document.getElementById('b9');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('b9');
                        text.style.color="red";
    }

    var palavra = document.getElementById("b10").value;
    if (palavra == "kitty" ) {
    var text  = document.getElementById('b10');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('b10');
                        text.style.color="red";
    }
}

function questao8(){
          var pacote = document.getElementsByName('Pacote');
            for (var i = 0; i < pacote.length; i++){
                if ( pacote[i].checked ) {
                    if(pacote[i].value == "Pacote i"){
                        var text  = document.getElementById('opc34');
                        text.style.color="red";
                        var el = document.getElementById("er4");
                        el.innerHTML="<img src='img/errado.png'>";
                    }else if (pacote[i].value == "Pacote ii"){
                        var text  = document.getElementById('opc35');
                        text.style.color="red";
                        var el = document.getElementById("er5");
                        el.innerHTML="<img src='img/errado.png'>";
                    }else if (pacote[i].value == "Pacote iii") {
                        var text  = document.getElementById('opc36');
                        text.style.color="red";
                        var el = document.getElementById("er6");
                        el.innerHTML="<img src='img/errado.png'>";
                    }else if (pacote[i].value == "Pacote iiii") {
                        var text  = document.getElementById('opc37');
                        text.style.color="green";
                        resultado++;
                        var el = document.getElementById("ce6");
                        el.innerHTML="<img src='img/certo.png'>";

                    }
                }
            }
        }