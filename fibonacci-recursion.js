let fibonaci = [0, 1];
for (let i = 2; i <= 7; i++){
    fibonaci[i] = fibonaci[i-1] + fibonaci[i -2];
}
console.log(fibonaci);

function fibonacci (fibo){
    if(fibo == 0){
        return 0;
    }
    if(fibo == 1){
        return (0,1);
    }
    return fibonacci(fibo -1) + fibonacci (fibo -2);
}
console.log(fibonacci(9));