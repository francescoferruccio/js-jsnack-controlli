// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.
var somma = 0;

// chiediamo all'utente di inserire un numero e lo aggiungiamo ad un totale
var num = parseInt(prompt("Inserisci un numero"));
if (isNaN(num)) {
  alert("Il valore che hai inserito non è valido, verrà contato come 0.");
  num = 0;
}
somma = somma + num;

// ripetiamo altre 4 volte
var num = parseInt(prompt("Inserisci un numero"));
if (isNaN(num)) {
  alert("Il valore che hai inserito non è valido, verrà contato come 0.");
  num = 0;
}
somma = somma + num;

var num = parseInt(prompt("Inserisci un numero"));
if (isNaN(num)) {
  alert("Il valore che hai inserito non è valido, verrà contato come 0.");
  num = 0;
}
somma = somma + num;

var num = parseInt(prompt("Inserisci un numero"));
if (isNaN(num)) {
  alert("Il valore che hai inserito non è valido, verrà contato come 0.");
  num = 0;
}
somma = somma + num;

var num = parseInt(prompt("Inserisci un numero"));
if (isNaN(num)) {
  alert("Il valore che hai inserito non è valido, verrà contato come 0.");
  num = 0;
}
somma = somma + num;

// visualizziamo il totale a schermo
document.getElementById('testo').innerHTML = "La somma dei numeri inseriti è " + somma;