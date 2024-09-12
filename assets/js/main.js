function getRadioValue() {
  console.log("hello");
  const form = document.querySelector("#myForm");
  const selectedValue = form.querySelector(
    'input[name="developer"]:checked'
  ).value;
  const selectedValue2 = form.querySelector(
    'input[name="webPage"]:checked'
  ).value;
  const input = document.querySelector('#email').value
  const jsonObj = {
    developer: selectedValue,
    webPage: selectedValue2,
    email: input,
  };

  alert(JSON.stringify(jsonObj));
}
