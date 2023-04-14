el = document.getElementById("calcPriceBtn");
el.addEventListener("click", calcPrice);

function calcPrice() {
    let km = parseInt(document.getElementById("km").value);
    let age = document.getElementById("age").value;
    let name = document.getElementById("name").value;
    let price = km * 0.21;
    if (isNaN(km) || name == "" || age == "") {
        retry = confirm("Oops, alcuni dati sono errati.");
    }
    else {
        if (age == "Minorenne") {
            price -= price / 100 * 20;
        }
        else if (age == "65+") {
            price -= price / 100 * 40;
        }
        price = parseFloat(price).toFixed(2);
        document.getElementById("price").innerText = price + " €";
        document.getElementById("passengerName").innerText = name;
        document.getElementById("fare").innerText = age;
        randomCar = Math.floor(Math.random() * 9 + 1);
        document.getElementById("car").innerHTML = randomCar;
        randomCP = Math.floor(Math.random() * 10000 + 10000);
        document.getElementById("cp").innerHTML = randomCP;
    }
}


btnReset = document.getElementById("resetBtn");
btnReset.addEventListener("click", reloadPage);

function reloadPage() {
    location.reload();
}