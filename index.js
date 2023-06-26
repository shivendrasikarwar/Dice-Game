// players states

let players1Score = 0;
let players2Score = 0;
let players1Turn = true;

const player1Dice = document.getElementById('player1Dice');
const player2Dice = document.getElementById('player2Dice');
const player1Scoreboard = document.getElementById('player1Scoreboard');
const player2Scoreboard = document.getElementById('player2Scoreboard');
const message = document.getElementById('message');
const rollbtn = document.getElementById('rollBtn');
const resetbtn = document.getElementById('resetBtn');

resetbtn.addEventListener('click',function(){

resetbtn.style.display ='none';
rollbtn.style.display = 'block';

players1Score = 0;
players2Score = 0;
players1Turn = true;
message.textContent = 'Player 1 Turn';
player1Scoreboard.textContent = '0';
player2Scoreboard.textContent = '0';

player1Dice.textContent='-';
player2Dice.textContent='-'



})

let  random_turnn; 
function random_turn(){

    random_turnn = Math.floor(Math.random()*2);

    if(random_turnn==1){
    
    players1Turn = true;
    
    }
    else{
    
    players1Turn = false;
    
    }

}

random_turn();




rollbtn.addEventListener('click',function(){


        const random_number = Math.floor(Math.random()*6+1)

        

        

        
        
        

        if(players1Turn){
            
            players1Score += random_number;
            if(players1Score>=20){

                rollbtn.style.display ='none';
                resetbtn.style.display = 'block';
                message.textContent = 'Player 1 has won! 🥳'
                


                
    
    
            }
            player1Scoreboard.textContent =players1Score;
            player1Dice.textContent =random_number;
            player1Dice.classList.remove('active');
            player2Dice.classList.add('active');
            if(players1Score<20){
                message.textContent = 'Player 2 Turn';

            }
          
            


        }

        else{

            
            players2Score += random_number;

            if(players2Score>=20){
            
                rollbtn.style.display ='none';
                resetbtn.style.display = 'block';
                message.textContent = 'Player 2 has won! 🎉'
                
                
                
    
            }
            player2Scoreboard.textContent = players2Score;
            player2Dice.textContent =random_number;
            player2Dice.classList.remove('active');
            player1Dice.classList.add('active');
            if(players2Score<20){
                message.textContent = 'Player 1 Turn';

            }
            

        

        }

        if(players1Score>=20 || players2Score>=20){


            players1Turn = Math.floor(Math.random()*2);
            console.log(players1Turn);
            


        }
        else{

            players1Turn = !players1Turn;

        }

       


})



let instructions = document.getElementById('instructions');
instructions.addEventListener('click',function(){



    document.getElementById('hover_instruct').style.display='block';






})

let close = document.getElementById('closebtn');
close.addEventListener('click',function(){



document.getElementById('hover_instruct').style.display='none';


})