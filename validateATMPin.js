//A program to validate ATM PIN. ATM PINs may only contain 4 or 6 digit numbers.

function validatePIN(pin) {
  return /^\d{4}$|^\d{6}$/.test(pin);
}
