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

let id = 0;
while(id < numbers.length){
    console.log(numbers[id]);

    id++;
}

let sum = 0;

while(true){
    console.log('loop');
    sum++;

    if(sum === 10)
        break; //break case so its not an infinite loop
}

//you can use a for loop when you have a spcific lnegth or iterations
//while loops are good for while a ocndition is true

//ternary operators

let age = 16;
const canDrive = age >= 16 ? true : false 


function maxNum(num1,num2){
    return num1 >= num2 ? num1 : num2;
}
//returns max number 

function FizzBuzz(num){
    if (num % 3 === 0 && num % 5 === 0)
        return "FizzBuzz";
    else if (num % 3 === 0)
        return "Fizz";
    else if (num % 5 === 0)
        return "Buzz";
    else 
        return num; 

}

console.log(FizzBuzz());

function EvenNum(array){
    for(const number of array){
        if(number % 2 === 0)
            console.log(number);
    }
}

function OddNum(array){
    for(const number of array){
        if(number % 2 != 0)
            console.log(number);
    }
}








