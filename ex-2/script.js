// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
var msg;

// chiediamo all'utente di inserire due parole e le salviamo
var parola1 = prompt("Inserisci la prima parola");
var parola2 = prompt("Inserisci la seconda parola");

// confrontiamo la lunghezza delle due parole e gestiamo l'ordine delle parole in output di conseguenza
if (parola1.length < parola2.length) {
  msg = "Parola più corta: " + parola1 + " Parola più lunga: " + parola2;
} else if (parola1.length > parola2.length) {
  msg = "Parola più corta: " + parola2 + " Parola più lunga: " + parola1;
} else {
  msg = parola1 + " e " + parola2 + " sono lunghe uguali."
}

// stampiamo il risultato a schermo
document.getElementById('testo').innerHTML = msg;