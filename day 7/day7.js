let inputDiv = document.getElementById("input");

let input = inputDiv.textContent;

/********************************* PART ONE *********************************/

class directory {
  constructor(name, previousDirectory){
    this.name = name;
    this.size = 0;
    this.subdirectories = [];
    this.fileList = [];
    this.previousDir = previousDirectory;
  }
}

class file {
  constructor(size, name){
    this.name = name;
    this.size = size;
  }
}

input = input.split(`\n`);

input = input.map( item => item.trim());

for(let i = 0 ; i < input.length ; i++) {
  input[i] = input[i].split(' ');
}

let dirArray = [];
let currentDir = new directory("/");
currentDir.previousDir = new directory('root');
dirArray.push(currentDir);
let currentSize = 0;
let sum = 0;

for (let i = 0 ; i < input.length ; i++) {
  if (input[i][0] == '$'){
    if (input[i][1] == 'cd') {
      if (input[i][2] != '..'){
        currentDir = findDir(input[i][2],currentDir);
      } else if (input[i][2] == '..') {
        currentDir = currentDir.previousDir;
      }
    }
  } else if (!isNaN(input[i][0])){
    if (!currentDir.fileList.includes(input[i][1])){
      let currentFile = new file(input[i][0],input[i][1]);
      currentDir.size += parseInt(currentFile.size);
      updateDirSize(currentDir,parseInt(currentFile.size));
      currentDir.fileList.push(currentFile);
    }
  } else if (input[i][0] == 'dir' && isNewSubDir(currentDir, input[i][1])) {
    let newDir = new directory(input[i][1],currentDir);
    currentDir.subdirectories.push(newDir);
    dirArray.push(newDir);
  }
}

let totalArray = [];

for (let i = 0 ; i < dirArray.length ; i++ ) {
  
  if (dirArray[i].size < 100000) {
    totalArray.push(dirArray[i].size);
  }
}

function isNewSubDir(directory, newdir) {
  if (directory.subdirectories.length == 0 ) return true;
  for (let i = 0 ; i < directory.subdirectories.length ; i++){
    if (directory.subdirectories[i].name == newdir) {
      return false;
    }
  }
  return true;
}

function updateDirSize(directory, size){
  let currentDir = directory;
  while(currentDir.previousDir){
    currentDir = currentDir.previousDir;
    currentDir.size += size;
  }
}

function findDir(name,directory){
  for (let i = 0 ; i < directory.subdirectories.length ; i++){
    if (directory.subdirectories[i].name == name) {
      return directory.subdirectories[i];
    }
  }
  return directory;
}

console.log('Total size: ' + totalArray.reduce((a,b)=> a+b,0))

/********************************* PART TWO *********************************/

let totalDiskSpace = 70000000;
let freeSpace = totalDiskSpace - dirArray[0].size;
let neededSpace = 30000000;

let smallestDir = new directory('smallest');
smallestDir.size = 70000000;

for( let i = 0 ; i < dirArray.length ; i ++){
  if (dirArray[i].size + freeSpace > neededSpace && dirArray[i].size < smallestDir.size){
    smallestDir = dirArray[i];
  }
}

console.log('Smallest Directory size: ' + smallestDir.size);