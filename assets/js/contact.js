function submitHandler() {
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#mail").value;
  const phone = document.querySelector("#phone").value;
  const message = document.querySelector("#message").value;
  let result = document.querySelector("#showResult");

  const jsonObj = {
    name: name,
    email: email,
    phone: phone,
    message: message,
  };
  result.innerHTML = JSON.stringify(jsonObj);
  alert(JSON.stringify(jsonObj));
}
