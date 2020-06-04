var question = 1;
var resultado = 0;
var total = 21;
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
                        text.style.color="green";
                        resultado++;
                        var el = document.getElementById("certo1");
                        el.innerHTML="<img src='img/certo.png'>";
                    }
                }
            }
        }

function questao2(){

    var palavra = document.getElementById("alt1").value;
    if (palavra == "hurt" ) {
    var text  = document.getElementById('alt1');
                        text.style.color="green";
                        resultado++;
    } else{
    var text  = document.getElementById('alt1');
                        text.style.color="red";
    }

    var palavra1 = document.getElementById("alt2").value;
    if (palavra1 == "blowing" ) {
    var text  = document.getElementById('alt2');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt2');
                        text.style.color="red";
    }

    var palavra = document.getElementById("alt3").value;
    if (palavra == "doorbell" ) {
    var text  = document.getElementById('alt3');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt3');
                        text.style.color="red";
    }

    var palavra = document.getElementById("alt4").value;
    if (palavra == "throw" ) {
    var text  = document.getElementById('alt4');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt4');
                        text.style.color="red";
    }

    var palavra = document.getElementById("alt5").value;
    if (palavra == "count" ) {
    var text  = document.getElementById('alt5');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt5');
                        text.style.color="red";
    }
    var palavra = document.getElementById("alt6").value;
    if (palavra == "tomorrow" ) {
    var text  = document.getElementById('alt6');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt6');
                        text.style.color="red";
    }

    var palavra = document.getElementById("alt7").value;
    if (palavra == "through" ) {
    var text  = document.getElementById('alt7');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt7');
                        text.style.color="red";
    }

    var palavra = document.getElementById("alt8").value;
    if (palavra == "dry" ) {
    var text  = document.getElementById('alt8');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt8');
                        text.style.color="red";
    }

    var palavra = document.getElementById("alt9").value;
    if (palavra == "holding" ) {
    var text  = document.getElementById('alt9');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt9');
                        text.style.color="red";
    }

    var palavra = document.getElementById("alt10").value;
    if (palavra == "on" ) {
    var text  = document.getElementById('alt10');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt10');
                        text.style.color="red";
    }
    var palavra = document.getElementById("alt11").value;
    if (palavra == "until" ) {
    var text  = document.getElementById('alt11');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt11');
                        text.style.color="red";
    }

    var palavra = document.getElementById("alt12").value;
    if (palavra == "holding" ) {
    var text  = document.getElementById('alt12');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt12');
                        text.style.color="red";
    }
     var palavra = document.getElementById("alt13").value;
    if (palavra == "on" ) {
    var text  = document.getElementById('alt13');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt13');
                        text.style.color="red";
    }
     var palavra = document.getElementById("alt14").value;
    if (palavra == "until" ) {
    var text  = document.getElementById('alt14');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt14');
                        text.style.color="red";
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

function questao5(){
          var pacote = document.getElementsByName('Pacote');
            for (var i = 0; i < pacote.length; i++){
                if ( pacote[i].checked ) {
                    if(pacote[i].value == "Pacote i"){
                        var text  = document.getElementById('opcao30');
                        text.style.color="green";
                        resultado++;
                        var el = document.getElementById("c5");
                        el.innerHTML="<img src='img/certo.png'>";
                    }else if (pacote[i].value == "Pacote ii"){
                        var text  = document.getElementById('opcao31');
                        text.style.color="red";
                        var el = document.getElementById("e1");
                        el.innerHTML="<img src='img/errado.png'>";
                    }else if (pacote[i].value == "Pacote iii") {
                        var text  = document.getElementById('opcao32');
                        text.style.color="red";
                        var el = document.getElementById("e2");
                        el.innerHTML="<img src='img/errado.png'>";
                    }
                }
            }
        }

function questao6(){
          var pacote = document.getElementsByName('Pacote');
            for (var i = 0; i < pacote.length; i++){
                if ( pacote[i].checked ) {
                    if(pacote[i].value == "Pacote i"){
                        var text  = document.getElementById('opcao33');
                        text.style.color="red";
                        var el = document.getElementById("e3");
                        el.innerHTML="<img src='img/errado.png'>";
                    }else if (pacote[i].value == "Pacote ii"){
                        var text  = document.getElementById('opcao34');
                        text.style.color="red";
                        var el = document.getElementById("e4");
                        el.innerHTML="<img src='img/errado.png'>";
                    }else if (pacote[i].value == "Pacote iii") {
                        var text  = document.getElementById('opcao35');
                        text.style.color="red";
                        var el = document.getElementById("e5");
                        el.innerHTML="<img src='img/errado.png'>";
                    }else if (pacote[i].value == "Pacote iiii") {
                        var text  = document.getElementById('o36');
                        text.style.color="green";
                        resultado++;
                        var el = document.getElementById("c6");
                        el.innerHTML="<img src='img/certo.png'>";
                    }
                }
            }
        }


function questao7(){
          var pacote = document.getElementsByName('Pacote');
            for (var i = 0; i < pacote.length; i++){
                if ( pacote[i].checked ) {
                    if(pacote[i].value == "Pacote i"){
                        var text  = document.getElementById('op15');
                        text.style.color="red";
                        var el = document.getElementById("e16");
                        el.innerHTML="<img src='img/errado.png'>";
                    }else if (pacote[i].value == "Pacote ii"){
                        var text  = document.getElementById('opc16');
                        text.style.color="red";
                        var el = document.getElementById("er17");
                        el.innerHTML="<img src='img/errado.png'>";
                    }else if (pacote[i].value == "Pacote iii") {
                        var text  = document.getElementById('op17');
                        text.style.color="green";
                        resultado++;
                        var el = document.getElementById("certo7");
                        el.innerHTML="<img src='img/certo.png'>";
                    }else if (pacote[i].value == "Pacote iiii") {
                        var text  = document.getElementById('op18');
                        text.style.color="red";
                        var el = document.getElementById("e18");
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
                        var text  = document.getElementById('op19');
                        text.style.color="red";
                        var el = document.getElementById("e19");
                        el.innerHTML="<img src='img/errado.png'>";
                    }else if (pacote[i].value == "Pacote ii"){
                        var text  = document.getElementById('opc20');
                        text.style.color="green";
                        resultado++;
                        var el = document.getElementById("c7");
                        el.innerHTML="<img src='img/certo.png'>";
                    }else if (pacote[i].value == "Pacote iii") {
                        var text  = document.getElementById('op21');
                        text.style.color="red";
                        var el = document.getElementById("er20");
                        el.innerHTML="<img src='img/errado.png'>";
                    }else if (pacote[i].value == "Pacote iiii") {
                        var text  = document.getElementById('opc22');
                        text.style.color="red";
                        var el = document.getElementById("er21");
                        el.innerHTML="<img src='img/errado.png'>";
                    }
                }
            }
        }