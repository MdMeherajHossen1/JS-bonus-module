 let sum = 0;
for ( let i = 0; i <= 6; i++){
    sum = sum + i;

}
console.log(sum);
// incrimental loop 


let sum1 = 0;
for (let i = 6; i >= 1; i--){
    sum1 = sum + i;
}
console.log(sum1);

// decrimental = komtece;


let decrimental =  0;
for (let i = 6; i >= 1; i--){
    decrimental = decrimental + i;
}
console.log(decrimental);

function sum2 (i){
      if (i == 1){
          return 1;
      }
    return i + sum2(i-1);
}
//  6 + 5 + 4 + 3 + 2 + 1 = 21
console.log(sum2(6));

function factorial (fact){
    if( fact == 1){
        return 1;
    }
    return fact * factorial ( fact -1);

}
console.log(factorial (7));


let gun = 1;
for (let i = 7; i >= 1; i--){
    gun = gun  * i;
}
console.log( gun);

let factro = 1;
for ( let i = 7; i >= 1; i-- ){
    factro = factro * i;
}
console.log(factro);


// fibonacci furmula  is that always sum with privicous ttwo number ;
// n = (n-1) + (n-2);

let fibonacci = [0, 1];
function fibonacci (fibo){
    if(fibo == 1){
       return 1;
    }
    else if (fibo == 0){
        return [0,1];
    }
    return 
}