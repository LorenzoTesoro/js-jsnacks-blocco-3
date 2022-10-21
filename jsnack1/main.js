// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
const cars = [
    {
        marca: 'volvo',
        modello: 'm1',
        alimentazione: 'benzina'
    },
    {
        marca: 'bmw',
        modello: 'm2',
        alimentazione: 'benzina'
    },
    {
        marca: 'fiat',
        modello: 'm3',
        alimentazione: 'diesel'
    },
    {
        marca: 'mercedes',
        modello: 'm4',
        alimentazione: 'diesel'
    },
    {
        marca: 'crysler',
        modello: 'm5',
        alimentazione: 'gpl'
    },
    {
        marca: 'opel',
        modello: 'm6',
        alimentazione: 'gpl'
    },
    {
        marca: 'audi',
        modello: 'm7',
        alimentazione: 'elettrico'
    },
    {
        marca: 'ferrari',
        modello: 'm8',
        alimentazione: 'elettrico'
    },
    {
        marca: 'ford',
        modello: 'm9',
        alimentazione: 'metano'
    },
    {
        marca: 'hyundai',
        modello: 'm10',
        alimentazione: 'metano'
    },    
]
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// Infine stampa separatamente i 3 array.

// 1. auto a benzina
/* const carBenzina = cars.filter(function(element){
    console.log(element.alimentazione)
    if(element.alimentazione === 'benzina');
}) */

const carBenzina = cars.filter( car =>{
    //blocco di codice che deve restituire true/false
    if(car.alimentazione === 'benzina'){
        return true;
    }
})

console.log(carBenzina);

// 2. auto a diesel
const carDiesel = cars.filter( car =>{
    //blocco di codice che deve restituire true/false
    if(car.alimentazione === 'diesel'){
        return true;
    }
})
console.log(carDiesel);

// 3. altre auto
const othercars = cars.filter( car =>{
    //blocco di codice che deve restituire true/false
    if(car.alimentazione !== 'benzina' && car.alimentazione !== 'diesel'){
        return true;
    }
}) 

console.log(othercars);
