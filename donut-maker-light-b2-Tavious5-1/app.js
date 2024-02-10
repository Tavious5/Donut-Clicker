let count = 0;

let autoClickCost = 100;
let autoClickCount = 0;

let countElement = document.getElementById("count");
let clickMe = document.getElementById("clickMe");
let resetMe = document.getElementById("reset");

let autoClicker = document.getElementById("autoClickerButton");

let autoClickerCost = document.getElementById("autoClickCost");

let autoClickerCount = document.getElementById("autoClickCounter");

clickMe.addEventListener("click", function () {
  count = count + 1;
  countElement.innerText = "Donuts: " + count;
});

function PurchaseAutoClickers() {
  if (count >= autoClickCost) {
    count = count - 100;
    autoClickCount = autoClickCount + 1;
    autoClickCost = Math.floor(autoClickCost * 1.1); // Increase cost by 10%
    autoClickerCost.innerText = autoClickCost;
    countElement.innerText = "Donuts: " + count;
    autoClickerCount.innerText = "AutoClickers: " + autoClickCount;
  } else {
    alert("Sorry, But you need more Donuts!");
  }
}

autoClicker.addEventListener("click", function () {
  PurchaseAutoClickers();
});

setInterval(function () {
  count = count + autoClickCount;
  countElement.innerText = "Donuts: " + count;
}, 1000);

resetMe.addEventListener("click", function () {
  count = 0;
  autoClickCount = 0;
  autoClickCost = 100;
  countElement.innerText = "Donuts: " + count;
  autoClickerCount.innerText = "AutoClickers: 0";
  autoClickerCost.innerText = autoClickCost;
});

let modal = document.getElementById("myModal");
let open = document.getElementById("open");
let close = document.getElementById("close");

open.addEventListener("click", function () {
  modal.style.display = "block";
});

close.addEventListener("click", function () {
  modal.style.display = "none";
});
