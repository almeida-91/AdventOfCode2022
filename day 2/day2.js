let inputDiv = document.getElementById('input');

let input = inputDiv.textContent;

let roundArray = input.split('\n');
let score = 0;


/********************************* PART ONE *********************************/
/*  
    A = X = Rock 
    B = Y = Paper
    C = Z = Scissors
*/

roundArray.forEach((round) => {
    let handArray = round.split(" ");
    handArray = handArray.filter(n => n);
    let enemyHand = handArray[0];
    let myHand = handArray[1];
    if (handArray.length == 0) return;
    if (myHand == 'X'){
        score += 1;
        if (enemyHand == 'A') {
            score += 3;
        } else if (enemyHand == 'C') {
            score += 6;
        }
    } else if (myHand == 'Y') {
        score += 2;
        if (enemyHand == 'B') {
            score += 3;
        } else if (enemyHand == 'A') {
            score += 6;
        }
    } else {
        score += 3;
        if (enemyHand == 'C') {
            score += 3;
        } else if (enemyHand == 'B') {
            score += 6;
        }
    }
})


console.log("Part One Score: "+score);

/********************************* PART TWO *********************************/

score = 0;

/*  
    A = Rock 
    B = Paper
    C = Scissors

    X = Lose
    Y = Draw
    Z = Win
*/

roundArray.forEach((round) => {
    let handArray = round.split(" ");
    handArray = handArray.filter(n => n);
    let enemyHand = handArray[0];
    let myHand = handArray[1];
    if (handArray.length == 0) return;
    if (myHand == 'X'){
        if (enemyHand == 'A') {
            score += 3;
        } else if (enemyHand == 'B') {
            score += 1;
        } else {
            score += 2;
        }
    } else if (myHand == 'Y') {
        score += 3;
        if (enemyHand == 'A') {
            score += 1;
        } else if (enemyHand == 'B') {
            score += 2;
        } else {
            score += 3;
        }
    } else {
        score += 6;
        if (enemyHand == 'A') {
            score += 2;
        } else if (enemyHand == 'B') {
            score += 3;
        } else {
            score += 1;
        }
    }
})


console.log("Part Two Score: "+score);