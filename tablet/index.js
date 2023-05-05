// Menu
document.getElementById("menuOn").onclick = function() {
    var element = document.getElementById("menu");
    element.classList.toggle("menuActive");
};
document.getElementById("menuOff").onclick = function() {
    var element = document.getElementById("menu");
    element.classList.toggle("menuActive");
};

// Payment
document.getElementById("paymentOn").onclick = function() {
    var element = document.getElementById("payment");
    element.classList.toggle("fMenuActive");
};

// Setting
document.getElementById("settingOn").onclick = function() {
    var element = document.getElementById("setting");
    element.classList.toggle("fMenuActive");
};


// All Popup (Click outside popup close)
window.onclick = function(event) {
    if (event.target == popHead) {
        popHead.style.display = "none";
    }
    else if (event.target == popMember) {
        popMember.style.display = "none";
    }
    else if (event.target == popSycn) {
        popSycn.style.display = "none";
    }
}

// Popup (人數)
var popHead    = document.getElementById("popHead");
var buttonHead = document.getElementById("buttonHead");
var close       = popHead.getElementsByClassName("close")[0];
var submit      = popHead.getElementsByClassName("submit")[0];
var cancel      = popHead.getElementsByClassName("cancel")[0];
buttonHead.onclick = function() { popHead.style.display = "flex"; }
close.onclick       = function() { popHead.style.display = "none"; }
submit.onclick      = function() { popHead.style.display = "none"; }
cancel.onclick      = function() { popHead.style.display = "none"; }

// Popup (會員)
var popMember    = document.getElementById("popMember");
var buttonMember = document.getElementById("buttonMember");
var close       = popMember.getElementsByClassName("close")[0];
var submit      = popMember.getElementsByClassName("submit")[0];
var cancel      = popMember.getElementsByClassName("cancel")[0];
buttonMember.onclick = function() { popMember.style.display = "flex"; }
close.onclick       = function() { popMember.style.display = "none"; }
submit.onclick      = function() { popMember.style.display = "none"; }
cancel.onclick      = function() { popMember.style.display = "none"; }

// Popup (菜單同步)
var popSycn    = document.getElementById("popSycn");
var buttonSycn = document.getElementById("buttonSycn");
var close       = popSycn.getElementsByClassName("close")[0];
var submit      = popSycn.getElementsByClassName("submit")[0];
var cancel      = popSycn.getElementsByClassName("cancel")[0];
buttonSycn.onclick = function() { popSycn.style.display = "flex"; }
close.onclick       = function() { popSycn.style.display = "none"; }
submit.onclick      = function() { popSycn.style.display = "none"; }
cancel.onclick      = function() { popSycn.style.display = "none"; }