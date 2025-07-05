//your JS code here. If required.
const inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    const value = input.value;

    // Allow only digits
    if (!/^[0-9]$/.test(value)) {
      input.value = "";
      return;
    }

    // Move to next field
    if (value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (input.value === "") {
        if (index > 0) {
          inputs[index - 1].focus();
          inputs[index - 1].value = "";
        }
      } else {
        input.value = "";
      }
    }
  });

  // Optional: handle arrow keys
  input.addEventListener("keyup", (e) => {
    if (e.key === "ArrowLeft" && index > 0) {
      inputs[index - 1].focus();
    } else if (e.key === "ArrowRight" && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });
});

// Focus on first input on load
window.addEventListener("load", () => {
  inputs[0].focus();
});
