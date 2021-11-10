// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
    //generare 5 numeri univoci -> ciclo
    //visualizzarli in pagina 
// Da lì parte un timer di 30 secondi.
    //creare il timer di 30 secondi -> setTimeout
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    //fare un ciclo per i 5 prompt 
    //estrapolare i valori del prompt
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    //confrontare i numeri dell'utente con i numeri generati dal pc

const numbers = [];

while (numbers.length < 5) {
    let randomNum = Math.floor(Math.random() * 100);
    let found = false;

    for(let i = 0; i < numbers.length; i++) {
        if(randomNum === numbers[i]) {
           found = true;
        } 
    }
    if (!found) {
        numbers.push(randomNum);
    }
}

//nodi 
let container = document.getElementById("container");
let results = document.createElement("div");
results.classList.add("results");
let numContainer = document.createElement("div");
numContainer.classList.add("num-container");
container.append(numContainer);
container.append(results);
numContainer.innerHTML = `${numbers}`; 

//variabili
let userNumbers = "";
const userNumArr = [];
const guessedNumbers = [];

//timer
setTimeout(myTimer,1000);

//funzioni
function myTimer(){
    enterNum();
    resultsFunc();
    console.log("guessed num", guessedNumbers);
    results.innerText = `Hai indovinato ${guessedNumbers.length} numeri: ${guessedNumbers} `
}

function enterNum() {
    for(let i = 0; i < 5; i++) {
        userNumbers = parseInt(prompt("inserisci un numero"));
        userNumArr.push(userNumbers); 
    } 
}

function resultsFunc() {
    for(let i = 0; i < userNumArr.length; i++) {
        let double = false;
        for(let j = 0; j < numbers.length; j++) {
             if (userNumArr[i] === numbers[j]){
                 guessedNumbers.push(userNumArr[i]);
            } 

            // if (userNumArr[i] === userNumArr[j]) {
            //     double = true;
            // }

            // if (double === false) {
            //     guessedNumbers.push(userNumArr[i]);
            // }

            
            
    
        }
    }
}

// se il numero inserito dall'utente si ripete, lo pushamo solo una volta nell'array dei numeri indovinati