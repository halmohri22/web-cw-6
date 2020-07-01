
 let temps = [32, 42 , 56, 22, 60, 15, 27, 33, 35];

function logger(){
    
    console.log(temps);
}
 
logger();


function hottestDays(){
    let hottest_days = [];
       for( new_temp of temps){
    if(new_temp > 40){
       hottest_days.push(new_temp);
    }
    }
    console.log(hottest_days);
}

hottestDays(temps);

function bookId(){
  let holder =  false;

let books = [ 
    { name : "Alchemist",
        id: "22",},
    { name : "Lord of the flies",
    id: "23",},
     { name : "Harry Potter",
id : "24",},
 { name : "Orders from Berlin",
id : "25", }
];
    let user = prompt("enter book name or ID number");

    for (let i =0; i< books.length; i++)
    { 
         if(user == books[i].name && holder == false) {

        alert("we have this book!");
        holder=true;
        }

    }
    if(holder==false) {

        alert("Error: unidentified");

}
 }
let product = prompt("enter product (write 'done' when you're done)");

let price = prompt("enter price");

let quantity = prompt("enter quantity");

let products= [];

let prices= [];

let quantities= [];

while(product!="done"){
    products.push(product);
    prices.push(price);
    quantities.push(quantity);

     product = prompt("enter product (write 'done' when you're done)");
if(product!="done"){
    price = prompt("enter price");

    quantity = prompt("enter quantity");
}


};

let result= 0;

for(let i =0; i< prices.length; i++){
result= result+(parseFloat(prices[i])*quantities[i]);
};

console.log("--------------");

console.log("reciept");

console.log("--------------");
for(let i =0; i< prices.length; i++){
    console.log(quantities[i] + " "+ products[i]+ " "+ prices[i]+ " KD");
    };
console.log("--------------");
console.log("sum: "+ result+ " KD");
