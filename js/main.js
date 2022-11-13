let roll = document.getElementById("inputState").value;

function rollDice() {
    console.log(roll);
    let risultatoUser = 0;
    let risultatoComputer = 0;
    let NofRolls = parseInt(roll);
    console.log(NofRolls);
    for (let i = 0; i < NofRolls; i++) {
        console.log(roll);
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;
        document.getElementById("diceGiocatore").innerHTML += '<img src="./img/face' + randomNumber1 + '.png" alt="dice logo" width="50" height="50"></img>';
        document.getElementById("diceComputer").innerHTML += '<img src="./img/face' + randomNumber2 + '.png" alt="dice logo" width="50" height="50"></img>';
        risultatoUser += randomNumber1;
        risultatoComputer += randomNumber2;
    }

    if (risultatoUser === risultatoComputer) {
        document.querySelector("h2").innerHTML = "Pareggio!<br>"+risultatoUser+' = '+risultatoComputer;
    }

    else if (risultatoUser < risultatoComputer) {
        document.querySelector("h2").innerHTML
            = "HA VINTO IL COMPUTER!<br>"+risultatoUser+' < '+risultatoComputer;
    }

    else {
        document.querySelector("h2").innerHTML
            = "HAI VINTO!<br>"+risultatoUser+' > '+risultatoComputer;
    }
    document.getElementById("bottoneprincipale").innerHTML = '<button class="btn btn-primary mt-2" type="submit" onClick="window.location.href=window.location.href">Vuoi riprovare?</button>';
}

//-------------------funzioni di controllo---------------------------------------
document.getElementById("inputState").addEventListener("input",check);
function check() {
    roll = document.getElementById("inputState").value;
    if(roll<=0||roll>100){
        document.getElementById("inputState").value=1;
    }
    console.log(roll);
}
//-------------------------------------------------------------------------------