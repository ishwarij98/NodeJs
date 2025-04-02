/* FS File System

by default in nodejs
There is a default package which is installed in nodejs
no need to do npm i fs

*/

import fs from "fs";
// it accepts 3 params
//1st --> File name
//2nd --> human readable format
//3rd --> arrow function for data and error

//Reading
// fs.readFile("./ishwari.txt","utf-8",(err,data)=> {
//     if(err) {
//         console.log(err)
//     }
//     else {
//         console.log(data)
//     }
// })

//Creating a folder
// fs.mkdir("NewFolder.js",(err) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log("Folder created Successfully!")
//     }
// })

//Deleting a folder
// fs.rmdir("NewFolder.js",(err) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log("Folder deleted Successfully!")
//     }
// })

//Creating and adding content to the File

// let fileData = "Hello i am Here!"
// let fileName = "Demo.txt";

// fs.writeFile(fileName, fileData,(err) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log("File created and Data added")
//     }
// })


//Renaming File

// let fileName = "Ishwari.txt";

// fs.rename("Demo.txt", fileName, (err) =>{
//     if(err) {
//         console.log(err)
//     }
//     else{
//         console.log("File renamed Successfully! ")
//     }
// })

//Update Content from a File

// let updateCOntent = " Helloooo Hie ";
// let fileName = "Demo.txt";

// fs.appendFile(fileName, updateCOntent, (err) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log("File updated Successfully! ")
//     }
// })




