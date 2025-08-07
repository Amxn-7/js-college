// // 1
// let num = 10;
// if(num>0){
//     console.log("Positive");
// }else if(num<0){
//     console.log("Negative");
// }else{
//     console.log("Zero");
// }

// // 2
// if(num%2==0){
//     console.log("Even");
// }else{
//     console.log("Odd");
// }

// // 3
// let n1=10;
// let n2=20;
// let n3=30;
// if(n1>n2&&n1>n3){
//     console.log("n1 is greatest");
// }else if(n2>n1&&n2>n3){
//     console.log("n2 is greatest");
// }else{
//     console.log("n3 is greatest");
// }

// // 4 
// let year = 2014
// if((year%100!=0 && year%4==0)|| year%400==0){
//     console.log("Leap year");
// }else{
//     console.log("Not a leap year");
// }

// // 5
// let mark = 74;
// if(mark>=90 && mark<=100){
//     console.log("A+");
// }else if(mark>=75 && mark<90){
//     console.log("A");
// }else if(mark>=60 && mark<=75){
//     console.log("B");
// }else if(mark>=40 && mark<=60){
//     console.log("C");
// }else{
//     console.log("Fail");
// }

// // 6
// let char = 'A';
// if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'||char=='A'||char=='E'||char=='I'||char=='O'||char=='U'){
//     console.log("Vowel");
// }else{
//     console.log("Consonant");
// }

// // 7
// let age = 65;
// if(age < 13){
//     console.log("Child");
// }else if(age >= 13 && age < 20){
//     console.log("Teen");
// }else if(age >= 20 && age < 60){
//     console.log("Adult");
// }else{
//     console.log("Senior")
// }

// // 8
// let user = 'Admin';
// let password = 'pass123';
// let userInp = 'Admin';
// let passwordInp = 'pass123';
// if(user == userInp && password == passwordInp){
//     console.log("Login succesful");
// }else{
//     console.log("Login failed");
// }

// // 9
// let n = 15;
// if(n%3==0&&n%5==0){
//     console.log("Divisible by both 3 and 5");
// }else if(n%3==0){
//     console.log("Divisible by 3");
// }else if(n%5==0){
//     console.log("Divisible by 5");
// }

// // 10
// let a=30;
// let b=60;
// let c=90;
// if((a+b+c) == 180){
//     console.log("Valid");
// }else{
//     console.log("Invalid");
// }

// // 11
// let d = 123;
// if(d>=100&&d<=999){
//     console.log("Three digit number");
// }else{
//     console.log("Not a three digit number");
// }

// // 12
// let x=9;
// let y=8;
// let z='*'
// if(z=='+'){
//     console.log(x+y);
// }else if(z=='-'){
//     console.log(x-y);
// }else if(z=='*'){
//     console.log(x*y);
// }else if(z=='/'){
//     console.log(x/y);
// }else {
//     console.log("Invalid Operator");
// } 

// // 13
// let u = 79;
// if(u>=10&&u<=50){
//     console.log("In range");
// }else{
//     console.log("out of range");
// }

// // 14
// let day=5;
// if(let==1){
//     console.log("Monday");
// }else if(let==2){
//     console.log("Tuesday");
// }else if(let==3){
//     console.log("Wednesday");
// }else if(let==4){
//     console.log("Thursday");
// }else if(let==5){
//     console.log("Friday");
// }else if(let==6){
//     console.log("Saturday");
// }else if(let==7){
//     console.log("Sunday");
// }else{
//     console.log("Invalid day number");
// }

// // 15
// let clr='Green';
// if(clr=='Red'){
//     console.log("Stop");
// }else if(clr=='Yellow'){
//     console.log("Get Ready");
// }else if(clr=='Green'){
//     console.log("Go");
// }else{
//     console.log("Invalid color");
// }

// // 16
// let p = 56;
// while(p>0){
//     let dig = p%10;
    
// }






// //1
// for(let a=1;a<=10;a++){
//     console.log(a);
// }


// // 2
// for(let a=10;a>=1;a--){
//     console.log(a);
// }

// // 3
// for(let a=1;a<=10;a++){
//     if(a%2==0){
//         console.log(a);
//     }
// }

// 4
// for(let a=1;a<=10;a++){
//     if(a%2!=0){
//         console.log(a);
//     }
// }

// 5
// for(let a=1;a<=50;a++){
//     if(a%5==0){
//         console.log(a);
//     }
// }

// 6
// let b=0;
// for(let a=1;a<=10;a++){
//     b+=1;
// }
// console.log(b);

// 7
// for(let a=1;a<=10;a++){
//     console.log('5 x '+a+" = "+a*5);
// }

// 8
// let stars = "";
// for(let i=0;i<=10;i++){
//     stars+="*";
// }
// console.log(stars);

// 9
// for(let a=0;a<=10;a++){
//     console.log("Task "+a);
// }

