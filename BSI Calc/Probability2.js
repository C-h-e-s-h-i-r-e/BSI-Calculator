//Aleksander Bober i Maciej Dudzik
function Probability2(){
    var Result = document.getElementById("Result5");
    
    var FR = document.getElementById('number11').value;
    var Number_of_missions = document.getElementById('number12').value;
     if(FR>100){
        var warning1 = document.createTextNode("Failure rate is above 100%.");
            Result.appendChild(warning1);
            Result.appendChild(document.createElement("br"));
            var spacer = document.createTextNode("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -");
            Result.appendChild(spacer);
            Result.appendChild(document.createElement("br"));
       }else{
           
       
    var myResult2 =Math.pow((1-FR/100), Number_of_missions);
    var w = document.createTextNode("Probability: "+myResult2.toFixed(2)*100+"%");
    Result.appendChild(w);
    Result.appendChild(document.createElement("br"));
    var spacer = document.createTextNode("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -");
    Result.appendChild(spacer);
    Result.appendChild(document.createElement("br"));
       }
}