
// !Now How to Import the Module 
/**
 * * Using two keywords that is 
 * *                        1)using require :
 * *                        2)using import :
 */


const fs = require("fs");

// ! there are some internally fs module supports some set of the promises that are below 

// let allPromises = fs.promises;

// console.log(allPromises);


// ^ Below Are the Inbuild Promises that fs module supports 
/**
 * access: [AsyncFunction: access],
  copyFile: [AsyncFunction: copyFile],
  cp: [AsyncFunction: cp],
  open: [AsyncFunction: open],
  opendir: [Function: opendir],
  rename: [AsyncFunction: rename],
  truncate: [AsyncFunction: truncate],
  rm: [AsyncFunction: rm],
  rmdir: [AsyncFunction: rmdir],
  mkdir: [AsyncFunction: mkdir],
  readdir: [AsyncFunction: readdir],
  readlink: [AsyncFunction: readlink],
  symlink: [AsyncFunction: symlink],
  lstat: [AsyncFunction: lstat],
  stat: [AsyncFunction: stat],
  statfs: [AsyncFunction: statfs],
  link: [AsyncFunction: link],
  unlink: [AsyncFunction: unlink],
  chmod: [AsyncFunction: chmod],
  lchmod: [AsyncFunction: lchmod],
  lchown: [AsyncFunction: lchown],
  chown: [AsyncFunction: chown],
  utimes: [AsyncFunction: utimes],
  lutimes: [AsyncFunction: lutimes],
  realpath: [AsyncFunction: realpath],
  mkdtemp: [AsyncFunction: mkdtemp],
  writeFile: [AsyncFunction: writeFile],
  appendFile: [AsyncFunction: appendFile],
  readFile: [AsyncFunction: readF ile],
  watch: [AsyncGeneratorFunction: watch],
 */

//   ! lets read the files using the inbuild promise that is readFile()
/**
 * * readFile(path , character set utf) : it will takle the two arguments 
 */

let readFile1Promise = fs.promises.readFile('C:/Users/Admin/Desktop/FullStack LLD 2 and LLD 3/JavaScript-6 Async-2 - working with promises/file1.txt', 'utf-8');


// !parallel Async Proccessing

// now lets execute the above promise 

// readFile1Promise.then((result) => {
//                     console.log("content of the file1" , result);
//                 }).catch((error) => {
//                     console.log(error);
//                 });

// !Same do it for the file 2 also 

let readFile2Promise = fs.promises.readFile('C:/Users/Admin/Desktop/FullStack LLD 2 and LLD 3/JavaScript-6 Async-2 - working with promises/file2.txt' , 'utf-8');
 

// now lets execute the above promise 

// readFile2Promise
//                 .then((result) => {                                //* here insid ethe then for the arrow function 
                                                                        // *we can take the it terms of the call becak function also 
//                     console.log("content of the file2" , result);
//                 }).catch((error) => {
//                     console.log(error);
//                 });



// *Above is the parallel way of the executing the Async taks 
// * Now the Question given By the sir is that we have to perform the above tasks in the serialized way one after the another using the promise chaining 



//! Converted the above parallel Async to serial Async Processing :

readFile1Promise.then((result) => {
    console.log("content of the file1" , result);

    // &then return the new promise by creating it 
    let readFile2Promise = fs.promises.readFile( "C:/Users/Admin/Desktop/FullStack LLD 2 and LLD 3/JavaScript-6 Async-2 - working with promises/file2.txt" , "utf-8");

    return readFile2Promise;  // * returned the new promise 

}).then((result) => {
    console.log("content of the file2" , result);
}).catch((error) => {
    console.log(error);
});

// ! Some important Points to remaimber about the Promises 

/**
 * *Notes : 
 * * 1) call-back with the heavy task will go into the task-Queue
 * * 2) promises and its call-back will go into the Micro-Task-Queue
 * ! 3) promises will have the more priority than the call-backs 
 * ! 4) hence event loop will first pick the promises from the Micro-TaskQueue and execute it in the call-stack 
 * ! 5) Micro-Task-Queue will maintain the insertion order that is first In first out 
 */

// learned about the promise , promise chaining with then() and catch() also learned the parallel and serial Async programing using the promises and also learned about the Micro-task Queue how event loop given priority to the micro-task Queue 