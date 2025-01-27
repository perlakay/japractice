let job = "SWE"
//switch case statements only really apply when you use eqiality comparisons 

switch (job){
    case 'SWE':
        console.log("coder");
        break;
    case "Designer":
        console.log("draws");
        break;
}

let numbers = [1,2,3,4,5,6,7];
let idx = 0;
let lenthOfArray = numbers.length;


console.log(numbers[idx++]); //increment aftre displaying the number 

//for loops

for(let idx = 0; idx < numbers.length; idx++){
    console.log(numbers[idx]);
}

for (let num = 0; num < 100; num++){
    console.log(num) //prints numbers 0-100
}





