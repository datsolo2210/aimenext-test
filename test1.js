
function sumDigits(number) {
  let numberStr = number.toString();
  let sum = 0;
  for (let i = 0; i < numberStr.length; i++) {
    sum += parseInt(numberStr[i]);
  }

  if (sum > 9) return sumDigits(sum);
  else return sum;
}
