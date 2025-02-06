function calculateSquare() {
  let num = document.getElementById("numberInput").value;

  if (num === "") {
    document.getElementById("result").innerText = "Please enter a number.";
    return;
  }

  let result = num * num;
  document.getElementById(
    "result"
  ).innerText = `The square of ${num} is ${result}.`;
}
