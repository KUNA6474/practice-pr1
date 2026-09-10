const params = new URLSearchParams(window.location.search);

const value = params.get("value");

const unit = params.get("unit");

document.getElementById("result").textContent =
    "Temperature in " + unit + ": " + value;