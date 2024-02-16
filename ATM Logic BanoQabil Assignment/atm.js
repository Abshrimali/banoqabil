let correctPin = "1234";
let maxAttempts = 3;
let balance = 0;

function startATM() {
    let pin = prompt("Please enter your PIN");
    validatePin(pin);
}

function validatePin(pin) {
    if (pin === correctPin) {
        showOptions();
    } else {
        alert("Invalid PIN. Please try again.");
        maxAttempts--;
        if (maxAttempts > 0) {
            startATM();
        } else {
            alert("Maximum attempts reached. Your account is locked.");
        }
    }
}

function showOptions() {
    const choice = prompt("Choose an option:\n1. Deposit\n2. Check Balance");
    switch (choice) {
        case "1":
            depositAmount();
            break;
        case "2":
            alert("Your balance is: $" + balance);
            break;
        default:
            alert("Invalid choice. Please try again.");
            showOptions();
    }
}

function depositAmount() {
    const deposit = parseFloat(prompt("Enter the amount to deposit:"));
    if (!isNaN(deposit) && deposit > 0) {
        balance += deposit;
        alert("Deposit successful. Your new balance is: $" + balance);
    } else {
        alert("Invalid amount. Please try again.");
        depositAmount();
    }
    // After completing the transaction, show the options again
    showOptions();
}
