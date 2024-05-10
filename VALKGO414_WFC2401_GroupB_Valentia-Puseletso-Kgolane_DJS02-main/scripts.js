const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Convert inputs to numbers
  const dividendNumber = parseFloat(dividend);
  const dividerNumber = parseFloat(divider);

  // Check if inputs are valid numbers
  if (isNaN(dividendNumber) || isNan(dividerNumber)) {
    result.innerHTML = "Division not performed. Invalid number provided. Try again";
    return;
  }

  // Check if divider is zero
  if (dividerNumber === 0) {
    result.innerHTML = "Division not performed. Cannot divide by zero.";
    console.error("Division by zero attempted.");
    return;
  }

  // Check if both inputs are filled
  if (!dividend.trim() || !divider.trim()) {
    result.innerHTML = "Division not performed. Both values are required in inputs. Try again";
    return;
  }

  //perform division
  const divisionResult = dividendNumber / dividerNumber;

  // Check if the result is a whole nuumber
  if (divisionResult % 1 === 0) {
    result.innerText = divisionResult;
  } else{
    result.innerText = Math.trunc(divisionResult); // Display whole number without decimal places
  }
});
