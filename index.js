let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav").style.top = "0";
        document.getElementById("right").style.top = "100";
        document.getElementById("ham").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "-100px";
        document.getElementById("right").style.top = "0";
        document.getElementById("ham").style.top = "-100";
    }
    prevScrollpos = currentScrollPos;
}