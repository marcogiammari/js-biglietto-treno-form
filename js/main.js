el = document.getElementById("calcPriceBtn");
el.addEventListener("click", calcPrice);

function calcPrice() {
    let km = parseInt(document.getElementById("km").value);
    let age = document.getElementById("age").value;
    let name = document.getElementById("name").value;
    let price = km * 0.21;
    if (isNaN(km) || name == "" || age == "" || !/^[a-zA-Z'\s]*$/.test(name)) {
        confirm("Oops, alcuni dati sono mancanti o errati.");
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
        let randomCP = "";
        for (let i = 0; i < 5; i++) {
            let randomNum = (Math.floor(Math.random() * 10));
            toString(randomNum);
            randomCP += randomNum;
        }
        document.getElementById("cp").innerHTML = randomCP;
    }
}


btnReset = document.getElementById("resetBtn");
btnReset.addEventListener("click", function reloadPage() { location.reload() });