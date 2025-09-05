 let x=1,y=2,z=3;
 console.log(x ,y ,z);

// Declre 5 legal variable
let user_name; //underscore in between is allow
let  name1; // numder after letter is allow
let  $price; //dollar sign is allow
let  FirstName;  //camel case is allow
let  _mean;  //underscore at start is allow

// //Declare 5 illegal variable:
// let 1name;//number at start is not allowed
// let user-name;//hyphen is not allowed
// let  @gmail; //@ or special character is not allow
// let  first name;//space is not allow
// let  var;  //keywords are not allow

document.getElementById("heading").innerHTML="Rules for naming JS variables";
 
document.getElementById("para").innerHTML=`Variable names can only contain  <b>letters, numbers,
dollar($) and underscore(_).</b><br />
For example $my_1stVariable<br />
Variables must begin with a <b>letter, dollar or
underrscore(_).</b> For example $name, _name or name<br />
Variable names are case <b>sensitive </b> <br />
Variable names should not be JS  <b>keyword</b><br />`;
 
