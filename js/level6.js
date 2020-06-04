var question = 1;
var resultado = 0;
var total = 44;
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
    if (palavra == "bottles" ) {
    var text  = document.getElementById('alt1');
                        text.style.color="green";
                        resultado++;
    } else{
    var text  = document.getElementById('alt1');
                        text.style.color="red";
    }

    var palavra1 = document.getElementById("alt2").value;
    if (palavra1 == "trouble" ) {
    var text  = document.getElementById('alt2');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt2');
                        text.style.color="red";
    }

    var palavra = document.getElementById("alt3").value;
    if (palavra == "Lashes" ) {
    var text  = document.getElementById('alt3');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt3');
                        text.style.color="red";
    }

    var palavra = document.getElementById("alt4").value;
    if (palavra == "woulda" ) {
    var text  = document.getElementById('alt4');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt4');
                        text.style.color="red";
    }

    var palavra = document.getElementById("alt5").value;
    if (palavra == "savage" ) {
    var text  = document.getElementById('alt5');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt5');
                        text.style.color="red";
    }
    var palavra = document.getElementById("alt6").value;
    if (palavra == "strings" ) {
    var text  = document.getElementById('alt6');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt6');
                        text.style.color="red";
    }

    var palavra = document.getElementById("alt7").value;
    if (palavra == "wrist" ) {
    var text  = document.getElementById('alt7');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt7');
                        text.style.color="red";
    }

    var palavra = document.getElementById("alt8").value;
    if (palavra == "flossin’" ) {
    var text  = document.getElementById('alt8');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt8');
                        text.style.color="red";
    }

    var palavra = document.getElementById("alt9").value;
    if (palavra == "gloss" ) {
    var text  = document.getElementById('alt9');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt9');
                        text.style.color="red";
    }

    var palavra = document.getElementById("alt10").value;
    if (palavra == "bought" ) {
    var text  = document.getElementById('alt10');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt10');
                        text.style.color="red";
    }
    var palavra = document.getElementById("alt11").value;
    if (palavra == "it" ) {
    var text  = document.getElementById('alt11');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt11');
                        text.style.color="red";
    }

    var palavra = document.getElementById("alt12").value;
    if (palavra == "matching" ) {
    var text  = document.getElementById('alt12');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt12');
                        text.style.color="red";
    }
    var palavra = document.getElementById("alt13").value;
    if (palavra == "diamonds" ) {
    var text  = document.getElementById('alt13');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt13');
                        text.style.color="red";
    }
    var palavra = document.getElementById("alt14").value;
    if (palavra == "spoil" ) {
    var text  = document.getElementById('alt14');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt14');
                        text.style.color="red";
    }
    var palavra = document.getElementById("alt15").value;
    if (palavra == "addiction" ) {
    var text  = document.getElementById('alt15');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt15');
                        text.style.color="red";
    }
    var palavra = document.getElementById("alt16").value;
    if (palavra == "Whoever" ) {
    var text  = document.getElementById('alt16');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt16');
                        text.style.color="red";
    }
    var palavra = document.getElementById("alt17").value;
    if (palavra == "solve" ) {
    var text  = document.getElementById('alt17');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt17');
                        text.style.color="red";
    }
    var palavra = document.getElementById("alt18").value;
    if (palavra == "red-bottoms" ) {
    var text  = document.getElementById('alt18');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('alt18');
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
                        text.style.color="red";
                        var el = document.getElementById("errado5");
                        el.innerHTML="<img src='img/errado.png'>";
                    }else if (pacote[i].value == "Pacote iii") {
                        var text  = document.getElementById('opcao7');
                        text.style.color="red";
                        var el = document.getElementById("errado6");
                        el.innerHTML="<img src='img/errado.png'>";
                    }else if (pacote[i].value == "Pacote iiii") {
                        var text  = document.getElementById('opcao8');
                        text.style.color="green";
                        resultado++;
                        var el = document.getElementById("certo2");
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

    var palavra = document.getElementById("a1").value;
    if (palavra == "witness" ) {
    var text  = document.getElementById('a1');
                        text.style.color="green";
                        resultado++;
    } else{
    var text  = document.getElementById('a1');
                        text.style.color="red";
    }

    var palavra1 = document.getElementById("a2").value;
    if (palavra1 == "loaded" ) {
    var text  = document.getElementById('a2');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('a2');
                        text.style.color="red";
    }

    var palavra = document.getElementById("a3").value;
    if (palavra == "focused" ) {
    var text  = document.getElementById('a3');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('a3');
                        text.style.color="red";
    }

    var palavra = document.getElementById("a4").value;
    if (palavra == "ya" ) {
    var text  = document.getElementById('a4');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('a4');
                        text.style.color="red";
    }

    var palavra = document.getElementById("a5").value;
    if (palavra == "dangerous" ) {
    var text  = document.getElementById('a5');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('a5');
                        text.style.color="red";
    }
    var palavra = document.getElementById("a6").value;
    if (palavra == "shouldn’t" ) {
    var text  = document.getElementById('a6');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('a6');
                        text.style.color="red";
    }

    var palavra = document.getElementById("a7").value;
    if (palavra == "bulletproof" ) {
    var text  = document.getElementById('a7');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('a7');
                        text.style.color="red";
    }

    var palavra = document.getElementById("a8").value;
    if (palavra == "introducing" ) {
    var text  = document.getElementById('a8');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('a8');
                        text.style.color="red";
    }

    var palavra = document.getElementById("a9").value;
    if (palavra == "flavor" ) {
    var text  = document.getElementById('a9');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('a9');
                        text.style.color="red";
    }

    var palavra = document.getElementById("a10").value;
    if (palavra == "danger" ) {
    var text  = document.getElementById('a10');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('a10');
                        text.style.color="red";
    }
    var palavra = document.getElementById("a11").value;
    if (palavra == "ya" ) {
    var text  = document.getElementById('a11');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('a11');
                        text.style.color="red";
    }
}

