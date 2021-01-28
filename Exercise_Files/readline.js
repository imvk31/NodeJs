const readline = require("readline");
const rl = readline({
            input: process.stdin,
            output: process.stdout
});

rl.question("How do you like Node JS", answer =>{
            console.log(`Your answer is ${answer}`);
});