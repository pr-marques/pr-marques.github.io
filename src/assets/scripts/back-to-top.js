    // back to top button functionality

    let mybutton = document.getElementById("back-to-top-container");

    window.onscroll = function() {
    scrollFunction();
    };

    function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        mybutton.classList.add("show");
        mybutton.classList.remove("hide");
    } else {
        mybutton.classList.remove("show");
        mybutton.classList.add("hide");
    }
    }

    function topFunction() {
    document.body.scrollTop = 0;  
    document.documentElement.scrollTop = 0;
    }