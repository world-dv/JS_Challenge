const h1 = document.createElement("h1");
document.body.appendChild(h1);
h1.innerText = "Random Number Game";
h1.style.fontSize = "30px";

const div1 = document.createElement("div");
document.body.appendChild(div1);

const h2 = document.createElement("h2");
div1.appendChild(h2);
h2.innerText = "Generate a number between 0 and ";
h2.style.display = "inline-block";
h2.style.lineHeight = "0%";

const input = document.createElement("input");
input.type = "number";
div1.appendChild(input);
input.style.marginLeft = "10px";

const div2 = document.createElement("div");
document.body.appendChild(div2);

const guessNumber = document.createElement("h3");
div2.appendChild(guessNumber);
guessNumber.innerText = "Guess the number : ";
guessNumber.style.display = "inline-block";
guessNumber.style.lineHeight = "0%";

const input2 = document.createElement("input");
input2.type = "number";
input2.style.marginLeft = "10px";
div2.appendChild(input2);

const btn = document.createElement("button");
btn.innerText = "Play!";
btn.style.marginLeft = "10px";
div2.appendChild(btn);

const h3 = document.createElement("h3");
div2.appendChild(h3);
h3.style.fontWeight = "100";
h3.style.lineHeight = "0%";

const h4 = document.createElement("h3");
h4.style.fontWeight = "blod";
h4.style.lineHeight = "0%";
div2.appendChild(h4);

function handleClick(event) {
  event.preventDefault();
  if (parseInt(input.value, 10) < 0) {
    alert("Worng Input Number!");
    return 0;
  }
  const randomNumber = Math.floor(Math.random() * parseInt(input.value, 10));
  const choseNumber = parseInt(input2.value, 10);
  handleInput(choseNumber, randomNumber);
}

function handleInput(chose, random) {
  h3.innerText = `You chose : ${chose}, the machine chose : ${random}`;

  if (chose === random) {
    h4.innerText = "You won!";
  } else {
    h4.innerText = "You lost!";
  }
}

btn.addEventListener("click", handleClick);
