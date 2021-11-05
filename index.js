const prompt = require('prompt-sync')();

console.log(`Simple Password System [Version 1.0.0]\nCopyright (C) 2021 WilliamNS. All rights reserved.\n`)
const username = prompt("[~] Username : ");
const password = prompt("[~] Password : ");

if (username == "WilliamNS" && password == "Noobs") {
    console.log(`[S] Welcome Back ${username}\n`);
    console.clear()
}
else {
    console.log(`[X] Wrong credential, try again later`);
    process.exit()
}

console.log(`[~] Yay you have access to enter this tools, congratzz!`)
