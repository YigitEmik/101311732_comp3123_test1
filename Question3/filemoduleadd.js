const fs = require('fs')
const path = require('path')

if (!fs.existsSync("Logs")) {
    fs.mkdir("Logs", function(err){
        if (err) {
            throw err
        }
        console.log("Successfully created!")
    });
}

process.chdir("Logs");

for (let i = 0; i < 10; i++) {
    let logfile = `Log${i}.txt`
    let text = "Yigit Emik - Lab Test1 - Question 3 - File"
    fs.writeFile(logfile, text + i , "utf-8", function (err) {
        if (err) throw err;
    });
    console.log(logfile);
}