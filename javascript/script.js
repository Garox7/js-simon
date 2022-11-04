/*
1. Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
    - Creiamo un Array che verrà riampita da numeri casuali
        - creiamo una funzione per inserire i numeri all'interno di un'array

    Creaiamo una funzione "create element" contenente un ciclo FOR che:
        - Crea 5 div
        - aggiunge a ciascun div la classe "random-num"
        - associamo ciascun numero random a .innerHTML di "random-num" 
        - inseriamo i div all'interno di "div.memo-number__random"

2. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    - all'interno di una funzione timeToHide di 30 secondi:
        - aggiungiamo la classe hidden ai numeri per nasconderi
        - inseriamo la funzione "user collect" che raccoglie i numeri dell'utente in un array

3. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    Condrontiamo gli elementi dell'array per indicare gli elementi uguali (cioè i numeri indovinati).
*/

const numberDisplay = document.querySelector('.memo-number__random');
console.log(numberDisplay) //DEBUG

//funzione che serve a generare 5 numeri random 
function generateNumbers(num) {
    const arrRandoms = [];
    for (let i = 0; i < num; i++) {
        randomNumbers = Math.floor(Math.random() * 100);
        arrRandoms.push(randomNumbers);
    }
    return arrRandoms;
}

//funzione che serve a raccogliere i numeri in un'array
function userCollect(num) {
    const numUserArray = [];
    for (let i = 0; i < num; i++) {
        numUser = parseInt(prompt('Inserisci il primo numero'));
        console.log(numUser);
        numUserArray.push(numUser);
    }
    return numUserArray;
}

//Funzione che nasconde i numeri e avvia i prompt raccogliendo i dati in un array
function timeToHide(){
    numberDisplay.classList.add('hidden');
    userCollect(5);
}

numberGenerate = generateNumbers(5);
console.log(numberGenerate); //DEBUG

//ciclo for che va a generare i div che contengono i numeri random
for (let i = 0; i < 5; i++){
    const numElement = document.createElement('div');
    numElement.classList.add('random-num');
    numElement.innerHTML = numberGenerate[i];
    numberDisplay.append(numElement)
}

setTimeout(timeToHide, 3000);

numberUserCollect = userCollect();
console.log(numberUserCollect); //DEBUG



