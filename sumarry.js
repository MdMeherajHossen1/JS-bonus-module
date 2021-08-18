let  factorial = 1;
for (let i = 7; i >=1; i--){
   factorial = factorial * i;

}

console.log(factorial);


function getfactorial (n){
    if(n === 1){
        return 1;
    }
    return n * getfactorial(n-1);
}
console.log(getfactorial(7));