let num1 = 3;
let num2 = 5;
let sum = num1 + num2;
let subtract = num1 - num2;
let multiply = num1 * num2;
let  division = num1 / num2;
let modulus =num1 % num2;
console.log(`sum of ${num1} and ${num2} is ${sum}`);
console.log(`subtraction of ${num1} and ${num2} is ${subtract}`);
console.log(`Multiplication of ${num1} and ${num2} is ${multiply}`);
console.log(`Division of ${num1} and ${num2} is ${division}`);
console.log(`Modulus of ${num1} and ${num2} is ${modulus}`);

//just declare a variable
let variable;
console.log(variable);

let num=5;
console.log(num);
console.log(++num);
result = num + 7;
console.log(result);
console.log(--result);
console.log(num/3);
console.log(num%3);

//ticket prize
let cost = 600;
let output = 5*cost;
console.log(`total cost to buy ${cost} ticket to a movie is ${output}PKR`);

//Table of 4
let val=4;
 console.log(`Table of ${val}`);
for(i=1;i<=10;i++){
    console.log(`${val} x ${i} =${val * i}`);
}

//Temperature converter
let celsius=30;
let farenhiet=( celsius*9/5 )+32;
console.log(`${celsius}°C is ${farenhiet}°F`);
let farenhiet1=70;
let celsius2=(farenhiet1-32)*5/9;
console.log(`${farenhiet1}°F is ${celsius2}°C `);
//Shoping cart recipt
let item1=650;
let item2=100;
let order1=3;
let order2=7;
let charges=100;
let total=(item1*order1)+(item2*order2)+charges;
console.log(`price of item 1 is ${item1}`);
console.log(`Quantity of item 1 is ${order1}`);
console.log(`price of item 2 is ${item2}`);
console.log(`Quantity of item 2 is ${order2}`);
console.log(`Shipping charges is ${charges}`);
console.log(`Total cost of your order is ${total}`);
//Marksheet
let totalmarks=980;
let marks_otained=804;
let percentage=(marks_otained/totalmarks)*100;
console.log(`Total marks:${totalmarks}`);
console.log(`Obtained Marks:${marks_otained}`);
console.log(`Percentage:${percentage}`);

//Currrency in PKR 
let US=10;
let saudi=25;
let PKR1= US*104.80;
let PKR2=saudi*28;
let PKR=PKR1+PKR2;
console.log(`Total Curency in PKR ${PKR}`);

// AIRTHMETIC OPERATION
let val1=5;
let result2= ((val1+5)+(val1*10))/2;
console.log(result2);

// AGE Calculator
let currentyear=2025;
let Birthyear=2007;
let age1= currentyear-Birthyear;
let age2= age1-1;
console.log(`I am either ${age1} year old or either ${age2} year old`);

// The Geomitizer
let radius=2;
let pi=3.142;
let circumference= 2*pi*radius;
let area=pi*(radius *radius);
console.log(`the Radius is ${radius}`);
console.log(`The Circumference of circle  is ${circumference} `);
console.log(`The Area of circle is ${area}`);

// Life Time supply Calculator
let fav_snack="zingerburger";
let currentage=17;
let maxage=70;
let perday=5;
let total_snack=(maxage-currentage)*365*perday;
console.log(`You will need ${total_snack } ${fav_snack} to last until  the ripe old age of ${maxage}`) ;