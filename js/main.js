let roll=document.getElementById("inputState").value;

function rollDice() {
    console.log(roll);
    
    let NofRolls=parseInt(roll);
    console.log(NofRolls);
    for(let i=0;i<NofRolls;i++){
        console.log(roll);
        
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;
        document.getElementById("dice1").innerHTML += '<img src="./img/face'+randomNumber1+'.png" alt="dice logo" width="50" height="50"></img>';
        /*
        document.querySelector(".img2").setAttribute("src",
        "face" + randomNumber2 + ".png");

    if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "Draw!";
    }

    else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML
            = (player2 + " WINS!");
    }

    else {
        document.querySelector("h1").innerHTML
            = (player1 + " WINS!");
    }*/
}
}  

function check(){
    roll=document.getElementById("inputState").value;
    console.log(roll);
}
