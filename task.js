// import fs from "fs";
// Create a function which creates a folder as a paramter

// function mkdir(folderName) {
//    fs.mkdir(folderName,(err) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log("Folder Created!")
//     }
// })
// }

// mkdir("Demo_Folder");


//remove folder
// function rmdir(folderName) {
//     fs.rmdir(folderName,(err)=> {
//         if(err) {
//             console.log(err);
//         }
//         else {
//             console.log("Folder Deleted!")
//         }
//     })
// }

// rmdir("Demo_Folder");


//Update File
// let content = "HI this is a Dem File!";
// function appendFile(fileName,content) {
//     fs.appendFile(fileName, content,(err)=> {
//        if(err){
//         console.log(err);
//        }
//        else {
//         console.log("File Updated!")
//        }
//     })

// }
// appendFile("demo.txt",content);

//Update Name
// function rename(previous, newFile) {
//     fs.rename(previous, newFile, (err) => {
//         if(err) {
//             console.log(err)
//         }
//         else {
//             console.log("File name Updated!")
//         }
//     })
// }
// rename("ishwari.txt", "NewFile.txt");


//Read file
// function readFile(fileName, ) {
//     fs.readFile(fileName,"utf-8",(err,data) => {
//         if(err){
//             console.log(err)
//         }
//         else{
//             console.log(data);
//         }
//     })
// }
// readFile("NewFile.txt");



/*
Task 1. Create a async function which does this:
Create a folder
Create a file inside that folder
Write content to the file
Read the content from the file
Delete the file
Delete the folder
*/

//TASK -----------------> 
import fs from "fs/promises";

async function manageFile() {
    const folderName = "demoFolder";
    const fileName = "demo.txt";

    try {
        // Create a folder
        await fs.mkdir(folderName);

        // Create a file inside that folder and write content
        await fs.writeFile(fileName, "Hello there!");

        // Read the content from the file
        let fileData = await fs.readFile(fileName, "utf-8");
        console.log(fileData);

        // Delete the file
        await fs.unlink(fileName);

        // Delete the folder
        await fs.rmdir(folderName);

    } catch (err) {
        console.error(err);
    }
}

manageFile();
