function calcularPromedios(numeros){
    let suma = 0;
    for(let i=0; i<numeros.length; i++){
        suma+=numeros[i];
    }
    return (suma/numeros.length);
}
console.log(calcularPromedios([8,10,5,7]));