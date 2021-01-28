const events = require("events");
const emitter = new events.EventEmitter();

//event Emitter Handler
emitter.on("customEvent", (message, user) => {
    console.log(`${user} : ${message}`);
})

//Events emitted
// emitter.emit("customEvent", "Hello World", "Computer");
// emitter.emit("customEvent", "Thats so Coool", "User");
// emitter.emit("customEvent", "A random Event", "Mike");

//Interacting with emitter via Console
process.stdin.on("data", data => {
        const input = data.toString().trim();
        if(input == "exit")
        {
            emitter.emit("customEvent","Thank you for interacting with console", "process");
        }
        emitter.emit("customEvent", input, "terminal");
});

console.log("\n\nEmitter script has been created!");
