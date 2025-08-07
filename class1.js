/*
create a variable and store electric usage unit 
for first 100 units - free 
next 200 units - 1 rupee per unit 
next 200 units - 2 rupee per unit 
after - 5 rupee per unit 
*/
let units = 455;
let charge=0;
if (units<=100) {
    charge=0;
}
else if(units<=300){
    charge = (units-100)*1;
}
else if(units<=500){
    charge = 200*1 + (units-300)*2;
}else{
    charge = 200*1 + 200*2 + (units-500)*5;
}
console.log(charge);



// -display the greatest of three numbers
let a = 45;
let b = 78;
let c = 12;

let greatest;

if (a >= b && a >= c) {
    greatest = a;
} else if (b >= a && b >= c) {
    greatest = b;
} else {
    greatest = c;
}

console.log("Greatest number is:", greatest);


// - get age , pincode and price,
//    if age>18 and price >1000 or pincode is 200004,
//     add 10% tax to the price 
//    else 
//     add 5% to the price 


let age =19;
let pincode =200004;
let price = 1500;

if((age>18 && price >1000) || pincode==20004 ){
    price = price + 0.1*price;
}
else{
    price= price + price*.05;
}
console.log("The final price is: ",price);