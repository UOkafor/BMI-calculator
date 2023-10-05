// document.addEventListener("DOMContentLoaded", function () {
//     // Get the BMI value from the URL parameter
//     const urlParams = new URLSearchParams(window.location.search);
//     const bmi = urlParams.get("bmi");

//     // Display the BMI result
//     const resultDiv = document.getElementById("bmi-result");

//     if (bmi !== null) {
//         // Use toFixed(1) to display the BMI with one decimal place
//         const formattedBMI = parseFloat(bmi).toFixed(1);

//         let message = `<strong>Your BMI is ${formattedBMI}</strong><br><br>`;

//         if (formattedBMI >= 25) {
//             message += "You are overweight";
//         } else if (formattedBMI > 29.9) {
//             message += "You are obese";
//         } else if (formattedBMI < 18.5) {
//             message += "You are underweight";
//         } else {
//             message += "You have a normal BMI";
//         }

//         // Set the message with line breaks
//         resultDiv.innerHTML = message;
//     } else {
//         resultDiv.textContent = "No BMI data available.";
//     }
// });
