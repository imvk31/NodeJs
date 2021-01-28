
import { createInterface } from "readline";

const rl = createInterface({
            input: process.stdin,
            output: process.stdout
});

rl.question("How do you like Node JS", answer =>{
            console.log(`Your answer is ${answer}`);
});

