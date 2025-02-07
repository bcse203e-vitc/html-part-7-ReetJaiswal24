function calculate() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    
    var operation = prompt("Enter the operation (add, subtract, multiply, divide):");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    var result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            alert("The result of addition is: " + result);
            break;
        case 'subtract':
            result = num1 - num2;
            alert("The result of subtraction is: " + result);
            break;
        case 'multiply':
            result = num1 * num2;
            alert("The result of multiplication is: " + result);
            break;
        case 'divide':
            if (num2 === 0) {
                alert("Error: Division by zero is not allowed.");
            } else {
                result = num1 / num2;
                alert("The result of division is: " + result);
            }
            break;
        default:
            alert("Invalid operation! Please enter 'add', 'subtract', 'multiply', or 'divide'.");
            break;
    }
}
calculate();
