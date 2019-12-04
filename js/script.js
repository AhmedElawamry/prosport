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

$('.Show').click(function() {
    $('#target').show(500);
    $('.Show').hide(0);
    $('.Hide').show(0);
});
$('.Hide').click(function() {
    $('#target').hide(500);
    $('.Show').show(0);
    $('.Hide').hide(0);
});
$('.toggle').click(function() {
    $('#target').toggle('slow');
});



$('.Show').click(function() {
    $('#target-2').show(500);
    $('.Show').hide(0);
    $('.Hide').show(0);
});
$('.Hide').click(function() {
    $('#target-2').hide(500);
    $('.Show').show(0);
    $('.Hide').hide(0);
});
$('.toggle-2').click(function() {
    $('#target-2').toggle('slow');
});


$('.Show').click(function() {
    $('#target-3').show(500);
    $('.Show').hide(0);
    $('.Hide').show(0);
});
$('.Hide').click(function() {
    $('#target-3').hide(500);
    $('.Show').show(0);
    $('.Hide').hide(0);
});
$('.toggle-3').click(function() {
    $('#target-3').toggle('slow');
});


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


var e = jQuery.Event("keydown");
e.which = 119; // # Some key code value
$(".cti").click.trigger(e);


console.log( String.fromCharCode(event.charCode) );



$(document).keyup(function(e){
    //find out which key was pressed
    switch(e.keyCode){
        case 119	:	console.log('f8');	break;
        case 90	:	console.log('z');	break;	// z	// f8

    }
});
