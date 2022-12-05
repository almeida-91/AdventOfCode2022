let inputDiv = document.getElementById('input');

let input = inputDiv.textContent;

/********************************* PART ONE *********************************/

input = input.split('\n');

input = input.map( function (item){
   return item.trim();
});

let stackArray = [[],[],[],[],[],[],[],[],[]];

for (let i = 1 ; i < 9 ; i++) {
    let currentLine = input[i].split('');
    let currentIndex = 0;
    for (let j = 0; j < currentLine.length ; j++) {
        if (currentLine[j] && currentLine[j] != " ") {
            stackArray[currentIndex].push(currentLine.slice(j,j+4));
        }
        j = j+3;
        currentIndex++;
    }
}

stackArray.forEach(stack =>{
    for (let i = 0 ; i < stack.length ; i++) {
        stack[i] = stack[i].join('');
    }
});


for (let i = 11 ; i < input.length-1 ; i++ ){
    let currentLine = input[i];
    let numbers = currentLine.match(/\d+/g);
    let amount = numbers[0];
    let from = numbers[1];
    let to = numbers[2];
    moveCrate(amount, from, to);
}

function moveCrate(amount, from, to){
    for (let i = 0 ; i < amount ; i++){
        let crate = stackArray[from-1].shift();
        stackArray[to-1].unshift(crate);
    }
}


getTopRow(stackArray);


function getTopRow(array) {
    let topRow = [];
    stackArray.forEach(stack =>{
        topRow.push(stack.shift());
    })
    console.log(topRow);
}

/********************************* PART TWO *********************************/

input = inputDiv.textContent;

input = input.split('\n');

input = input.map( function (item){
   return item.trim();
});

stackArray = [[],[],[],[],[],[],[],[],[]];

for (let i = 1 ; i < 9 ; i++) {
    let currentLine = input[i].split('');
    let currentIndex = 0;
    for (let j = 0; j < currentLine.length ; j++) {
        if (currentLine[j] && currentLine[j] != " ") {
            stackArray[currentIndex].push(currentLine.slice(j,j+4));
        }
        j = j+3;
        currentIndex++;
    }
}

stackArray.forEach(stack =>{
    for (let i = 0 ; i < stack.length ; i++) {
        stack[i] = stack[i].join('');
    }
});


for (let i = 11 ; i < input.length-1 ; i++ ){
    let currentLine = input[i];
    let numbers = currentLine.match(/\d+/g);
    let amount = numbers[0];
    let from = numbers[1];
    let to = numbers[2];
    moveCrate9001(amount, from, to);
}

function moveCrate9001(amount, from, to){
    for (let i = 0 ; i < amount ; i++){
        let crate = stackArray[from-1].splice(amount-1-i,1);
        stackArray[to-1].unshift(crate.pop());
    }
}

getTopRow(stackArray);
