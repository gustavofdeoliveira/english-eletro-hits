var question = 1;
var resultado = 0;
var total = 20;
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

    var palavra = document.getElementById("alt1").value;
    if (palavra == "corny" ) {
    var text  = document.getElementById('alt1');
                        text.style.color="green";
                        resultado++;
    } else{
    var text  = document.getElementById('alt1');
                        text.style.color="red";
    }

    var palavra1 = document.getElementById("alt2").value;
    if (palavra1 == "cocky" ) {
    var text  = document.getElementById('alt2');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt2');
                        text.style.color="red";
    }

    var palavra = document.getElementById("alt3").value;
    if (palavra == "fresh" ) {
    var text  = document.getElementById('alt3');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt3');
                        text.style.color="red";
    }

    var palavra = document.getElementById("alt4").value;
    if (palavra == "reckless" ) {
    var text  = document.getElementById('alt4');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt4');
                        text.style.color="red";
    }

    var palavra = document.getElementById("alt5").value;
    if (palavra == "dress" ) {
    var text  = document.getElementById('alt5');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt5');
                        text.style.color="red";
    }
    var palavra = document.getElementById("alt6").value;
    if (palavra == "necklaces" ) {
    var text  = document.getElementById('alt6');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt6');
                        text.style.color="red";
    }

    var palavra = document.getElementById("alt7").value;
    if (palavra == "daddy" ) {
    var text  = document.getElementById('alt7');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt7');
                        text.style.color="red";
    }

    var palavra = document.getElementById("alt8").value;
    if (palavra == "momma" ) {
    var text  = document.getElementById('alt8');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt8');
                        text.style.color="red";
    }

    var palavra = document.getElementById("alt9").value;
    if (palavra == "nostrils" ) {
    var text  = document.getElementById('alt9');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt9');
                        text.style.color="red";
    }

    var palavra = document.getElementById("alt10").value;
    if (palavra == "country" ) {
    var text  = document.getElementById('alt10');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt10');
                        text.style.color="red";
    }
    var palavra = document.getElementById("alt11").value;
    if (palavra == "hot" ) {
    var text  = document.getElementById('alt11');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt11');
                        text.style.color="red";
    }

    var palavra = document.getElementById("alt12").value;
    if (palavra == "sauce" ) {
    var text  = document.getElementById('alt12');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt12');
                        text.style.color="red";
    }
    var palavra = document.getElementById("alt13").value;
    if (palavra == "stunt" ) {
    var text  = document.getElementById('alt13');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt13');
                        text.style.color="red";
    }
    var palavra = document.getElementById("alt14").value;
    if (palavra == "grind" ) {
    var text  = document.getElementById('alt14');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt14');
                        text.style.color="red";
    }
    var palavra = document.getElementById("alt15").value;
    if (palavra == "haters" ) {
    var text  = document.getElementById('alt15');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt15');
                        text.style.color="red";
    }
    var palavra = document.getElementById("alt16").value;
    if (palavra == "seat" ) {
    var text  = document.getElementById('alt16');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt16');
                        text.style.color="red";
    }
    var palavra = document.getElementById("alt17").value;
    if (palavra == "low" ) {
    var text  = document.getElementById('alt17');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt17');
                        text.style.color="red";
    }
    var palavra = document.getElementById("alt18").value;
    if (palavra == "chaser" ) {
    var text  = document.getElementById('alt18');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt18');
                        text.style.color="red";
    }
    var palavra = document.getElementById("alt19").value;
    if (palavra == "formation" ) {
    var text  = document.getElementById('alt19');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt19');
                        text.style.color="red";
    }
    var palavra = document.getElementById("alt20").value;
    if (palavra == "coordination" ) {
    var text  = document.getElementById('alt20');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt20');
                        text.style.color="red";
    }

    var palavra = document.getElementById("alt21").value;
    if (palavra == "eliminated" ) {
    var text  = document.getElementById('alt21');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt21');
                        text.style.color="red";
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
                        text.style.color="green";
                        resultado++;
                        var el = document.getElementById("certo2");
                        el.innerHTML="<img src='img/certo.png'>";
                    }else if (pacote[i].value == "Pacote iii") {
                        var text  = document.getElementById('opcao7');
                        text.style.color="red";
                        var el = document.getElementById("errado5");
                        el.innerHTML="<img src='img/errado.png'>";
                    }else if (pacote[i].value == "Pacote iiii") {
                        var text  = document.getElementById('opcao8');
                        text.style.color="red";
                        var el = document.getElementById("errado6");
                        el.innerHTML="<img src='img/errado.png'>";

                    }
                }
            }
        }

