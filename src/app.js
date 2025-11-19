import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
const action = ['ate', 'peed', 'crushed', 'broke'];
const what = ['my homework', 'my phone', 'the car'];
const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function getRandom(anyArray) {
  return anyArray[Math.floor(Math.random() * anyArray.length)];
}

function generateExcuse() {
  return `${getRandomItem(who)} ${getRandomItem(action)} ${getRandomItem(what)} ${getRandomItem(when)}`;
}

window.onload = function () {
  console.log("Hello Rigo from the console!")
  document.querySelector('#excuse').innerHTML = generateExcuse();

  document.getElementById('generateBtn').addEventListener('click', function () {
    document.querySelector('#excuse').innerHTML = generateExcuse();
  });
};