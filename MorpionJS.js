let a1 = document.getElementById('a1');
let a2 = document.getElementById('a2');
let a3 = document.getElementById('a3');

let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');

let c1 = document.getElementById('c1');
let c2 = document.getElementById('c2');
let c3 = document.getElementById('c3');

/* Déclaration variables tableau */

let tableJeu = document.getElementById('tableJeu');
let symbol = 'X';

/* Déclaration variables de victoire */

let victory = document.getElementById('victory');
let pVictory = document.createElement("p");
let buttonReplayVictory = document.createElement("button");
let buttonRecordVictory = document.createElement("button");

let victoryMessage = document.getElementById('victoryMessage');
let replayButton = document.getElementById('replayButton');
let recButton = document.getElementById('recButton');




/* PARTIE CASES */

/* Fonction error qui, si une case est déja remplie, affiche un message d'erreur */

function error(e) {
    if (e.currentTarget.innerHTML != '') {
        alert('Choisissez une autre case');
        return true;
    }
    return false;
};


/* Fonction qui si toutes les cases du tableau sont pleins affiche un message de fin de partie */

function endGame() {
    if (a1.innerHTML != '' && a2.innerHTML != '' && a3.innerHTML != '' && b1.innerHTML != '' && b2.innerHTML != '' && b3.innerHTML != '' && c1.innerHTML != '' && c2.innerHTML != '' && c3.innerHTML != '') {
        return true;
    }
};


/* Fonction qui détecte le gagnant 1 "X" en vérifiant que 3 symboles sont alignés dans le tableau */

function XVictory() {
    if ((a1.innerHTML == 'X' && a1.innerHTML == a2.innerHTML && a2.innerHTML == a3.innerHTML) || (a1.innerHTML == 'X' && a1.innerHTML == b2.innerHTML && b2.innerHTML == c3.innerHTML) || (a1.innerHTML == 'X' && a1.innerHTML == b1.innerHTML && b1.innerHTML == c1.innerHTML) || (a2.innerHTML == 'X' && a2.innerHTML == b2.innerHTML && b2.innerHTML == c2.innerHTML) || (a3.innerHTML == 'X' && a3.innerHTML == b3.innerHTML && b3.innerHTML == c3.innerHTML) || (a3.innerHTML == 'X' && a3.innerHTML == b2.innerHTML && b2.innerHTML == c1.innerHTML) || (b1.innerHTML == 'X' && b1.innerHTML == b2.innerHTML && b2.innerHTML == b3.innerHTML) || (c1.innerHTML == 'X' && c1.innerHTML == c2.innerHTML && c2.innerHTML == c3.innerHTML)) {
        return true;
    };
}


/* Fonction qui détecte le gagnant 2 "O" en vérifiant que 3 symboles sont alignés dans le tableau */

function OVictory() {
    if ((a1.innerHTML == 'O' && a1.innerHTML == a2.innerHTML && a2.innerHTML == a3.innerHTML) || (a1.innerHTML == 'O' && a1.innerHTML == b2.innerHTML && b2.innerHTML == c3.innerHTML) || (a1.innerHTML == 'O' && a1.innerHTML == b1.innerHTML && b1.innerHTML == c1.innerHTML) || (a2.innerHTML == 'O' && a2.innerHTML == b2.innerHTML && b2.innerHTML == c2.innerHTML) || (a3.innerHTML == 'O' && a3.innerHTML == b3.innerHTML && b3.innerHTML == c3.innerHTML) || (a3.innerHTML == 'O' && a3.innerHTML == b2.innerHTML && b2.innerHTML == c1.innerHTML) || (b1.innerHTML == 'O' && b1.innerHTML == b2.innerHTML && b2.innerHTML == b3.innerHTML) || (c1.innerHTML == 'O' && c1.innerHTML == c2.innerHTML && c2.innerHTML == c3.innerHTML)) {
        return true;
    }
};


/* Fonction qui permet d'ouvrir une fenetre pop-up pour que l'utilisateur puisse enregistrer son résultat */

function openWindowRec() {
    let win = window.open(EnregistrerResult.php, width = 600, height = 400);
    win.focus();
};


/* Permet d'afficher si error = false un symbol X ou O en fonction du symbol précédent, fait intervenir la fonction endGame lorsque toutes 
les cases sont pleines */

