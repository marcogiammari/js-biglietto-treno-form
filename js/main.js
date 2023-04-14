el = document.getElementById("calcPriceBtn");
el.addEventListener("click", calcPrice);

function calcPrice() {
    let km = parseInt(document.getElementById("km").value);
    let age = document.getElementById("age").value;
    let name = document.getElementById("name").value;
    let price = km*0.21;
    if (isNaN(km)) {
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
    }
}

