**CoolFunctions**
====
*What is CoolFunctions you may ask? Well, it is a package that was designed in NodeJS which was originally made by me for my Discord.JS bot for some QOL features. But I decided I would release it to the public.*
====

***HOW TO USE***
====
Here are some examples of how to use my package!
```js
const cf = require('coolfunctions');
// Messages Class:
    const msgs = cf.Messages;
    // Error Function:
        msgs.error("Example Error!") // Outputs "Example Error!" with an underline and colored red in console.
    // Warn Function:
        msgs.warn("Example Warn!") // Outputs "Example Warn!" with an underline and colored yellow in console.
    // Notice Function:
        msgs.notice("Example Notice!") // Outputs "Example Notice!" with an underline and colored blue/cyan in console.
// Utility Class:
    const utils = cf.Utils;
    // Calculator Function:
        console.log(utils.calculator(3, "+", 15)) // Outputs 18 in console.
        console.log(utils.calculator(15, "-", 3)) // Outputs 12 in console.
        console.log(utils.calculator(3, "*", 15)) // Outputs 45 in console.
        console.log(utils.calculator(15, "/", 3)) // Outputs 5 in console.
    // RandomNum Function:
        console.log(utils.randomNum(1, 10)) // Outputs a random number from 1 to 10 inside of the console.
```
Thank you so much for reading this all the way through (if you did). I hope you have a nice day and have fun with my package. Stay safe out there!
