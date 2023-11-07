let btn = document.querySelectorAll(".choice_button");
let player_box = document.getElementById("player")
let comp_box = document.getElementById("comp")
let status_box = document.getElementById("status")

//variables for rock paper scissors

let computer;

btn.forEach(button => button.addEventListener("click", showResult)); // checks if a button has been clicked with the given class

function showResult()
{
    player = this.innerText.toLowerCase();
    compChoice();
    result = decideResult();

    player_box.innerText = "Your Pick: " + this.innerText;
    comp_box.innerText = "Computer's Pick: " + computer.charAt(0).toUpperCase() + computer.slice(1); // capitalise the first letter
    status_box.innerText = "Status: " + result;
}

function compChoice()
{
    num = Math.floor(Math.random() * 3) + 1 // Generates a random number b/w 1,2 and 3

    switch(num)
    {
        case 1:
            computer = "rock";
            break;

        case 2:
            computer = "paper";
            break;

        case 3:
            computer = "scissors";
            break;
    }
}

function decideResult()
{
    if (player == computer)
    {
        return "Tie";
    }

    if (iswin(player, computer))
    {
        return "You Win";
    }

    if (islose(player, computer))
    {
        return "You Lose";
    }
}

function iswin(main, opp)
{
    if ((main == "rock" && opp == "scissors") || (main == "scissors" && opp == "paper") || (main == "paper" && opp == "rock"))
    {
        return true;
    }
}

function islose(main, opp)
{
    if ((main == "rock" && opp == "paper") || (main == "scissors" && opp == "rock") || (main == "paper" && opp == "scissors"))
    {
        return true;
    }
}
