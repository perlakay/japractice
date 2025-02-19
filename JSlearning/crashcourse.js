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
