function toggleMobileNav() {
    var nav = document.getElementById("mobile-nav");
    
    if (nav.className.indexOf("w3-show") == -1) {
        nav.className += " w3-show";
    } else {
        nav.className = nav.className.replace(" w3-show", "");
    }
}
var slideIndex = 1;

function changeSlide(direction) {
    showSlide(slideIndex += direction);
}

function showSlide(index) {
    var slides = document.getElementsByClassName("mySlides");
    
    if (index > slides.length) {
        slideIndex = 1;
    }
    
    if (index < 1) {
        slideIndex = slides.length;
    }
    
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex - 1].style.display = "block";
}

function autoSlide() {
    slideIndex++;
    showSlide(slideIndex);
    setTimeout(autoSlide, 5000);
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-blue-grey", "");
    }
    
    document.getElementById(tabName).style.display = "block";
    
    evt.currentTarget.className += " w3-blue-grey";
}

