const products = [
    {name : 'hp laptop', price: 30000},
    {name : 'samsung laptop', price: 24000},
    {name : 'asus laptop', price: 23000},
    {name : 'apple laptop', price: 50000},
    {name : 'apple smart watch', price: 12000},
    {name : 'samsung smart watch', price: 30000},
    {name : 'huawai watch', price: 33000},
    {name : 'dell desktop', price: 23000},
    {name : 'accer desktop', price: 40000},
    {name : 'lenevo desktop', price: 10000},
    {name : 'walton desktop', price: 20000},
];

function searchProducts (products, searchString){
    let match = [];
    for(const product of products){
        const name =  product.name;
        if(name.indexOf(searchString) != -1){
            match.push(product);
        }
    }
    return match;
}

const getBySearch = searchProducts(products, 'watch');
console.log(getBySearch);


const grocereyItems = [
    {name : 'potato', price : 40},
    {name : 'onion', price : 50},
    {name : 'cuchamber', price : 25},
    {name : 'green chili', price : 70},
    {name : 'full copy', price : 60},
    {name : 'lauw', price : 40},
    {name : 'palan shak', price : 40},
    {name : 'kolmir shak', price : 40},
    {name : 'lal shak', price : 40},
    {name : 'komrar shak', price : 40},
    {name : 'elisar shak', price : 40},
];

function searchGrocerey ( grocereyItems, searchText){
    const finded = [];

    for (const item of grocereyItems){
        if(item.name.indexOf(searchText) != -1){
            finded.push(item.name);
        }
    }
    return finded;
}
console.log(searchGrocerey(grocereyItems, 'shak'));