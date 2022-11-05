/*
1. Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
    Creiamo un Array "numberGenerate" che verrà riampita da numeri casuali
        - creiamo una funzione "randomNum" per pushare i numeri all'interno di un'array

    Creaiamo un ciclo FOR che:
        - Crea 5 div
        - aggiunge a ciascun div la classe "random-num"
        - associamo i numeri andomGenerate all' .innerHTML di "random-num":
        - inseriamo i div all'interno di "memo-number__random"

2. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

    - creo una funzione timeToHide di 30 secondi:
        - aggiungiamo la classe hidden ai numeri per nasconderi
        - inseriamo la funzione "UsercCollect" che raccoglie i numeri dell'utente in un array

        3. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
            Condrontiamo gli elementi dell'array per indicare gli elementi uguali (cioè i numeri indovinati).
            - inseriamo la funzione isEqual che confronta i numeri immessi dall'utente con quelli random
            e li inserisce dentro un'array per ricavarne il punteggio
*/

const numberDisplay = document.querySelector('.memo-number__random');

//funzione che serve a generare 5 numeri random 
function randomNum(num) {
    const arrRandoms = [];
    for (let i = 0; i < num; i++) {
        randomNumbers = Math.floor(Math.random() * 100);
        arrRandoms.push(randomNumbers);
    }
    return arrRandoms;
}

//funzione che serve a raccogliere i numeri dati dall'utente in un'array
function userCollect(num) {
    const numUserArray = [];
    for (let i = 0; i < num; i++) {
        numUser = parseInt(prompt('Inserisci il primo numero'));
        console.log(numUser); //DEBUG
        numUserArray.push(numUser);
    }
    return numUserArray;
}

//funzione di confronto tra numeri random e numeri immessi dall'untente restituisce la lunghezza dell'array che rapresenta il punteggio
const numGuess = []; //Array di raccolta numeri indovinati (nonchè punteggio)
function isEqual(userArray, randomArray) { 

    for (let i = 0; i < randomArray.length ; i++) {
        if (randomArray[i] === userArray[i]) {
            numGuess.push(userArray[i]);
            console.log('Indovinati', numGuess);

        } else if (randomArray[i] !== userArray[i]) {
            let numWrong = randomArray[i];
            console.log('Sbagliati', numWrong);
        }
    }
    return numGuess.length;

}

//Funzione che nasconde i numeri e avvia i prompt raccogliendo i dati in un array
function timeToHide(){
    numberDisplay.classList.add('hidden');

    numberUserCollect = userCollect(5);
    console.log('Numeri indovinati:',numberUserCollect); //DEBUG

    isEqual(numberUserCollect, numberGenerate);
    console.log('il tuo punteggio è:', numGuess.length);
}

numberGenerate = randomNum(5); //array di numeri random generati
console.log('numeri da indovinare:', numberGenerate); //DEBUG

//ciclo for che va a generare i div che contengono i numeri random
for (let i = 0; i < 5; i++){
    const numElement = document.createElement('div');
    numElement.classList.add('random-num');
    numElement.innerHTML = numberGenerate[i];
    numberDisplay.append(numElement)
}

setTimeout(timeToHide, 1000); // Avvio della funzione dopo ** secondi.