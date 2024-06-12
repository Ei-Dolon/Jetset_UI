// ProfileComponent

// default currency to use
localStorage.setItem("currency","USD");

// ProfileComponent Popup - config form - local currency selection radio buttons
document.getElementById("currencyRadioBtn").innerHTML = localStorage.getItem("currency");

