document.addEventListener("DOMContentLoaded", function() {
    setTimeout(showPopup, 40000); // Display popup after 50 seconds (50000 milliseconds)
});

function showPopup() {
    document.getElementById("popup").style.display = "block";
}

function hidePopup() {
    document.getElementById("popup").style.display = "none";
}