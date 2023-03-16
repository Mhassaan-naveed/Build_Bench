let nav = document.getElementById('toggler');
let count = 0;
function toggle() {
    if (count == 0) {
        nav.style.transform = "translateX(180%)";
        nav.style.display = "none";
        nav.style.transition = "0.50s ease-in";
        count++;
    }
    else {
        nav.style.transform = "translateX(0%)";
        nav.style.display = "flex"
        nav.style.transition = "0.50s ease-out"
        count = 0;
    }

}