let inputDiv = document.getElementById('input');

input = inputDiv.textContent;

/********************************* PART ONE *********************************/

elfArray = input.split('\n');

elfArray = elfArray.map( function (item){
        return item.trim();
});

let fullyContained = 0;

elfArray.forEach( elfGroup => {
    elves = elfGroup.split(',');
    if (elves.length == 0 || elfGroup == undefined) return;

    let firstElf = elves[0];
    let secondElf = elves[1];

    if (firstElf && secondElf){
        let firstElfTask = firstElf.split('-');
        let firstElfBegin = +firstElfTask[0];
        let firstElfEnd = +firstElfTask[1];

        let secondElfTask = secondElf.split('-');
        let secondElfBegin = +secondElfTask[0];
        let secondElfEnd = +secondElfTask[1];

        if (firstElfBegin <= secondElfBegin && firstElfEnd >= secondElfEnd || secondElfBegin <= firstElfBegin && secondElfEnd >= firstElfEnd){
            fullyContained++;
        }

    }
});

console.log(fullyContained);

/********************************* PART TWO *********************************/

let overlap = 0;

elfArray.forEach( elfGroup => {
    elves = elfGroup.split(',');
    if (elves.length == 0 || elfGroup == undefined) return;

    let firstElf = elves[0];
    let secondElf = elves[1];

    if (firstElf && secondElf){
        let firstElfTask = firstElf.split('-');
        let firstElfBegin = +firstElfTask[0];
        let firstElfEnd = +firstElfTask[1];

        let secondElfTask = secondElf.split('-');
        let secondElfBegin = +secondElfTask[0];
        let secondElfEnd = +secondElfTask[1];

        if (firstElfBegin <= secondElfBegin && firstElfEnd >= secondElfBegin || secondElfBegin  <= firstElfBegin && secondElfEnd >= firstElfBegin){
            overlap++;
        }
    }
});

console.log(overlap);