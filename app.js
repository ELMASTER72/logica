// 1. Encuentre el promedio de edades de un grupo de 10 estudiantes.
// 2. Halle el número más pequeño encontrado en un Array
// 3. Retorne un Array con las cadenas que contengan la palabra casa.
// 4. Retorne un array con con todos los números elevados al cuadrado.
// 5. Realice un programa que genere 20 números aleatorios entre 1 y 50.
// 6. Encuentre el password: De acuerdo a un password entregado, retorne  
//  true si se encuentra en una colección de arrays


let ages = [16,17,18,19,20,16,15,18,15,19];




function average() {
    let sum = 0; 
    let div = 0;
    for (let i = 0; i < ages.length; i++) {
        sum += ages[i];
        div = sum / 10;
    }
    return "suma de las edades de los estudiantes: " + sum + "\n" 
    + "Promedio de las edades de los estidiantes: " + div ;
    
    
}

console.log(average());

function search() {
    let i  = ages.length;
    min = ages[i-1];
    while (i--) {
        if (ages[i] < min) {
            min  = ages[i];
        }
    }
    return min
}
console.log(search());


let phrase =[
    {size: "18 mts", category: "casa", urbanization: "si"},
    {size: "10 mts", category: "apartamento", urbanization: "si"},
    {size: "25 mts", category: "finca", urbanization: "no"},
    {size: "15 mts", category: "casa", urbanization: "no"},
    {size: "20 mts", category: "apartamento", urbanization: "si"},
];

function house() {
    return phrase.filter(function(phrase) {
        return phrase.category === "casa"
     });
}

console.log(house());

function numbers() {
    let high = 0;
    let array=[];
    for (let i = 0; i < ages[i]; i++) {
        high = ages[i] * ages[i];
        console.log([high]); 
    }
    
}
console.log(numbers());


