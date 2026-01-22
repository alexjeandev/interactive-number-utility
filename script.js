let currentNumber = 0;

const numberDisplay = document.getElementById("numbers");

const increaseBtn = document.getElementById("increaseBtn")

const decreaseBtn = document.getElementById("decreaseBtn")

const resetBtn = document.getElementById("resetBtn")


increaseBtn.addEventListener("click", function() {
     currentNumber = currentNumber + 1;
     numberDisplay.textContent = currentNumber;
});


decreaseBtn.addEventListener("click", function() {
    if (currentNumber > 0) {
    currentNumber = currentNumber - 1;
    numberDisplay.textContent = currentNumber;
    }
});

resetBtn.addEventListener("click", function() {
    currentNumber = 0;
    numberDisplay.textContent = currentNumber;
});