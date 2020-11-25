//Aleksander Bober i Maciej Dudzik
function Probability(){
    
    var Result = document.getElementById("Result3");
    
    var Number_of_Matches = document.getElementById('number6').value;
    var Probabilty_TeamA = document.getElementById('number7').value;
    var Probability_TeamB = document.getElementById('number8').value;
    
    if(( parseInt(Probabilty_TeamA)+ parseInt(Probability_TeamB))>100){
        var warning = document.createTextNode("Probability exeeds 100%");
            Result.appendChild(warning);
        Result.appendChild(document.createElement("br"));
        return 0;
    }
    
    var drow = 100-Probabilty_TeamA-Probability_TeamB;
    
    Probabilty_TeamA = parseInt(Probabilty_TeamA)/100;
    Probability_TeamB = parseInt(Probability_TeamB)/100;
    
    var TeamB_Wins_All = Probability_TeamB;
    var TeamB_Wins_One = (1-Probability_TeamB);
    
    TeamB_Wins_All = Math.pow(TeamB_Wins_All,Number_of_Matches);
    TeamB_Wins_One = Math.pow(TeamB_Wins_One,Number_of_Matches);
    
    TeamB_Wins_All = TeamB_Wins_All*100;
    TeamB_Wins_One = TeamB_Wins_One*100;
    
    TeamB_Wins_All = TeamB_Wins_All.toFixed(2);
    TeamB_Wins_One = TeamB_Wins_One.toFixed(2);
    
    var line1 = document.createTextNode("a) The probability of a draw is "+drow+"%");
    Result.appendChild(line1);
    Result.appendChild(document.createElement("br"));
    
    var line2 = document.createTextNode("b) Probability of team B winning all matches is "+TeamB_Wins_All+"%");
    Result.appendChild(line2);
    Result.appendChild(document.createElement("br"));
    
    var line3 = document.createTextNode("c) Probability of team B winning at least one match is "+(100-TeamB_Wins_One)+"%");
    Result.appendChild(line3);
    Result.appendChild(document.createElement("br"));
    
    var spacer = document.createTextNode("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -");
    Result.appendChild(spacer);
    Result.appendChild(document.createElement("br"));
    
}