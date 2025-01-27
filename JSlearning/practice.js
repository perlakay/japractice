//STRINGS:

//find length of a string 

var firstnameLength = 0;
var firstName = "aida";

firstnameLength = firstName.length;

firstName[0]; //gets you the first letter of the name

firstName[firstname.length -1]//gets you the last letter 

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb ){
    var result =''

    result += "the "+ myAdjective + " "+ myNoun +" "+ myVerb +" to the store " +myAdverb 
    return result;

}

console.log(wordBlanks("dog","big", "ran", "quickly"));
//this is a mini madlibs type game 

//ARRAYS:

var ourArray = ["John", 23]; //elemnst can be any data type

//nested arrays

var myArray =[["the universe", 42],["everything", 101010]]; //an array of 2 arrays 

//acess arrays 
ourArray[0];
myArray[0][0]; //acess elements in arrays of arrays 
//indexes can also be used ot modify arrays 






