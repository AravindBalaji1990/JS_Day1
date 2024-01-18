// initialise the array
let emp1=["Sonoo","Vimal","Ratan",123, true]; 
console.log('the total items inside the array : '+ emp1.length) 
console.log('the get a specific element inside the array : '+ emp1[2]) 
console.log('the get a specific element inside the array : '+ emp1[10]) 
for (var i=0;i<emp1.length;i++){  
console.log(emp1[i]);  
}  

// using new keyword
var emp2 = new Array();  
emp2[0] = "Arun";  
emp2[1] = "Varun";  
emp2[2] = "John"; 
emp2[3] = "sanjay"
emp2[4] = "kumar"
  
for (i=0;i<emp2.length;i++){  
console.log(emp2[i]);  
}  

//using constructor - Array  
// Array.prototype
var emp3=new Array("Jai","Vijay","Smith","sam");  
console.log('the total items inside the array : '+ emp3.length) 

for (i=0;i<emp3.length;i++){  
console.log(emp3[i]);  
}  