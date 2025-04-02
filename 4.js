import fs from "fs";

fs.writeFile("one.txt", "Hello!",(err) =>{ //3 seconds
    if(err) {
        console.log(err);
    }
    else {
        console.log("file is created");
    }
})

fs.readFile("one.txt","utf-8",(err,data)=> { //2 seconds
    if(err) {
        console.log(err)
    }
    else {
        console.log(data)
    }
})

fs.rmdir("one.txt",(err)=> { //1 seconds
    if(err) {
        console.log(err)
    }
    else {
        console.log("file deleted")
    }
})

//While using FS module, with arrow function, 
// then it may not give results in proper order