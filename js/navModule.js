const navModule = (function() {

    const $ = require('jquery');
    
    const hamburger = $('.hamburger');
    
    const mainNavbar = $('.mainNavbar');
    const mainNavbar__ul = $('.mainNavbar__ul');
    
    const navigationLink = $('nav a');
    
    
    // Hamburger toggle
    
    hamburger.on('click', hamburgerClickFunction)
        
    function hamburgerClickFunction() {
        
        hamburger.toggleClass('is-active');
        mainNavbar__ul.toggleClass('show_ul');
        mainNavbar.toggleClass('navbarToggle');
 
    };
    
    
    // Navigation links - scroll
    
    navigationLink.on('click', navigationLinkFunction)
    
    function navigationLinkFunction(event) {
        
        let target = $(this.getAttribute('href'));
        
        if (!target.length) {
            
            event.preventDefault();
            $("html, body").stop().animate({ 
                scrollTop: 0 }, 1000);
            
        } else {
            
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1500);
            
        };
        
    };
        

    
})();