// Menu
document.getElementById("menuOn").onclick = function() {
    var element = document.getElementById("menu");
    element.classList.toggle("menuActive");
};
document.getElementById("menuOff").onclick = function() {
    var element = document.getElementById("menu");
    element.classList.toggle("menuActive");
};

// All Popup (Click outside popup close)
window.onclick = function(event) {
    if (event.target == popDelete) {
        popDelete.style.display = "none";
    }
}

// Popup (Delete)
var popDelete    = document.getElementById("popDelete");
var buttonDelete = document.getElementById("buttonDelete");
var close       = popDelete.getElementsByClassName("close")[0];
var submit      = popDelete.getElementsByClassName("delete")[0];
var cancel      = popDelete.getElementsByClassName("white")[0];
buttonDelete.onclick = function() { popDelete.style.display = "flex"; }
close.onclick       = function() { popDelete.style.display = "none"; }
submit.onclick      = function() { popDelete.style.display = "none"; }
cancel.onclick      = function() { popDelete.style.display = "none"; }