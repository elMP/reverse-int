module.exports = function reverse(n) {
  const stringNumber = String(n);
  let newString = '';
  for (let i = stringNumber.length - 1; i >= 0; i--) {
    if (stringNumber[i] === '-')
      break;

    newString += stringNumber[i];
  }

  return Number(newString);
}
