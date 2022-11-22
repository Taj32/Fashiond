// File handles enabling and disabling scroll feature
// will be used to lock the user to a gateway
var faded = 0;
function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}
  
function enableScroll() {
    window.onscroll = function() {};
    if(faded == 0) {
        faded = 1;
        source.classList.toggle('nofade');
    }
    

}


