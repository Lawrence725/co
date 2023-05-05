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
    if (event.target == popList) {
        popList.style.display = "none";
    } else if (event.target == popCancel) {
        popCancel.style.display = "none";
    }
}

// Popup (Cancel)
var popCancel    = document.getElementById("popCancel");
var buttonCancel = document.getElementById("buttonCancel");
var close       = popCancel.getElementsByClassName("close")[0];
var submit      = popCancel.getElementsByClassName("delete")[0];
var cancel      = popCancel.getElementsByClassName("cancel")[0];
buttonCancel.onclick = function() { popCancel.style.display = "flex"; }
close.onclick       = function() { popCancel.style.display = "none"; }
submit.onclick      = function() { popCancel.style.display = "none"; }
cancel.onclick      = function() { popCancel.style.display = "none"; }

// Popup (List)
var popList    = document.getElementById("popList");
var buttonList = document.getElementById("buttonList");
var close       = popList.getElementsByClassName("close")[0];
var submit      = popList.getElementsByClassName("submit")[0];
var cancel      = popList.getElementsByClassName("cancel")[0];
buttonList.onclick = function() { popList.style.display = "flex"; }
close.onclick       = function() { popList.style.display = "none"; }
submit.onclick      = function() { popList.style.display = "none"; }
cancel.onclick      = function() { popList.style.display = "none"; }