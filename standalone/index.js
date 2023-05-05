// All Popup (Click outside popup close)
window.onclick = function(event) {
    if (event.target == popCancel) {
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