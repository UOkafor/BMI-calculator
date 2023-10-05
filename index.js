document.addEventListener("DOMContentLoaded", function () {
    let weight = document.querySelector(".weight");
    let height = document.querySelector(".height");
    let calculateBmiButton = document.querySelector(".calculate");

    calculateBmiButton.addEventListener('click', () => {
        let newWeight = Number(weight.value);
        let newHeight = Number(height.value);


        if (isNaN(newWeight) || isNaN(newHeight) || newWeight <= 0 || newHeight <= 0) {
            // If either input field is empty, not a number, or less than or equal to zero, we show an alert message.
            alert("Please enter valid values for weight and height.");
            return;
        }

        let heightSquare = Math.pow(newHeight, 2);
        let bmi = newWeight / heightSquare;

        // Pass BMI value as a URL parameter and navigate to the result page
        window.location.href = `print.html?bmi=${bmi}`;
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Get the BMI value from the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const bmi = urlParams.get("bmi");

    // Display the BMI result
    const resultDiv = document.getElementById("bmi-result");

    if (bmi !== null) {
        // Use toFixed(1) to display the BMI with one decimal place
        const formattedBMI = parseFloat(bmi).toFixed(1);

        let message = `<strong>Your BMI is ${formattedBMI}</strong><br><br>`;

        if (formattedBMI >= 25) {
            message += "You are overweight";
        } else if (formattedBMI > 29.9) {
            message += "You are obese";
        } else if (formattedBMI < 18.5) {
            message += "You are underweight";
        } else {
            message += "You have a normal BMI";
        }

        // Set the message with line breaks
        resultDiv.innerHTML = message;
    } else {
        resultDiv.textContent = "No BMI data available.";
    }
});
