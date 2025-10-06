function toggleMobileNav() {
    var nav = document.getElementById("mobile-nav");
    
    if (nav.className.indexOf("w3-show") == -1) {
        nav.className += " w3-show";
    } else {
        nav.className = nav.className.replace(" w3-show", "");
    }
}


