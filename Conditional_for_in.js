// for in loop we dont declare ani intialisation, condition or increment/decrement
// array
var emp=["Sonoo","Vimal","Ratan",1, true]; 
// const can be changed to let/var depending onthe case we are using 
for (const emp1 in emp) {
    console.log("the data available : "  + emp[emp1]) //
    // console.log("the data available : "  + typeof emp[emp1])
}
// console.log("----------------")
// for (var i =0 ; i<emp.length ;i++){
//     console.log("the data available : "  + emp[i])
// }
