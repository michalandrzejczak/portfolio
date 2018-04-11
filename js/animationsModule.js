
const animationsModule = (function(){
 
    const $ = require('jquery');
    const ScrollMagic = require('scrollmagic');
    
    const animation =  $('*[class*="fade"]');
    
    animation.each(triggerAnimationOnScroll);
 
    function triggerAnimationOnScroll() {

        const controller = new ScrollMagic.Controller();
        const scene = new ScrollMagic.Scene({
        
            triggerElement: this,
            triggerHook: 0.9,
            
        })
        .setClassToggle(this, 'animationToggle')
        .addTo(controller);  
        
    }
    
    function rotateCogOnScroll() {
        
        const tween = TweenMax.to("#cog", 0.5, {rotation: 1440});
        
        const controller = new ScrollMagic.Controller();
        
        const scene = new ScrollMagic.Scene({
        
            triggerElement: "#skills",
            triggerHook: 1,
            duration: "1000%"
            
        })
        .setTween(tween)
        .addTo(controller); 
        
    }
    rotateCogOnScroll();
 
})()
