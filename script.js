function checkNumber() {
  const phone = document.getElementById("phone").value;
  const pattern = /^[0][9][8][9][0-9]{9}$/;
  if (pattern.test(phone)) {
    alert("Format is correct");
  } else {
    alert("Format is not correct");
  }
}
