// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
var msg;

// chiediamo all'utente di inserire due numeri e li salviamo
var num1 = parseInt(prompt("Inserisci il primo numero"));
var num2 = parseInt(prompt("Inserisci il secondo numero"));

// confrontiamo i due numeri e salviamo quello più grande
if (num1 > num2) {
  msg = "Il numero più grande è " + num1;
} else if (num1 < num2) {
  msg = "Il numero più grande è " + num2;
} else {
  msg = "I numeri inseriti sono uguali";
}

// visualizziamo l'output a schermo
document.getElementById('testo').innerHTML = msg;