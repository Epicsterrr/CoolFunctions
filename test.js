const main = require('./main.js');

const utils = main.Utils;
const msgs = main.Messages;

// Utils
console.log(utils.calculator(15, "/", 7))
console.log(utils.randomNum(1, 10))

// Messages
msgs.error("test")
msgs.warn("test")
msgs.notice("test")