function questao5(){
          var pacote = document.getElementsByName('Pacote');
            for (var i = 0; i < pacote.length; i++){
                if ( pacote[i].checked ) {
                    if(pacote[i].value == "Pacote i"){
                        var text  = document.getElementById('opcao13');
                        text.style.color="green";
                        resultado++;
                        var el = document.getElementById("certo5");
                        el.innerHTML="<img src='img/certo.png'>";
                    }else if (pacote[i].value == "Pacote ii"){
                        var text  = document.getElementById('opcao14');
                        text.style.color="red";
                        var el = document.getElementById("errado10");
                        el.innerHTML="<img src='img/errado.png'>";
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
                        text.style.color="red";
                        var el = document.getElementById("errado15");
                        el.innerHTML="<img src='img/errado.png'>";
                    }else if (pacote[i].value == "Pacote iiii") {
                        var text  = document.getElementById('opcao20');
                        text.style.color="green";
                        resultado++;
                        var el = document.getElementById("certo6");
                        el.innerHTML="<img src='img/certo.png'>";

                    }
                }
            }
        }



function questao7(){

    var palavra = document.getElementById("b1").value;
    if (palavra == "bathtub" ) {
    var text  = document.getElementById('b1');
                        text.style.color="green";
                        resultado++;
    } else{
    var text  = document.getElementById('b1');
                        text.style.color="red";
    }

    var palavra1 = document.getElementById("b2").value;
    if (palavra1 == "regular" ) {
    var text  = document.getElementById('b2');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('b2');
                        text.style.color="red";
    }

    var palavra = document.getElementById("b3").value;
    if (palavra == "gold" ) {
    var text  = document.getElementById('b3');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('b3');
                        text.style.color="red";
    }

    var palavra = document.getElementById("b4").value;
    if (palavra == "chest" ) {
    var text  = document.getElementById('b4');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('b4');
                        text.style.color="red";
    }

    var palavra = document.getElementById("b5").value;
    if (palavra == "fits" ) {
    var text  = document.getElementById('b5');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('b5');
                        text.style.color="red";
    }
    var palavra = document.getElementById("b6").value;
    if (palavra == "breath" ) {
    var text  = document.getElementById('b6');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('b6');
                        text.style.color="red";
    }

    var palavra = document.getElementById("b7").value;
    if (palavra == "Thought" ) {
    var text  = document.getElementById('b7');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('b7');
                        text.style.color="red";
    }

    var palavra = document.getElementById("b8").value;
    if (palavra == "creep" ) {
    var text  = document.getElementById('b8');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('b8');
                        text.style.color="red";
    }

    var palavra = document.getElementById("b9").value;
    if (palavra == "shit" ) {
    var text  = document.getElementById('b9');
                        text.style.color="green";
                        resultado++;
    }else{
    var text  = document.getElementById('b9');
                        text.style.color="red";
    }

    var palavra = document.getElementById("b10").value;
    if (palavra == "credits" ) {
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
                        var text  = document.getElementById('opcao26');
                        text.style.color="red";
                        var el = document.getElementById("errado19");
                        el.innerHTML="<img src='img/errado.png'>";
                    }else if (pacote[i].value == "Pacote ii"){
                        var text  = document.getElementById('opcao27');
                        text.style.color="red";
                        var el = document.getElementById("errado20");
                        el.innerHTML="<img src='img/errado.png'>";
                    }else if (pacote[i].value == "Pacote iii") {
                        var text  = document.getElementById('opcao28');
                        text.style.color="green";
                        resultado++;
                        var el = document.getElementById("certo8");
                        el.innerHTML="<img src='img/certo.png'>";
                    }else if (pacote[i].value == "Pacote iiii"){
                        var text  = document.getElementById('opcao29');
                        text.style.color="red";
                        var el = document.getElementById("errado21");
                        el.innerHTML="<img src='img/errado.png'>";
                    }
                }
            }
        }