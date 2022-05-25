const carousel = new bootstrap.Carousel('#myCarousel')

let myInterval=null;
let activeIndex = 0;

function startAutoSliding(){
    myInterval = setInterval(showNextSlide, 5000);
    }
    
    function stopAutoSliding(){
    clearInterval(myInterval)
    myInterval=null;}