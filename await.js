import fs from "fs/promises";

async function readTheFile(fileName) {
    try {
        await fs.writeFile(fileName,"Hello there!") ;

        let fileData = await fs.readFile(fileName,"utf-8");
        await fs.unlink(fileName); // unlink --> for file
        // use rmdir for folder
        console.log(fileData);
    }
    catch(err) {
        console.log(err)
    }
}
readTheFile("demo.txt");