function Play(e) {
    if (!error(e)) {
        e.currentTarget.innerHTML = symbol;
        if (symbol == 'X') {
            symbol = 'O';

            console.log('placing X OK');
        } else if (symbol == 'O') {
            symbol = 'X';

            console.log('placing O OK');
        }

        console.log('errorOK');
    }
    if (endGame()) {
        tableJeu.style.color = 'rgb(119, 119, 120, 0.5)';
        alert('Partie terminée');

        victory.appendChild(buttonReplayVictory);
        buttonReplayVictory.id = 'replayButton';
        document.getElementById('replayButton').innerHTML = '<a onclick="document.location.reload()">Rejouer</a>';

        console.log('endGame OK');

    }
    if (XVictory()) {
        tableJeu.style.color = 'rgb(119, 119, 120, 0.5)';
        alert('Partie terminée');
        symbol = '';


        victory.appendChild(pVictory);
        victory.appendChild(buttonReplayVictory);
        victory.appendChild(buttonRecordVictory);

        pVictory.id = 'victoryMessage';
        buttonReplayVictory.id = 'replayButton';
        buttonRecordVictory.id = 'recButton';

        document.getElementById('victoryMessage').innerHTML = 'Victoire Joueur 1';
        document.getElementById('replayButton').innerHTML = '<a onclick="document.location.reload()">Rejouer</a>';
        document.getElementById('recButton').innerHTML = '<a href="EnregistrerResult.php"; style="text-decoration: none; color:white;" target="_blank">Enregistrer resultat</a>'

        console.log('victoryX OK');
    }
    if (OVictory()) {
        tableJeu.style.color = 'rgb(119, 119, 120, 0.5)';
        alert('Partie terminée');
        symbol = '';

        victory.appendChild(pVictory);
        victory.appendChild(buttonReplayVictory);
        victory.appendChild(buttonRecordVictory);

        pVictory.id = 'victoryMessage';
        buttonReplayVictory.id = 'replayButton';
        buttonRecordVictory.id = 'recButton';

        document.getElementById('victoryMessage').innerHTML = 'Victoire Joueur 2';
        document.getElementById('replayButton').innerHTML = '<a onclick="document.location.reload()">Rejouer</a>';
        document.getElementById('recButton').innerHTML = '<a href="EnregistrerResult.php"; style="text-decoration: none; color:white;" target="_blank">Enregistrer resultat</a>'

        console.log('victoryY OK');
    }
};


/* Permet de detecter que la grille est vide et faire commencer la partie */

if (a1.innerHTML == '' && a2.innerHTML == '' && a3.innerHTML == '' && b1.innerHTML == '' && b2.innerHTML == '' && b3.innerHTML == '' && c1.innerHTML == '' && c2.innerHTML == '' && c3.innerHTML == '') {
    a1.addEventListener('click', Play);
    a2.addEventListener('click', Play);
    a3.addEventListener('click', Play);

    b1.addEventListener('click', Play);
    b2.addEventListener('click', Play);
    b3.addEventListener('click', Play);

    c1.addEventListener('click', Play);
    c2.addEventListener('click', Play);
    c3.addEventListener('click', Play);
};







/* 

Au cas ou il est nécessaire de préciser en JS que les cases sont vides

a1 = '';
a2 = '';
a3 = '';

b1 = '';
b2 = '';
b3 = '';

c1 = '';
c2 = '';
c3 = '';

*/

/* Permet de detecter l'élément du clic précédent : O, d'afficher X et de l'actualiser en X 

function addX(e) {
    e.currentTarget.innerHTML = 'X';
    previousClick = 'X';
};

if (previousClick == 'O') {
    a1.addEventListener('click', addX);
    a2.addEventListener('click', addX);
    a3.addEventListener('click', addX);

    b1.addEventListener('click', addX);
    b2.addEventListener('click', addX);
    b3.addEventListener('click', addX);

    c1.addEventListener('click', addX);
    c2.addEventListener('click', addX);
    c3.addEventListener('click', addX);
};

*/

/* Permet de detecter l'élément du clic précédent : X, d'afficher O et de l'actualiser en O 

function addO(e) {
    e.currentTarget.innerHTML = 'O';
    previousClick = 'O';
};

if (previousClick == 'X') {
    a1.addEventListener('click', addO);
    a2.addEventListener('click', addO);
    a3.addEventListener('click', addO);

    b1.addEventListener('click', addO);
    b2.addEventListener('click', addO);
    b3.addEventListener('click', addO);

    c1.addEventListener('click', addO);
    c2.addEventListener('click', addO);
    c3.addEventListener('click', addO);
};

*/


/* PARTIE FUNCTION ERROR / END */