// 10
// for(let a=5;a>=1;a--){
//     console.log(a);
// }
// console.log("Launch");

// 11
// let bonus = 0;
// for(let i=1;i<=100;i++){
//     if(i%2==0){
//         bonus+=10;
//     }
// }
// console.log(bonus);

// 12;
// let a=0
// for(let i=50;i<=100;i++){
//     if(i%2!=0){
//         a+=1;
//     }
// }
// console.log(a);

// 13
// let bonus = 0;
// for(let i=1;i<=100;i++){
//     if(i%9==0){
//         bonus+=1;
//     }
// }
// console.log(bonus);

// 14
// for(let i=1;i<=5;i++){
//     let str="";
//     for(let j=1;j<=i;j++){
//         str+="*";
//     }
//     console.log(str);
// }


// 15
// for(let a=1;a<=10;a++){
//     console.log("7 x "+a+" = "+a*7);
// }

// 16
// for(let i=1;i<=30;i++){
//     if(i%2==0){
//         console.log("Even");
//     }else if(i%2!=0){
//         console.log("Odd");
//     }
// }

// 17
// for(let i=1;i<=50;i++){
//     if(i==5||i==13){
//         continue;
//     }
//     console.log(i);
// }

// 18
// for(let i=1;i<=30;i++){
//     if(i%3==0){
//         console.log("Fizz");
//         continue;
//     }
//     console.log(i)
// }

// 19
// for(let i=1;i<=30;i++){
//     if(i%5==0){
//         console.log("Buzz");
//         continue;
//     }
//     console.log(i)
// }

// 20
// for(let i=1;i<=30;i++){
//     if(i%3==0&&i%5==0){
//         console.log("Fizz Buzz");
//         continue;
//     }
//     console.log(i)
// }

// 21
// for(let j=1;j<=5;j++){
//     for(let a=1;a<=10;a++){
//     console.log(j+' x '+a+" = "+a*j);
//     }
//     console.log("\n");
// }

// 22
// for(let i=1;i<=5;i++){
//     let str="";
//     for(let j=1;j<=5;j++){
//         str+="*";
//     }
//     console.log(str);
// }

// 23
// for(let i=1;i<=10;i++){
//     let str="";
//     let spc="";
//     for(let j=2;j<=i;j++){
//         spc+=" ";
//     }
//     for(let k=0;k<2*(10-i)+1;k++){
//         str+="*";
//     }
//     console.log(spc+str);
// }

// 24
// let fact=1;
// for(let i=1;i<=6;i++){
//     fact*=i;
// }
// console.log(fact);

// 25
// let isPrime = 0;
// let n = 29;
// for(let i=2; i<29; i++){
//     if(n % i == 0){
//         isPrime = 1;
//     }
// }
// if(isPrime == 1){
//     console.log("Not prime")
// }else{
//     console.log("prime")
// }

// 27
// let num = 123;
// let rev=0;
// while(num>0){
//     let dig = num%10;
//     rev = rev*10 + dig;
//     num = Math.floor(num/10);
// }
// console.log(rev);

// 28
// let count = 0;
// for(let i=1;i<=100;i++){
//     if(i%3==0&&i%2!=0){
//         console.log(i);
//         count+=1;
//         if(count>=10){
//             break;
//         }
//     }
// }

// 29
// let num = 5432;
// let sum=0;
// while(num>0){
//     let dig = num%10;
//     sum += dig;
//     num = Math.floor(num/10);
// }
// console.log(sum);

// 30
// let num = 121;
// let temp=num;
// let rev=0;
// while(temp>0){
//     let dig = temp%10;
//     rev = rev*10 + dig;
//     temp = Math.floor(temp/10);
// }
// if(rev==num){
//     console.log("Palindrome");
// }else{
//     console.log("Not a palindrome");
// }








// 1
// for(let h=0;h<=2;h++){
//     for(let m=0;m<=60;m++){
//         console.log("time is " + h+":"+m);
//         if(h==2&&m==30){
//             break;
//         }
//     }
// }

// 2
// let num = 4324747859;
// let hi=0
// while(num>0){
//     let dig = num%10;
//     if(dig>hi){
//         hi=dig;
//     }
//     num = Math.floor(num/10);
// }
// console.log(hi);

// 3
// let num = 4324747859;
// let hi=0;
// let hi2=0;
// while(num>0){
//     let dig = num%10;
//     if(dig>hi){
//         hi2=hi;
//         hi=dig;
//     }else if(dig>hi2&&dig!=hi){
//         hi2=dig;
//     }
//     num = Math.floor(num/10);
// }
// console.log(hi2);


// 4
// let num = 123;
// let rev=0;
// while(num>0){
//     let dig = num%10;
//     rev = rev*10 + dig;
//     num = Math.floor(num/10);
// }
// console.log(rev);

// 5
// for(let j=2;j<=100;j++){
//     for(let i=2; i<29; i++){
//         if(j % i == 0){
//             console.log(j);
//         }
//     }
// }