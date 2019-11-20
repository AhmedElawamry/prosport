function myFunction($param) {
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 50) {
                $(".navbar").css("background-color", "#222");
            } else {
                $(".navbar").css("background-color", "transparent");
            }
        });
    });
}

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

