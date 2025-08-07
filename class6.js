function greetUser() {
  const name = document.getElementById("name").value;
  document.getElementById("greet").textContent = 'Hello, ${name}!';
}


function selectColor(select) {
  document.querySelector("section:nth-of-type(2) div").textContent = 'You selected ${select.value}';
}


function toggleParagraph() {
  const p = document.querySelector("section:nth-of-type(3) p");
  p.style.display = p.style.display === "none" ? "block" : "none";
}


function checkVoting() {
  const age = document.getElementById("age").value;
  document.querySelector("section:nth-of-type(4) p").textContent = age >= 18 ? "Eligible to vote" : "Not eligible";
}


function addMessage() {
  const val = document.querySelector("section:nth-of-type(5) input").value;
  const p = document.createElement("p");
  p.textContent = val;
  document.querySelector("section:nth-of-type(5)").appendChild(p);
}


function boldText() {
  document.getElementById("info").style.fontWeight = "bold";
}


function showSum() {
  const n1 = +document.getElementById("n1").value;
  const n2 = +document.getElementById("n2").value;
  document.querySelector("section:nth-of-type(7) p").textContent = n1 + n2;
}


function setHeading(input) {
  document.getElementById("title").textContent = input.value;
}


let count = 0;
function incrementCount() {
  count++;
  document.getElementById("count").textContent = count;
}


function clearInput() {
  document.querySelector("section:nth-of-type(10) input").value = "";
}

function changeBackgroundByAge() {
  const age = +document.getElementById("bgAge").value;
  if (age < 18) {
    document.body.style.backgroundColor = "red";
  } else if (age <= 60) {
    document.body.style.backgroundColor = "green";
  } else {
    document.body.style.backgroundColor = "yellow";
  }
}