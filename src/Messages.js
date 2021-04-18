const clc = require('cli-color')

module.exports = {

    /**
     * Logs in console when an error happens
     * @param {String} logged 
     */
    error: function (logged) {
        return console.log(clc.redBright.bold.underline(logged))
    },

    /**
     * Logs in console if there is a warning with the code
     * @param {String} logged 
     */
    warn: function (logged) {
        return console.log(clc.yellowBright.bold.underline(logged))
    },

    /**
     * Sends a notice to console if something happens that is not right and should be fixed
     * @param {String} logged 
     */
    notice: function (logged) {
        return console.log(clc.cyanBright(logged))
    }

}