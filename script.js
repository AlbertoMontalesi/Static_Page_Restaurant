$(document).ready(function () {
    $('a[href^="#"]').click(function (e) {
        var target = $(this).attr('href');
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    })
}); //end doc.ready