document.getElementById("btnSubmit").addEventListener("click", sumOfAllFear);

//changed "results" to "firstNum" (1/14/21)

function sumOfAllFear () {
    //this is the hard coded array
let thisArray = [10, 15, 3, 7];

//this is the "K" that they put in
//changed arraySize to userInput (1/14/2021)
let numK = parseInt(document.getElementById("userInput").value);

//I just added this (1/14/21)
//let theAnswer = document.getElementById("output").value;

//generate random values from the array
let ranVal1 = thisArray[Math.floor(Math.random() * thisArray.length)];
//I'm trying to make it so the secong value is not the same as the first, but still genetates
//another value from the array.
//let ranVal2 = thisArray[Math.floor (( Math.random() * thisArray.length ) - ranVal1)];
let ranVal2 = thisArray[ranVal1];
let output = document.getElementById("firstNum");
let found = false;
for(let i = 0; i < thisArray.length - 1; i++){
    for(let j = 1; j < thisArray.length; j++){
        if((thisArray[i] + thisArray[j]) == numK){
                output.innerText = `Your number was found! ${thisArray[i]} + ${thisArray[j]} = ${numK}`;
                found = true;   
                break;
        }
    }
}
if(!found){
    output.innerText = `Your number was not found!`;
}

//create the for conditional for the "sumOfAllFear" function
//Trying to figure out wtf I should do here to consolidate...what's below isn't right.
//sumOfAllFear.numK = (ranVal1 + ranVal2) == numK? `true`:`false`;


//output2.innerHTML = found;
    //{let}

    //I just added this (1/14/21)
   document.getElementById("firstNum").innerHTML =  ranVal1;
   document.getElementById("secondNum").innerHTML =  ranVal2
};




