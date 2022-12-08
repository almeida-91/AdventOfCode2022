let inputDiv = document.getElementById("input");

let input = inputDiv.textContent;

/********************************* PART ONE *********************************/

input = input.split('\n');


let forestHeight = input.length;
let forestWidth = input[0].length;
let totalVisible = 0;

for (let i = 0; i < forestHeight ; i++) {
  if (i == 0 || i == forestHeight-1){
    totalVisible += forestHeight;
  } else {
    for (let j = 0 ; j < forestWidth; j++){
      if (j % forestWidth == 0 || j % forestWidth == forestWidth-1) {
        totalVisible++;
      } else {
        if (checkUp(j,i) == false 
        || checkDown(j,i) == false
        || checkLeft(j,i) == false 
        || checkRight(j,i)==false
        ){
        totalVisible++;
        }
      }
    }
  }
}

function checkUp(posX, posY){
  let currentTree = parseInt(input[posY][posX]);
  posY --;
  while (posY >= 0){
    let newTree = parseInt(input[posY][posX]);
    if (newTree >= currentTree){
      return true;
    }
    posY--;
  }
  return false;
}

function checkDown(posX, posY){
  let currentTree = parseInt(input[posY][posX]);
  posY++;
  while (posY < forestHeight){
    let newTree = parseInt(input[posY][posX]);
    if (newTree >= currentTree){
      return true;
    }
    posY++;
  }
  return false;
}

function checkLeft(posX, posY){
  let currentTree = parseInt(input[posY][posX]);
  posX--;
  while (posX >= 0){
    let newTree = parseInt(input[posY][posX]);
    if (newTree >= currentTree){
      return true;
    }
    posX--;
  }
  return false;
}

function checkRight(posX, posY){
  let currentTree = parseInt(input[posY][posX]);
  posX++;
  while (posX <= forestWidth){
    let newTree = parseInt(input[posY][posX]);
    if (newTree >= currentTree){
      return true;
    }
    posX++;
  }
  return false;
}

console.log(totalVisible);

/********************************* PART TWO *********************************/

let maxScore = 0;
let currentScore = 0;
let bestTree = [];

for (let i = 0; i < forestHeight ; i++) {
  for (let j = 0 ; j < forestWidth ; j++){
    let treeScore = 
    scoreUp(j,i)*scoreDown(j,i)*scoreLeft(j,i)*scoreRight(j,i);
    if (treeScore > maxScore) {
      maxScore = treeScore;
      bestTree = [j,i];
    }
  }
}

console.log(maxScore);

function scoreUp(posX, posY){
  if (posY == 0) return 0;
  let currentScore = 0;
  let currentTree = parseInt(input[posY][posX])
  while(posY > 0){
    posY = posY - 1;
    let newTree = parseInt(input[posY][posX]);
    if (newTree >= currentTree){
      currentScore++;
      return currentScore;
    }
    currentScore++;
  }
  return currentScore;
}

function scoreDown(posX, posY){
  let currentScore = 0;
  if (posY == forestHeight-1) return 0;
  let currentTree = parseInt(input[posY][posX])
  while(posY < forestHeight-1){
    posY = posY + 1;    
    let newTree = parseInt(input[posY][posX]);
    if (newTree >= currentTree){
      currentScore = currentScore+1;
      return currentScore;
    }
    currentScore++;
    
  }
  return currentScore;
}

function scoreLeft(posX, posY){
  if (posX == 0) return 0;
  let currentScore = 0;
  let currentTree = parseInt(input[posY][posX])
  while(posX > 0){
    posX = posX - 1;
    let newTree = parseInt(input[posY][posX]);
    if (newTree >= currentTree){
      currentScore++;
      return currentScore;
    }
    currentScore++;
  }
  return currentScore;
}

function scoreRight(posX, posY){
  let currentScore = 0;
  if (posX == forestWidth-1) return 0;
  let currentTree = parseInt(input[posY][posX])
  while(posX < forestWidth-1){
    posX = posX + 1;    
    let newTree = parseInt(input[posY][posX]);
    if (newTree >= currentTree){
      currentScore = currentScore+1;
      return currentScore;
    }
    currentScore++;
  }
  return currentScore;
}
