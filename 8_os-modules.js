//here we looking for buit in modules

const os = require('os');


//info about current user

const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
console.log(`the System uotime is ${os.uptime} seconds`);

const currentOS = {
    name : os.release(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()

}
console.log(currentOS);