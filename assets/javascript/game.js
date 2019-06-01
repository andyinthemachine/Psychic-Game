
var random_letter = "";
var wins = 0;
var losses = 0;
var guesses_left = 9;
var guesses = "";

var random_letter_display = document.getElementById("random_letter");
var wins_display = document.getElementById("wins");
var losses_display = document.getElementById("losses");
var guesses_left_display = document.getElementById("guesses_left");
var guesses_display = document.getElementById("guesses");

function update_display()
{
  random_letter_display.textContent = random_letter;
  wins_display.textContent = wins;
  losses_display.textContent = losses;
  guesses_left_display.textContent = guesses_left;
  guesses_display.textContent = guesses;
}

function reset_game(num_guesses)
{
  guesses_left = num_guesses;
  guesses = "";
}


update_display();  

// JavaScript function onkeyup event
document.onkeyup = function(event) 
{
  user_play = event.key;
  guesses = guesses  + user_play;
  if (guesses_left > 2)
    guesses = guesses + ', ';

  // sample from Unicode values representing lower case alphabet letters
  random_letter = String.fromCharCode(97 + (Math.floor(Math.random() * 26)));
  
  if (random_letter === user_play)  // a win
  {
    wins++;
    reset_game(9);
  }
  else if (guesses_left-- <= 1)
  {
    losses++;
    reset_game(9);
  }

  update_display();  
}

  


    
