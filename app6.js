let char=prompt("Enter the Character:");
let ascii= char.charCodeAt(0);
if (ascii>=48 && ascii<=57){
    console.log(`The input is a number`)
}
else if(ascii>=65 && ascii<=90){
    console.log(`The input is an uppercase letter`)
}
else if(ascii>=97 && ascii<=122){
    console.log(`The input is a lower case letter`)
}
else{
    console.log(`The input is not a number or letter`)
}

// Taking number input
let num1=+prompt("Enter a number");
let num2=+prompt("Enter a second number");
if (num1 >num2){
    console.log(`${num1} is larger`);
}
else if(num1 <num2){
    console.log(`${num2} is larger`);
}
else{
    console.log(`Both numbers are equal`);
}

// Checking Numbers
let num = +prompt("Enter a Number");
if(num>0){
    console.log(`The number is positive `);
}
 else if(num<0){
    console.log(`The Number is negative`);
}
else{
    console.log(`The Number is zero`);
}

// Checking Whether the character is Vowel or not
let char2= prompt("Enter a Single Character").toLowerCase();
if (char2.length===1){
   if(char2==="a"|| char==="e"|| char==="i"|| char==="o"|| char==="u"){
    console.log(`true the ${char2} is  a vowel`)
   } else{
    console.log(`False the ${char2} is not a  vowel`)
   }
 } else{
    console.log(`Please enter a single character`)
 }

 // Checking password
 let correct_password = "01112007";
 let user_password= prompt("Enter a Password");
 if (!user_password){
    alert("Please Enter a Password")
 } else if(user_password===correct_password){
    console.log("Good! You entered Correct password");
 }
 else{
    console.log(`please Enter Correct password`);
 }

 // Error Fixing
 var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}

console.log(greeting);

// Time format
let time = +prompt("Enter time in 24-hour clock format (e.g., 1900):");
if (time >=0 && time<1200){
    console.log(`Good Morning`);
}  else if(time >=1200 && time <1700){
    console.log(`Good Afternoon`)
}  else if(time >=1700 && time<2100){
    console.log(`Good Evening`)
}
else if(time>=2100 && time<2359){
    console.log(`Good Night`)
}   else {
    console.log(`Invalid time fomat`)
}
 