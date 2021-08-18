let factorial = 1;
for ( let i = 6; i >= 1; i--){
    factorial = factorial * i;
}
console.log(factorial);

function factro (fact){
    if( fact == 1){
        return 1;
    }
    return fact * factro(fact-1);
}
console.log(factro(7));