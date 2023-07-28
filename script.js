// function GLD() {
//   let nombre = document.getElementById("input-1");
//   let = prompt("Entrez un nombre :");
//    let number = parseFloat(nombre);
//   if (!isNaN(nombre)) {
//     let resultat = nombre * 4;
//     return "Le résultat de la multiplication est : " + resultat;
//   } else {
//     return "Veuillez entrer un nombre valide !";
//   }
// }

// function LPD() {
//   let = document.getElementById("input-2");
//   let = prompt("entrer un nombre :");
//   LPD = parseFloat(nombre);
//   if (!isNaN(nombre)) {
//     let result = nombre * 9;
//     return "le resultat de la multiplication est :" + result;
//   } else {
//     return "veuillez entre un nombre valide ! ";
//   }
// }
// function PRD() {
//   let = document.getElementById("input-3");
//   let = prompt("enter un nombre ");
//   PRD = parseFloat(nombre);
//   if (!isNaN(nombre)) {
//     let result = nombre * 4;
//   }
// }


// function test(event){
//   event.preventDefault()
//   let inp1  = document.getElementById('inputs-1')?.value
//   let inp2  = document.getElementById('inputs-2')?.value
//   let inp3  = document.getElementById('inputs-3')?.value

//   console.log(inp2,inp1,inp3)
//   return 


// }


function logValues() {
  // Get the values from the input fields
  var value1 = document.getElementById("input1").value;
  var value2 = document.getElementById("input2").value;
  var value3 = document.getElementById("input3").value;

 //let result = value1*4+" glucides  "+value2*9+"lipides"+value3*4+" protides ="+value1*4+value2*9+value3*4 
 var glucides= value1*4 
 var lipides= value2*9 
 var protides=value3*4 
var  result=glucides+lipides+protides
document.getElementById("res").innerText=result
}   



function differance () {
  var a= document.getElementById("one").value;
  var b=document.getElementById("two").value;
  console.log(a,b);
 
if (a===b ){
  document.getElementById("result").textContent="stabilité de la masse corporelle" 
} 
else if(a-b>0){
  document.getElementById("result").textContent="augmentation de la masse corporelle"
} 
else if (a-b<0){
  document.getElementById("result").textContent="diminution de la masse corporelle"
} 

} 



function trans() {
  var x= document.getElementById("cal").value;

console.log(x)
  var res=x*4.184
  document.getElementById("resultat").innerHTML= "<p>"+res+"</p>"
}