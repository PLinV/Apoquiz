const nbJoueur = document.getElementById("nombrejoueur");
const listejoueur = document.getElementById("listejoueur");
let start = document.getElementById("start");
start.disabled = true;

nbJoueur.addEventListener("input", updateValue);

//e.target.value
//listejoueur.textContent

function updateValue(e) {
    listejoueur.innerHTML = "";
    start.disabled=false;
    for (let i = 1; i <= e.target.value; i++){
        const playerElementSpan = document.createElement("label");
        const playerElementInput = document.createElement("input");
        playerElementSpan.textContent = "joueur " + i + " :";
        playerElementInput.id = "joueurInput" + i;
        playerElementSpan.id = "joueurSpan" + i;
        listejoueur.appendChild(playerElementSpan);
        listejoueur.appendChild(playerElementInput); 
        document.getElementById("joueurSpan" + i).style.color = "red";
        document.getElementById("joueurSpan" + i).style.gridRow = i;
        document.getElementById("joueurInput" + i).style.gridRow = i;
        document.getElementById("joueurInput" + i).style.position = "relative";
        document.getElementById("joueurInput" + i).style.top = "0px";
    }
}