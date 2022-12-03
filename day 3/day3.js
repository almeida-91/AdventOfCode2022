let inputDiv = document.getElementById('input');

//input = inputDiv.textContent;

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
    let secondHalf = rucksackArray.slice(rucksackArray.length/2)
    let commonItemArray = [];
    secondHalf.forEach((item)=>{
        if (firstHalf.includes(item) && commonItemArray.includes(item)==false){
            commonItemArray.push(item);
        }
    })
    console.log(commonItemArray);
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

