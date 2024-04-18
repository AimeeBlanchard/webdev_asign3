/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

let costPerDay = 35;
let dayCounter = 0;
let rateButton = document.getElementById("full");
let days = document.querySelectorAll(".day-selector li");
let calculatedCostElement = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function handleDayClick(event) {
  let dayButton = event.target;
  if (!dayButton.classList.contains("clicked")) {
    dayButton.classList.add("clicked");
    dayCounter++;
  }
  calculateTotalCost();
}
days.forEach((day) => day.addEventListener("click", handleDayClick));

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function handleClearClick() {
  days.forEach((day) => day.classList.remove("clicked"));
  dayCounter = 0;
  calculateTotalCost();
}
document
  .getElementById("clear-button")
  .addEventListener("click", handleClearClick);
/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function handleRateClick(event) {
  let rateButton = event.target;
  if (rateButton.id === "half") {
    costPerDay = 20;
    rateButton.classList.add("clicked");
    document.getElementById("full").classList.remove("clicked");
    // when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
  } else if (rateButton.id === "full") {
    costPerDay = 35;
    rateButton.classList.add("clicked");
    document.getElementById("half").classList.remove("clicked");
  }
  calculateTotalCost();
}
document.getElementById("full").addEventListener("click", handleRateClick);
document.getElementById("half").addEventListener("click", handleRateClick);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateTotalCost() {
  let totalCost = dayCounter * costPerDay;
  calculatedCostElement.innerHTML = totalCost;
}
