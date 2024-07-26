class Calculator {
    // Method to add two numbers
    add(a, b) {
        return a + b;
    }

    // Method to subtract the second number from the first
    subtract(a, b) {
        return a - b;
    }

    // Method to multiply two numbers
    multiply(a, b) {
        return a * b;
    }

    // Method to divide the first number by the second
    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }

    // Method to handle invalid operations
    operate(operation, a, b) {
        switch (operation) {
            case 'add':
                return this.add(a, b);
            case 'subtract':
                return this.subtract(a, b);
            case 'multiply':
                return this.multiply(a, b);
            case 'divide':
                return this.divide(a, b);
            default:
                throw new Error("Invalid operation.");
        }
    }
}

// Example usage
const calculator = new Calculator();
console.log("Addition: ", calculator.operate('add', 5, 3)); // 8
console.log("Subtraction: ", calculator.operate('subtract', 5, 3)); // 2
console.log("Multiplication: ", calculator.operate('multiply', 5, 3)); // 15
console.log("Division: ", calculator.operate('divide', 6, 3)); // 2