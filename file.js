/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*
String: è una sequenza di caratteri racchiusi tra due virgolette o una virgoletta
Number: può essere un qualsiasi numero
Boolean: è una logica che può avere due valori true o false
Undefined: è un valore che ancora non è stato assegnato alla variabile
Null: è un valore che viene assegnato alla variabile volutamente come ''nullo'' quindi vuoto  */

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* E' una raccolta di accopiamenti chiave-valore */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/


let numero1 = 12;
let numero2 = 20;
let somma = numero1 + numero2;
console.log(somma)


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let nome = 'Alessandro'

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/


let numerox = 12 
let numeroy = 4
let sottrazione = numerox - numeroy;

console.log (sottrazione)


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/


let nomeuno = 'john';
let nomedue = 'John';

console.log(nomeuno !== nomedue) 


let nome1 = 'john';
let nome2 = 'John';

console.log(nome1.toLowerCase() === nome2.toLowerCase());


