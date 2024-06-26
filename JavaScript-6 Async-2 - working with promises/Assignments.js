function fetchByCb(fileName, cb) {
    setTimeout(function () {
        cb(`content : ${fileName}`);
    }, 100 * Math.random());
}



ansArray = [];

// function twoSeries(file1, file2, ansArray) {
//     //write your code here =========================================
//             //I have to push the data of the file 1 and file 2 in the serialized manner 

//             fetchByCb(file1 , function(contentOfFile1) {

//                 //the I have to push this above content into the Array 
//                 ansArray.push(contentOfFile1);

//                 //now here after adding the content of the file 1 then only I have to add the content of the file 2 
//                 //hence now again call the fetchByCb

//                 fetchByCb(file2 , function(contentOfFile2) {

//                     ansArray.push(contentOfFile2);

//                     //now after adding the data of the both the files I have to add the one more value to the Ans array that is 
//                     //All files have been read

//                     ansArray.push("All files have been read");
                
//                 });
//             });
// }

// twoSeries("Hi am Manoj", 'sdfgdrfgdgdfgdf', ansArray) ;




// !Question No 2 
//  JS Lecture 8: Two Files in Series by Promise

