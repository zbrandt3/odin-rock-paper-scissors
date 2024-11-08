# odin-rock-paper-scissors
Rock paper scissors game for Odin Foundations course

Goal: Create a game of rock paper scissors where user can give an input and receive an outcome. 

Interface: Allow for user input (via a prompt, or dropdown)
Input: User will choose rock, paper, or scissors
Output: Result of the match
Steps: 1.) Receive input, 2.) generate computer response, 3.) determine outcome of match, 4.) display results. 


Pseudo code
Take user input
Generate computer response
If input and response are equal: draw
If input == rock
    if response == scissors: win
    if response == paper: loss
If input == paper
    if response == rock: win
    if response == scissors: loss
If input == scissors
    if response == paper: win
    if response == rock: loss
Display result of match
Reset and repeat
