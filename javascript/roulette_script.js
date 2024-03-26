
// Récupère le nombre de joueurs depuis l'URL
const urlParams = new URLSearchParams(window.location.search);
const numberOfPlayers = parseInt(urlParams.get('players'));

// Sélectionne aléatoirement un joueur
const randomPlayerNumber = Math.floor(Math.random() * numberOfPlayers) + 1;

// Affiche le joueur sélectionné dans la roulette
document.getElementById('roulette').innerText = `Joueur sélectionné : ${randomPlayerNumber}`;
