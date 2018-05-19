var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;
//if we click on start/reset
document.getElementById("startreset").onclick = function(){
    
    //if we are playing
     if(playing == true){
         location.reload();  //reload page
     }
    
    else{  //if we are not playing
          
        playing = true ;
          score = 0;
           document.getElementById("scorevalue").innerHTML= score ;
          
           show("timeremaining");
           timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        startcountdown();  //start countdown 
        document.getElementById("startreset").innerHTML = "Reset Game"  ;
        hide("gameover");
        generateQA();
        
    }
    
}

for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
    
    if(playing == true){
        if(this.innerHTML == correctAnswer){
            score += 5; //increase score by 1
            document.getElementById("scorevalue").innerHTML = score;
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            }, 1000);
            //generate new question
            generateQA();
        }
        else{
            //wrong ans
             hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            }, 1000);
        }
    }
}
}


function startcountdown(){
    
    action = setInterval(function(){
        timeremaining -= 1;
    document.getElementById("timeremainingvalue").innerHTML = timeremaining;    
    if(timeremaining == 0){
        stopcountdown();
  
  show("gameover");
        
   document.getElementById("gameover").innerHTML =  "<p>game over !</p><p>your score is " + score +".</p>"
        
   hide("timeremaining");  
   hide("correct"); 
   hide("wrong"); 
   playing = false;
    document.getElementById("startreset").innerHTML = "Start Game";
    
    }
        
    }, 1000);
    
}

function stopcountdown(){
    clearInterval(action);
}

function hide(Id){
    document.getElementById(Id).style.display = "none";
}
function show(Id){
    document.getElementById(Id).style.display = "block";
}

//generate questions and multiple ans.
function generateQA(){
    var x = 1 + Math.round(19*Math.random());
    var y = 1 + Math.round(19*Math.random());
    correctAnswer = x*y ;
    
    document.getElementById("question").innerHTML = x + "x" + y;
    var correctPosition = 1 + Math.round(3*Math.random());
    
    document.getElementById("box" + correctPosition).innerHTML = correctAnswer; //fill one box with the correct answer
     var answers = [correctAnswer];
    //fill other boxes through wrong answers
    for(i=1; i<5; i++){
        if(i != correctPosition){
            var wrongAnswer; 
            
            do{
            wrongAnswer = (1 + Math.round(19*Math.random()))*(1 + Math.round(19*Math.random()))
            }while(answers.indexOf(wrongAnswer)>-1);
            
            document.getElementById("box" + i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}
window.console.log;