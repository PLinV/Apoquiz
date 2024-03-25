const nbJoueur = document.getElementById("nombrejoueur");
const listejoueur = document.getElementById("listejoueur");
let start = document.getElementById("start");
let nbJoueurlast = 0
let condition2player = false
start.disabled = true;

nbJoueur.addEventListener("input", updateValue);

//e.target.value
//listejoueur.textContent

function updateValue(e) {
    const playerElementSpan = document.createElement("label");
    const playerElementInput = document.createElement("input");
    start.disabled=false;
    let nbJoueurnow = parseInt(e.target.value);
    if (nbJoueurnow === 2 & condition2player === false) {
        const playerElementSpan1 = document.createElement("label");
        const playerElementInput1 = document.createElement("input");
        playerElementSpan1.textContent = "joueur " + 1 + " :";
        playerElementInput1.id = "joueurInput1";
        playerElementSpan1.id = "joueurSpan1";
        listejoueur.appendChild(playerElementSpan1);
        listejoueur.appendChild(playerElementInput1);
        document.getElementById("joueurSpan1").style.gridRow = 1;
        document.getElementById("joueurInput1").style.gridRow = 1;
        document.getElementById("joueurSpan" + 1).style.gridColumn = 1;
        document.getElementById("joueurInput" + 1).style.gridColumn = 2;
    

        playerElementSpan.textContent = "joueur " + 2 + " :";
        playerElementInput.id = "joueurInput" + 2;
        playerElementSpan.id = "joueurSpan" + 2;
        listejoueur.appendChild(playerElementSpan);
        listejoueur.appendChild(playerElementInput); 
        document.getElementById("joueurSpan" + 2).style.gridRow = 2;
        document.getElementById("joueurInput" + 2).style.gridRow = 2;
        document.getElementById("joueurSpan" + 2).style.gridColumn = 1;
        document.getElementById("joueurInput" + 2).style.gridColumn = 2;

        condition2player = true
    }
    else if (nbJoueurlast < nbJoueurnow){
        playerElementSpan.textContent = "joueur " + nbJoueurnow + " :";
        playerElementInput.id = "joueurInput" + nbJoueurnow;
        playerElementSpan.id = "joueurSpan" + nbJoueurnow;
        listejoueur.appendChild(playerElementSpan);
        listejoueur.appendChild(playerElementInput);
        document.getElementById("joueurSpan" + nbJoueurnow).style.gridRow = nbJoueurnow;
        document.getElementById("joueurInput" + nbJoueurnow).style.gridRow = nbJoueurnow; 
        document.getElementById("joueurSpan" + nbJoueurnow).style.gridColumn = 1;
        document.getElementById("joueurInput" + nbJoueurnow).style.gridColumn = 2;
        
    }
    else if (nbJoueurlast > nbJoueurnow){
        document.getElementById("joueurSpan"+nbJoueurlast).remove();
        document.getElementById("joueurInput"+nbJoueurlast).remove();
    }
    nbJoueurlast = nbJoueurnow
}
