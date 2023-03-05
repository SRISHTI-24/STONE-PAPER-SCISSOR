const choices = document.querySelectorAll('.choice');
const score = document.querySelector('#score');
const result = document.querySelector('#result')
const restart = document.querySelector('#restart')
const modal = document.querySelector('.modal')
const scoreboard = {
    player: 0,
    computer: 0
};
choices.forEach(choice => choice.addEventListener('click', playgame))

function playgame(e)
{
    restart.style.display='inline-block';
    const playerChoice = e.target.id;
    const computerchoice = Computerchoice();
    let winner = checkwinner(playerChoice, computerchoice)
    showWinner(winner, computerchoice)
}
window.addEventListener('click', clearModal)

restart.addEventListener('click', restartgame)

function Computerchoice()
{
    cchoice = Math.random() * 100;
    if(cchoice < 33)
        return 'rock';
    else if(cchoice >= 33 && cchoice <=66)
        return 'paper';
    else 
        return 'scissors';
}
function checkwinner(p, c)
{
    if(p==c)
        return 'draw';
    if(p == 'rock')
    {
        if(c=='paper')
        {
            return 'computer';
        }
        else
        {
            return 'player';
        }
    }
    else if(p == 'paper')
    {
        if(c=='rock')
        {
            return 'player';
        }
        else
        {
            return 'computer';
        }
    }
    else
    {
        if(c=='rock')
        {
            return 'computer';
        }
        else 
        {
            return 'player';
        }
    }
}
function showWinner(w,c)
{
    if(w=='player')
    {
        scoreboard.player++;
        result.innerHTML = 
        `
            <h1 class = "text-win"> You Win </h1> 
            <i class = "fas fa-hand-${c} fa-10x">
            `
    }
        
    else if(w=='computer')
    {
        scoreboard.computer++;
        result.innerHTML = 
        `
            <h1 class="text-lose"> You lose </h1>
            <i class="fas fa-hand-${c} fa-10x">
        `
    }
    else {
        result.innerHTML= `
        <h1> it's a draw </h1>
        <i class="fas fa-hand-${c} fa-10x">
        `
    }
    
    score.innerHTML = 
        `
            <p> Player : ${scoreboard.player}</p>
            <p> Computer : ${scoreboard.computer}</p>
        `
        
    modal.style.display='block';
}
function clearModal(e)
{
    if(e.target == modal)
    {
        modal.style.display = 'none';
    }
}
function restartgame()
{
    scoreboard.player =0;
    scoreboard.computer =0;
    score.innerHTML = 
    `
        <p> Player: 0 </p>
        <p>Computer: 0 </p>
    `
}