function questao3(){

    var palavra = document.getElementById("a1").value;
    if (palavra == "knees" ) {
    var text  = document.getElementById('a1');
                        text.style.color="green";
                        resultado++;
    } else{
    var text  = document.getElementById('a1');
                        text.style.color="red";
    }

    var palavra1 = document.getElementById("a2").value;
    if (palavra1 == "forty" ) {
    var text  = document.getElementById('a2');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('a2');
                        text.style.color="red";
    }

    var palavra = document.getElementById("a3").value;
    if (palavra == "five" ) {
    var text  = document.getElementById('a3');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('a3');
                        text.style.color="red";
    }

    var palavra = document.getElementById("a4").value;
    if (palavra == "smudged" ) {
    var text  = document.getElementById('a4');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('a4');
                        text.style.color="red";
    }

    var palavra = document.getElementById("a5").value;
    if (palavra == "bucked" ) {
    var text  = document.getElementById('alt5');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('a5');
                        text.style.color="red";
    }
    var palavra = document.getElementById("a6").value;
    if (palavra == "gown" ) {
    var text  = document.getElementById('a6');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('a6');
                        text.style.color="red";
    }

    var palavra = document.getElementById("a7").value;
    if (palavra == "towel" ) {
    var text  = document.getElementById('a7');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('a7');
                        text.style.color="red";
    }

    var palavra = document.getElementById("a8").value;
    if (palavra == "swear" ) {
    var text  = document.getElementById('a8');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('a8');
                        text.style.color="red";
    }

    var palavra = document.getElementById("a9").value;
    if (palavra == "footprints" ) {
    var text  = document.getElementById('a9');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('a9');
                        text.style.color="red";
    }

    var palavra = document.getElementById("a10").value;
    if (palavra == "grips" ) {
    var text  = document.getElementById('alt10');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('a10');
                        text.style.color="red";
    }
    var palavra = document.getElementById("a11").value;
    if (palavra == "nasty" ) {
    var text  = document.getElementById('a11');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('a11');
                        text.style.color="red";
    }
    var palavra = document.getElementById("a12").value;
    if (palavra == "eavesdropping" ) {
    var text  = document.getElementById('a12');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('a12');
                        text.style.color="red";
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
                        text.style.color="red";
                        var el = document.getElementById("errado8");
                        el.innerHTML="<img src='img/errado.png'>";
                    }else if (pacote[i].value == "Pacote iii") {
                        var text  = document.getElementById('opcao11');
                        text.style.color="green";
                        resultado++;
                        var el = document.getElementById("certo4");
                        el.innerHTML="<img src='img/certo.png'>";
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
                        text.style.color="green";
                        resultado++;
                        var el = document.getElementById("certo5");
                        el.innerHTML="<img src='img/certo.png'>";
                    }else if (pacote[i].value == "Pacote iii") {
                        var text  = document.getElementById('opcao15');
                        text.style.color="red";
                        var el = document.getElementById("errado11");
                        el.innerHTML="<img src='img/errado.png'>";
                    }else if (pacote[i].value == "Pacote iiii") {
                        var text  = document.getElementById('op16');
                        text.style.color="red";
                        var el = document.getElementById("errado12");
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
                        var text  = document.getElementById('opcao17');
                        text.style.color="green";
                        resultado++;
                        var el = document.getElementById("certo6");
                        el.innerHTML="<img src='img/certo.png'>";
                    }else if (pacote[i].value == "Pacote ii"){
                        var text  = document.getElementById('opcao18');
                        text.style.color="red";
                        var el = document.getElementById("errado13");
                        el.innerHTML="<img src='img/errado.png'>";
                    }else if (pacote[i].value == "Pacote iii") {
                        var text  = document.getElementById('opcao19');
                        text.style.color="red";
                        var el = document.getElementById("errado14");
                        el.innerHTML="<img src='img/errado.png'>";
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
                        var text  = document.getElementById('opcao22');
                        text.style.color="red";
                        var el = document.getElementById("errado17");
                        el.innerHTML="<img src='img/errado.png'>";
                    }else if (pacote[i].value == "Pacote iii") {
                        var text  = document.getElementById('opcao23');
                        text.style.color="green";
                        resultado++;
                        var el = document.getElementById("certo7");
                        el.innerHTML="<img src='img/certo.png'>";
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
                        var text  = document.getElementById('opcao26');
                        text.style.color="red";
                        var el = document.getElementById("errado19");
                        el.innerHTML="<img src='img/errado.png'>";
                    }else if (pacote[i].value == "Pacote ii"){
                        var text  = document.getElementById('opcao27');
                        text.style.color="green";
                        resultado++;
                        var el = document.getElementById("certo8");
                        el.innerHTML="<img src='img/certo.png'>";
                    }else if (pacote[i].value == "Pacote iii") {
                        var text  = document.getElementById('opcao28');
                        text.style.color="red";
                        var el = document.getElementById("errado20");
                        el.innerHTML="<img src='img/errado.png'>";
                    }
                    else if (pacote[i].value == "Pacote iiii") {
                        var text  = document.getElementById('op29');
                        text.style.color="red";
                        var el = document.getElementById("e21");
                        el.innerHTML="<img src='img/errado.png'>";
                    }
                }
            }
        }