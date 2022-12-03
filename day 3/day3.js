let inputDiv = document.getElementById('input');

input = inputDiv.textContent;

/********************************* PART ONE *********************************/


let bagArray = input.split('\n');
let totalPriority = 0;

bagArray = bagArray.map( function (item){
    return item.trim();
})

bagArray.forEach((rucksack)=>{
    let rucksackArray = Array.from(rucksack);
    let firstHalf = rucksackArray.slice(0,rucksackArray.length/2);
    let secondHalf = rucksackArray.slice(rucksackArray.length/2);
    let commonItemArray = [];
    secondHalf.forEach((item)=>{
        if (firstHalf.includes(item) && commonItemArray.includes(item)==false){
            commonItemArray.push(item);
        }
    })
    commonItemArray.forEach((item)=>{
        if (item.charCodeAt(0) > 96 ) {
            totalPriority += item.charCodeAt(0)%96;
        } else {
            totalPriority += item.charCodeAt(0)%64+26;
        }
    })
})

console.log(totalPriority);

/********************************* PART TWO *********************************/

bagArray = input.split('\n');
totalPriority = 0;
let currentIndex = 0;



bagArray = bagArray.map( function (item){
    return item.trim();
})

let previousRuckSack = [];
let beforePrevious = [];

bagArray.forEach((rucksack)=>{
    let rucksackArray = Array.from(rucksack);
    let commonItemArray = [];
    
    rucksackArray.forEach((item)=>{
        if (previousRuckSack.includes(item) && beforePrevious.includes(item) && commonItemArray.includes(item)==false){
            commonItemArray.push(item);
        }
    })
    commonItemArray.forEach((item)=>{
        if (item.charCodeAt(0) > 96 ) {
            totalPriority += item.charCodeAt(0)%96;
        } else {
            totalPriority += item.charCodeAt(0)%64+26;
        }
    })
    console.log(commonItemArray);
    beforePrevious = previousRuckSack;
    previousRuckSack = rucksackArray;
    if (currentIndex == 3){
        commonItemArray = [];
        previousRuckSack = [];
        beforePrevious = [];
        currentIndex = 0;
    }
    currentIndex++;
})

console.log(totalPriority);