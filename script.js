//toggle menu function will display a hamburger menu option when page size shrinks
function toggleMenu(){
    var navLinks = document.querySelector('#navbar ul');
    navLinks.classList.toggle('show');
}

//script to detect the scrolling up and down to show/hide the navigation bar
var prevScrollPos = window.pageYOffset;

window.onscroll = function(){
    var currentScrollPos = window.pageYOffset;

    //Show/hide the navigation bar based on scroll direction
    if(prevScrollPos>currentScrollPos){
        document.querySelector("nav").style.top = "0";
    }else{
        document.querySelector("nav").style.top = "-80px"
    }

    prevScrollPos = currentScrollPos;
}


//script that will take the user to thank you page when submit button from contact page is clicked
function submitForm(){
    window.location.href="thankyou.html";
}

//Script to redirect page from the gallary in home page
function redirectToPage(pageUrl) {
    window.location.href = pageUrl;
}

