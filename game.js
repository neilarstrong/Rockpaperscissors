
let computerScore = 1;
let playerScore = 1;
const playScore = document.getElementById('playerScore');
const comScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection button');
const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer i');

const randomClasses = ["fas fa-hand-rock", "fas fa-hand-paper","fas fa-hand-scissors"];
const text = document.getElementById('demo');



const game = () =>{
    buttons.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
            
           let clickedBtn = e.target.className;
           showIcon.className = clickedBtn;
           let randomNum = Math.floor(Math.random() * 5);
           computerShowIcon.className = randomClasses[randomNum];
        
           if(showIcon.className == computerShowIcon.className){
               playScore.innerHTML = playScore.innerHTML;
               comScore.innerHTML = comScore.innerHTML;
               text.innerHTML = "Tabla ! ";
           }  
           else if(showIcon.className == randomClasses[0] & computerShowIcon.className == randomClasses[2]){
               playScore.innerHTML = playerScore;
               playerScore++;
               text.innerHTML = "Panalo Ikaw ! ";
           }else if(showIcon.className == randomClasses[0] & computerShowIcon.className == randomClasses[1]){
               comScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "Panalo Kalaban ! ";   
           }else if(showIcon.className == randomClasses[1] & computerShowIcon.className == randomClasses[2]){
               comScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "Panalo Kalaban ! ";
           }else if(showIcon.className == randomClasses[1] & computerShowIcon.className == randomClasses[0]){
               playScore.innerHTML = playerScore;
               playerScore++;
               text.innerHTML = "Panalo Ikaw! ";
           }else if(showIcon.className == randomClasses[2] & computerShowIcon.className == randomClasses[0]){
               comScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "Panalo Kalaban ! ";
           }else if(showIcon.className == randomClasses[2] & computerShowIcon.className == randomClasses[1]){
               playScore.innerHTML = playerScore;
               playerScore++;
               text.innerHTML = "Panalo Ikaw ! ";
           }
        });
    });
}
game();
