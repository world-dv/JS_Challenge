const h1 = document.createElement("h1");
document.body.appendChild(h1);
h1.innerText = "Hello!";
h1.style.color = "white";

function handleWindow() {
  const winWid = window.innerWidth;
  if (winWid >= 500 && winWid < 1000) {
    document.body.style.backgroundColor = "purple";
  } else if (winWid > 1000) {
    document.body.style.backgroundColor = "yellow";
  } else {
    document.body.style.backgroundColor = "blue";
  }
}

handleWindow();
window.addEventListener("resize", handleWindow);
