// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.

const animals = 
[
    {nome:'leone', famiglia: 'felidi', classe: 'mammiferi'},
    {nome:'cane', famiglia: 'canidi', classe: 'mammiferi'},
    {nome:'gallina', famiglia: 'fasianidi', classe: 'uccelli'}
]

// Crea un nuovo array con la lista dei mammiferi.

const mammals = animals.filter(animal =>{
    if (animal.classe === 'mammiferi'){
        return true
    }
    return false
})

console.log(mammals);