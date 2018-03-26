'use strict';

var animationsOnScrollModule = function () {

    var $ = require('jquery');
    var ScrollMagic = require('scrollmagic');

    var animation = $('*[class*="fade"]');

    animation.each(triggerAnimationOnScroll);

    function triggerAnimationOnScroll() {

        var controller = new ScrollMagic.Controller();
        var scene = new ScrollMagic.Scene({

            triggerElement: this

        }).setClassToggle(this, 'animationToggle').addTo(controller);
    }
}();

var navModule = function () {

    var $ = require('jquery');

    var hamburger = $('.hamburger');

    var mainNavbar = $('.mainNavbar');
    var mainNavbar__ul = $('.mainNavbar__ul');

    var navigationLink = $('nav a');

    // Hamburger toggle

    hamburger.on('click', hamburgerClickFunction);

    function hamburgerClickFunction() {

        hamburger.toggleClass('is-active');
        mainNavbar__ul.toggleClass('show_ul');
        mainNavbar.toggleClass('navbarToggle');
    };

    // Navigation links - scroll

    navigationLink.on('click', navigationLinkFunction);

    function navigationLinkFunction(event) {

        var target = $(this.getAttribute('href'));

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
}();