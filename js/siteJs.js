//indexes

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

document.getElementById("btnSubmit").addEventListener("click", doJsWork);

    function doJsWork() {
        
        let size = numbers.length;
        let arraySize = parseInt(document.getElementById("arraySize").value);
        numbers = generateArray(arraySize);
        //let element = 0;
        output1 = document.getElementById("results");
        output2 = document.getElementById("results2");
        output3 = document.getElementById("results3");

        output1.innerHTML = ""
        output2.innerHTML = ""
        output3.innerHTML = ""

        //size = numbers.push(11);
        //size = numbers.push(20);

        //numbers.pop();
       // var filtered = numbers.filter(function(value, index, arr){
         //   return value > 5;
        //})

        //var found = numbers.find(function(value, index, arr){
          //  return value === 5;
        //})
        
        var found = numbers.includes(7);

        for (let index = 0; index < numbers.length; index++){
            output1.innerHTML += `${numbers[index]} `;
        }


        //output3
        output2.innerHTML = found;

       // for (let index = 0; index < filtered.length; index++){
       //     output2.innerHTML += `${filtered[index]} `;
}


function generateArray (size){
        let randomArray = [];
        for (let index = 0; index < numbers.length; index++){
            randomArray.push(Math.floor(Math.random() * 100) + 1);
        }
        
        //push random numbers to an array
        return randomArray;

}