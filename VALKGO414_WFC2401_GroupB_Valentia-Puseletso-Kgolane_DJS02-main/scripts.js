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
  if (isNaN(dividendNumber) || isNaN(dividerNumber)) {
    result.innerHTML = "Something critical went wrong. please reload the page.";
    console.error("Critical error: Non-numeric inputs provided.);
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

  // Perform division
  const divisionResult = dividendNumber / dividerNumber;

  // Check if the result is a whole number
  if (divisionResult % 1 === 0) {
    result.innerText = divisionResult;
  } else {
    result.innerText = Math.trunc(divisionResult); // Display whole number without decimal places
  }
});

