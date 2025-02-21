function sayHello(){
    for (let i = 0; i < 5; i++){
        console.log(i)
    }

    console.log(i);
}

//objects

const evenorodd= () => {
    let input = prompt("Enter a number");
    let num2 = Number(input);
    if (num2%2 == 0){
        console.log("your number is even");
    }
    else{
        console.log("your number is odd");
    }
}//dont need a paramter beacsue we ask for input in the function

//guesisng game 

function guessinggame(){
    num = Math.floor(Math.random()*100);

    let guess = null;
    
while(guess !== num){
    let input = prompt("guess a number");

    guess = Number(input)
    if (guess > num){
        console.log("too high, guess again")

    }
    else if(guess < num){
        console.log("guess too low, guess again ")
    }
    else{
        console.log("you've got it!")
        break;
    }
}
}

function arraystuff(arr, num1){
    arr.shift();
    arr.push(num1);
    let arrtotal = 0;
    for(i = 0; i<arr.length;i++){
        arrtotal += arr[i];
    }
    let avg = arrtotal/arr.length;

    console.log("array: "+ arr + "avg: " + avg);


}