/*
function endGame() {
    if (a1.innerHTML != '' && a2.innerHTML != '' && a3.innerHTML != '' && b1.innerHTML != '' && b2.innerHTML != '' && b3.innerHTML != '' && c1.innerHTML != '' && c2.innerHTML != '' && c3.innerHTML != '') {
        tableJeu.style.color = 'rgb(119, 119, 120, 0.5)';
        alert('Partie terminée');
    }
};

endGame;
*/




/* PARTIE VICTORY */


/* Déclaration des variables qui vont servir à afficher le message de victoire et les boutons */




/* Fenetre popup pour enregistrer les resultats */

/*
function openWindowRec() {
    let win = window.open(EnregistrerResult.php, width = 600, height = 400);
    win.focus();
};
*/


/* Permet d'afficher le vainqueur X */
/* En vérifiant que 3 points sont alignés puis on ajoute le message de victoire, le bouton d'enregistrement et le bouton de replay (qui lui, ouvre une fenetre popup) */

/*
function XVictory(e) {
    if ((a1.innerHTML == 'X' && a1.innerHTML == a2.innerHTML && a2.innerHTML == a3.innerHTML) || (a1.innerHTML == 'X' && a1.innerHTML == b2.innerHTML && b2.innerHTML == c3.innerHTML) || (a1.innerHTML == 'X' && a1.innerHTML == b1.innerHTML && b1.innerHTML == c1.innerHTML) || (a2.innerHTML == 'X' && a2.innerHTML == b2.innerHTML && b2.innerHTML == c2.innerHTML) || (a3.innerHTML == 'X' && a3.innerHTML == b3.innerHTML && b3.innerHTML == c3.innerHTML) || (a3.innerHTML == 'X' && a3.innerHTML == b2.innerHTML && b2.innerHTML == c1.innerHTML) || (b1.innerHTML == 'X' && b1.innerHTML == b2.innerHTML && b2.innerHTML == b3.innerHTML) || (c1.innerHTML == 'X' && c1.innerHTML == c2.innerHTML && c2.innerHTML == c3.innerHTML)) {
        document.victory.appendChild(pVictory);
        document.victory.appendChild(buttonReplayVictory);
        document.victory.appendChild(buttonRecordVictory);

        pVictory.id = 'victoryMessage';
        buttonReplayVictory.id = 'replayButton';
        buttonRecordVictory.id = 'recButton';

        document.getElementById('victoryMessage').innerHTML = 'Victoire Joueur 1';
        document.getElementById('replayButton').innerHTML = 'Rejouer';
        document.getElementById('recButton').innerHTML = '<a href="EnregistrerResult.php";>Enregistrer resultat</a>;'
    };
}
*/


/* Permet d'afficher le vainqueur O */
/* En vérifiant que 3 points sont alignés puis on ajoute le message de victoire, le bouton d'enregistrement et le bouton de replay (qui lui, ouvre une fenetre popup) */

/*
function XVictory(e) {
    if ((a1.innerHTML == 'O' && a1.innerHTML == a2.innerHTML && a2.innerHTML == a3.innerHTML) || (a1.innerHTML == 'O' && a1.innerHTML == b2.innerHTML && b2.innerHTML == c3.innerHTML) || (a1.innerHTML == 'O' && a1.innerHTML == b1.innerHTML && b1.innerHTML == c1.innerHTML) || (a2.innerHTML == 'O' && a2.innerHTML == b2.innerHTML && b2.innerHTML == c2.innerHTML) || (a3.innerHTML == 'O' && a3.innerHTML == b3.innerHTML && b3.innerHTML == c3.innerHTML) || (a3.innerHTML == 'O' && a3.innerHTML == b2.innerHTML && b2.innerHTML == c1.innerHTML) || (b1.innerHTML == 'O' && b1.innerHTML == b2.innerHTML && b2.innerHTML == b3.innerHTML) || (c1.innerHTML == 'O' && c1.innerHTML == c2.innerHTML && c2.innerHTML == c3.innerHTML)) {
        document.victory.appendChild(pVictory);
        document.victory.appendChild(buttonReplayVictory);
        document.victory.appendChild(buttonRecordVictory);

        pVictory.id = 'victoryMessage';
        buttonReplayVictory.id = 'replayButton';
        buttonRecordVictory.id = 'recButton';

        document.getElementById('victoryMessage').innerHTML = 'Victoire Joueur 2';
        document.getElementById('replayButton').innerHTML = 'Rejouer';
        document.getElementById('recButton').innerHTML = '<a href="EnregistrerResult.php";>Enregistrer resultat</a>;'
    }
};
*/

/*

let victoryMessage = document.getElementById('victoryMessage');
let replayButton = document.getElementById('replayButton');
let recButton = document.getElementById('recButton');

*/