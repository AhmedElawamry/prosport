$(document).ready(function() {
    var hiddenInfo = $(".hidden-info");
    var readMoreTrigger = $(".read-more-trigger");

    //hide div .hidden-info
    hiddenInfo.hide();

    readMoreTrigger.on("click", function(){
        //toggle the hidden div
        hiddenInfo.toggle();
        //toggle text in .hidden-info to 'Read Less', 'Read More'
        if (readMoreTrigger.text() == "Read More")
            readMoreTrigger.text("Read less");
        else readMoreTrigger.text("Read More");
    });
});

(function($) {

    // Open Lightbox
    $('.open-lightbox').on('click', function(e) {
        e.preventDefault();
        var image = $(this).attr('href');
        $('html').addClass('no-scroll');
        $('body').append('<div class="lightbox-opened"><img src="' + image + '"></div>');
    });

    // Close Lightbox
    $('body').on('click', '.lightbox-opened', function() {
        $('html').removeClass('no-scroll');
        $('.lightbox-opened').remove();
    });

})(jQuery);

$(window).load(function(){
    //$container.isotope({ filter: '.equipment: not(dyt)' });

    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '.equipment:not(.dyt)',
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
                queue: false
            }
        });
        return false;
    });

});



