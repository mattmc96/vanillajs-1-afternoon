var idInput = document.getElementById("idInput");
var colorInput = document.getElementById("colorInput");

const setCard = () => {
  const card = document.getElementById(idInput.value);
  console.log(card);
  card.style.color = colorInput.value;
};

var button = document.createElement("button");
button.innerHTML = "New Hand";
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener("click", function () {
  alert("Thanks for playing! Want to play again?");

  location.reload();
});
