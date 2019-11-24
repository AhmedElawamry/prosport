$(document).ready(function() {
    // Transition effect for navbar
    $(window).scroll(function() {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if($(this).scrollTop() > 300) {
            $('.navbar').addClass('solid');
        } else {
            $('.navbar').removeClass('solid');
        }
    });
});


(function(){

    var button = document.getElementById('cn-button'),
        wrapper = document.getElementById('cn-wrapper');

    //open and close menu when the button is clicked
    var open = true;
    button.addEventListener('click', handler, true);

    function handler(){
        if(!open){
            classie.add(wrapper, 'opened-nav');
        }
        else{
            classie.remove(wrapper, 'opened-nav');
        }
        open = !open;
    }
    function closeWrapper(){
        classie.remove(wrapper, 'opened-nav');
    }

})();

