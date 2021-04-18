module.exports = {
	
    /**
     * Calculates a number
     * @param {Number} num1 
     * @param {string} typeOfEquation 
     * @param {Number} num2
     * @returns {Promise<Number>}
	 * @example console.log(CoolFunctions.Utils.calculator(3, *, 69)) (outputs: 207)
     */
    calculator: function (num1, typeOfEquation, num2) {
        const listOfEquations = ["+", "-", "*", "/"];
        // Errors
        if (!num1 || isNaN(num1)) throw new TypeError("The first number was not specified or was not an actual number.");
        if (!listOfEquations.includes(typeOfEquation)) throw new TypeError("The type of equation was not specified or the specified equation type was not correct. Use (+, -, *, /, ^)");
        if (!num2 || isNaN(num2)) throw new TypeError("The second number was not specified or is not an actual number.");
        
        // Equations
        if (typeOfEquation == "+") return num1 + num2;
        if (typeOfEquation == "-") return num1 - num2;
        if (typeOfEquation == "*") return num1 * num2;
        if (typeOfEquation == "/") return num1 / num2;
    },
    /**
     * @param {Number} min
     * @param {Number} max
     * @returns {Promise<Number>}
	 * @example console.log(CoolFunctions.Utils.randomNum(1, 10)) (outputs: Random number between 1 and 10)
     */
    randomNum: function (min, max) {
        if (isNaN(min)) {
            throw new TypeError("You must specify an actual number for the minimum value.")
        }
        if (isNaN(max)) {
            throw new TypeError("You must specify an actual number for the maximum value.")
        }
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}