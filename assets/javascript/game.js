

var wins = 0;
var losses = 0;
var guesses_left = 0;
var guesses = "";


var wins_display = document.getElementById("wins");
var losses_display = document.getElementById("losses");
var guesses_left_display = document.getElementById("guesses_left");
var guesses_display = document.getElementById("guesses");

function update_display()
{
    wins_display.textContent = wins;
    losses_display.textContent = losses;
    guesses_left_display.textContent = guesses_left;
    guesses_display.textContent = guesses;
}

update_display();

// JavaScript function onkeyup event
document.onkeyup = function(event) 
{
  user_play = event.key;
  guesses = guesses  + user_play + ', ';
  
  comp_play = computerChoices[Math.floor(Math.random() * computerChoices.length)];


  update_display();

//   if ((event.key === 'r') || (event.key === 'p') || (event.key === 's')) 
//   {
//     comp_play = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//     computerText.textContent = comp_play;

//     if (user_play === comp_play)
//       ties++
//     else if (((user_play === 'r') && (comp_play === 's')) ||
//              ((user_play === 'p') && (comp_play === 'r')) ||
//              ((user_play === 's') && (comp_play === 'p')))
//     {
//       wins++;
//     }
//     else 
//       losses++;
    
   
 
}