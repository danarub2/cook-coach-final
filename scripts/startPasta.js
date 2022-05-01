var clicks = 1;
var pastaAmt = 0.25;
var sauceAmt = 0.25;


function onClick() {
    clicks += 1;
    pastaAmt = .25 * clicks;
    sauceAmt = .25 * clicks;
    document.getElementById("clicks").innerHTML = clicks;
    document.getElementById("pastaAmt").innerHTML = pastaAmt;
    document.getElementById("sauceAmt").innerHTML = sauceAmt;

};

function onClickBack() {
    clicks -= 1;
    if (clicks < 1) {
        clicks = 1
        pastaAmt = 0.25
        sauceAmt = 0.25

    }
    pastaAmt = .25 * clicks;
    sauceAmt = .25 * clicks;
    document.getElementById("clicks").innerHTML = clicks;
    document.getElementById("pastaAmt").innerHTML = pastaAmt;
    document.getElementById("sauceAmt").innerHTML = sauceAmt;
}