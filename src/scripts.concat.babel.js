'use strict';

var navModule = function () {

    var $ = require('jquery');

    var hamburger = $('.hamburger');
    var mainNavbar = $('.mainNavbar');
    var mainNavbar__ul = $('.mainNavbar__ul');
    var mainNavbar__li = $('.mainNavbar__li');

    hamburger.on('click', hamburgerClickFunction);

    function hamburgerClickFunction() {

        hamburger.toggleClass('is-active');
        mainNavbar__ul.toggleClass('show_ul');
        mainNavbar.toggleClass('navbarToggle');
    };
}();