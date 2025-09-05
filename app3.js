let age="17 Years";
alert(`I am ${age}`);

let visit= localStorage.getItem("visit");
if (visit===null){
    visit=1;}
    else{
    visit= Number(visit) +1;
}
localStorage.setItem("visit",visit);
document.getElementById("output").innerHTML=`You have visited this site ${visit} times`;

// Q no 3
let birthyear="2007";
console.log(birthyear);
document.getElementById("free").innerHTML=`My birthyear is ${birthyear}`;
document.getElementById("print").innerHTML="Data type of declared variable is number";


 function placeOrder() {
      // Get values from input fields
      let visitorName = document.getElementById("visitorName").value;
      let productTitle = document.getElementById("productTitle").value;
      let quantity = document.getElementById("quantity").value;

      // Show message
      document.getElementById("orderMessage").innerHTML =
        `${visitorName} ordered ${quantity} ${productTitle} on XYZ Clothing store.`;
    }


