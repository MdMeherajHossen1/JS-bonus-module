const grocereyItems = [
    {name : 'potato', price : 40},
    {name : 'onion', price : 50},
    {name : 'cuchamber', price : 25},
    {name : 'green chili', price : 70},
    {name : 'full copy', price : 60},
    {name : 'lauw', price : 40},
    {name : 'palan shak', price : 45},
    {name : 'kolmir shak', price : 42},
    {name : 'lal shak', price : 30},
    {name : 'komrar shak', price : 24},
    {name : 'elisar shak', price : 78},
];


// function cheapProducts (grocereyItems){
//     const lowPrice = [];
//     for (const item of grocereyItems){
//         if(item.price < 50){
//             break;
//         }
//     }
//     return lowPrice;
// }
// console.log(cheapProducts(grocereyItems));

for (const item of grocereyItems){
    if( item.price < 50){
        continue;
    }
    console.log(item);
}
