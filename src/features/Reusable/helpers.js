export function randomId() {
  let num1 = Math.ceil(Math.random() * 9).toString();
  let num2 = Math.ceil(Math.random() * 9).toString();
  let num3 = Math.ceil(Math.random() * 9).toString();
  let num4 = Math.ceil(Math.random() * 9).toString();
  let num5 = Math.ceil(Math.random() * 9).toString();
  let num6 = Math.ceil(Math.random() * 9).toString();
  let finalNum = 111 + num1 + num2 + num3 + num4 + num5 + num6 + 777;

  return Number(finalNum);
}

export function validatePhoneNumber(input) {
  const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  if (!re.test(input)) {
    return false;
  } else {
    return true;
  }
}
