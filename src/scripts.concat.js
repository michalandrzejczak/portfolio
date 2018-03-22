const navModule = (function() {

    const $ = require('jquery');
    
    const hamburger = $('.hamburger');
    const mainNavbar = $('.mainNavbar');
    const mainNavbar__ul = $('.mainNavbar__ul');
    const mainNavbar__li = $('.mainNavbar__li');
    
    hamburger.on('click', hamburgerClickFunction)
        
    function hamburgerClickFunction() {
        
        hamburger.toggleClass('is-active');
        mainNavbar__ul.toggleClass('show_ul');
        mainNavbar.toggleClass('navbarToggle');
 
    };
    
})();