//LOOPS AND STRINGS
//LOOOPS -  loops are used to execute a piece of code again and again
//FOR LOOP
 /*for(let i=1; i<=10; i++) {
    console.log("hello");
}
console.log("loop has ended"); */

    //CALCULATE SUM OF 1 TO 5;
  /* let sum = 0;
   let n=9;
   for(let i =0; i<=n; i++) {
    sum = sum + i;
    console.log("sum",sum);

   }*/

   //WHILE LOOP 
   /*let i = 1;
   while(i<=5) {
    console.log("hello ");
    i++;                              
   }*/

   //DO WHILE LOOP 
  /* let i = 20;
   console.log("hello");{
    while(i<=5);
   }*/
                                       /*diff bet WHILE AND DO WHILE - NP SEMICOLON AND SEMICOLON
                                         NO OUTPUT AND ATLEAST ONE OUTPUT*/

//FOR OF LOOP - SPECIAL TYPE OF LOOP-:this type of loop is used only for arrays and strings
/*let str = "adyasha";
let size = 0;
for (let i of str) {
    console.log("i",i);
    size++;
}
console.log("size",size); */

//FOR IN LOOP -: SPECIAL TYPE OF LOOP USED FOR OBJECT;
/*let student = {
    name: "Adyasha sahoo",
    redgeNo: "013",
    cgpa:"8.6",
    isPass:"yes",

};
for(let key in student)
console.log("key=",key,"value=",student[key]); */

//PRACTICE1 -PRINT EVEN NUMBERS FROM 0 TO 100

/*for(let i=0; i<=100; i++) {
    
    if(i%2===0) {
        console.log("i",i);
    }
   

}*/
//PRACTICE 2 - CREATE A GAME WHERE YOU START WITH ANY RANDOM GAME NUMBER ....
/*let gameNumb = 78;
let userNumb = prompt("enter the gamenumb");
while(userNumb!=gameNumb) {
    userNumb = prompt("YOU ENTERED WRONG,TRY AGAIN");

}
console.log("CONGRATULATION, YOU WON");*/

//STRING - it is a sequence of characters to represent text
//initialization of strings - create a string
/*let str = "Adyasha";
let str2 = "Sahoo"; or we can represent the string by using single quotes - let str2 ='ady';
console.log(str[5]); */

//TEMPLATE LITERALS -: IT IS VERY VERY IMP 
/*let specialString = `this is a template literal`;
console.log(specialString);


const name = "John";
const message = `Hello, ${name}! How are you today?`;
console.log(message); // Output: "Hello, John! How are you today?"*/

/*let n;
for(let n = 1; n<=15; n++) {
    if(n%2!==0) {
        console.log(n);
    }  

}

console.log("backward");
for(let n = 15; n>=1; n= n-2) {
    console.log(n);
}*/
/*for(let n=2; n<=5; n=n+2) {
    console.log(n);
}*/

/*let n =prompt("enter number");
n = parseInt(n);
for(let i =n; i<=n*10; i=i+n) {
    console.log(i);
} */
//FOR-LOOP
/*for(let i=1; i<=2; i++) {
    console.log(`outer loop ${i}`);
    for(let j=20; j>=10; j=j-9) {
        console.log(j);
    }
}*/

//WHILE LOOP
/*let i = 1; 
while(i <= 50) {
    console.log(i);
    i++;
}*/
//MULTIPLICATION TABLE BY USING WHILE LOOP-:
/*let n = prompt("enter the number");
n = parseInt(n);
let i = 0;
while(i<=n*10) {
    console.log(i);
    i=i+n;
}*/

/*let i =1;
while(i<=50) {
    console.log(i);
    i=i+2;
}*/

//FUN ACTIVITY -
/*let movie = "manifest";
let guess = prompt("enter my adyasha fav movie");
while(guess!=movie && guess!="quit") {
   console.log("wrong");
   guess = prompt("enter again");
}
if(guess == movie) {
    console.log("congratss ! you got it right");
}*/
let n=prompt("enter the number you want its table");
n = parseInt(n);
for(let i=n;i<=n*10;i=i+n) {
    console.log(`n*i=${n}`);
}























