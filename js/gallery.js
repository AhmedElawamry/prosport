function morebtn(){
    var less = document.getElementsByClassName("less");
    var more = document.getElementsByClassName("more");
    var btnTxt = document.getElementsByClassName("mbtn");

    if (less.style.display == "none"){
        less.style.display = "inline";
        btnTxt = "Read More";
        more.style.display = "none";
    }
    else{
        less.style.display = "none";
        btnTxt.innerHTML = "Read Less";
        more.style.display = "inline";
    }
}

function des(){
    var d = document.getElementById("design-your");

}


$(window).load(function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });
});

