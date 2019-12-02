$(document).ready(function() {
    $("#toggle").click(function() {
        var elem = $("#toggle").text();
        if (elem == "Read More") {
            //Stuff to do when btn is in the read more state
            $("#toggle").text("More Info");
            $("#text").slideDown();
        } else {
            //Stuff to do when btn is in the read less state
            $("#toggle").text("More Info");
            $("#text").slideUp();
        }
    });
});


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

