const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let expression = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");
        console.log(value);
        if (value === "=") {
            try {
                const result = eval(expression);
                display.value = result;
                expression = result.toString();
            } catch (error) {
                display.value = "Error";
                expression = "";
            }
        }  
        else if (value === "AC") {
            clearDisplay();
        }
            else if (value === "del") {
                expression = expression.slice(0, -1);
                display.value = expression;
            }
        
        else {
            expression += value;
            display.value = expression;
        }
    });
});

// Optional: Clear button functionality
function clearDisplay() {
    expression = "";
    display.value = "";
}
