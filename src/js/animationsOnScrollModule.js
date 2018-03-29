
const animationsOnScrollModule = (function(){
 
    const $ = require('jquery');
    const ScrollMagic = require('scrollmagic');
    
    const animation =  $('*[class*="fade"]');
  
    animation.each(triggerAnimationOnScroll);
 
    function triggerAnimationOnScroll() {

        const controller = new ScrollMagic.Controller();
        const scene = new ScrollMagic.Scene({
        
            triggerElement: this,
            triggerHook: 0.8,
            
        })
        .setClassToggle(this, 'animationToggle')
        .addTo(controller);  
        
    }
 
})()
