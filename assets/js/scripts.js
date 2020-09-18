var lastScrollTop = 0;
$(window).scroll(function () {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
        if ($(window).scrollTop() === 0) {
            $('nav.navbar').css({ height: '6rem', transition: 'height 0.3s' })
            $('nav.navbar').css('background-color', '#1b2033')
            $('.dropdown-menu').css('background-color', '#1b2033');
            $('nav.navbar').css('box-shadow', '0 0 0 0 rgba(0, 0, 0, 0.2)')
        }
        else if ($(window).scrollTop() < 100) {
            $('nav.navbar').css({ height: '5rem', transition: 'height 0.3s' })
            $('nav.navbar').css('background-color', '#0b0f1e')
            $('.dropdown-menu').css('background-color', '#0b0f1e');
            $('nav.navbar').css('box-shadow', '0 4px 8px 0 rgba(0, 0, 0, 0.2)')
        }
        else if ($(window).scrollTop() < 200) {
            $('nav.navbar').css({ height: '4rem', transition: 'height 0.3s' })
            $('nav.navbar').css('background-color', '#0b0f1e')
            $('.dropdown-menu').css('background-color', '#0b0f1e');
            $('nav.navbar').css('box-shadow', '0 4px 8px 0 rgba(0, 0, 0, 0.2)')
        }
        else {
            $('nav.navbar').css({ height: '4rem', transition: 'height 0.3s' })
            $('nav.navbar').css('background-color', '#0b0f1e')
            $('.dropdown-menu').css('background-color', '#0b0f1e');
            $('nav.navbar').css('box-shadow', '0 4px 8px 0 rgba(0, 0, 0, 0.2)')
            $('nav.navbar').css({ transition: 'transform 0.5s', transform: 'translate3d(0, -100%, 0)' })
        }
    } else {
        if ($(window).scrollTop() === 0) {
            $('nav.navbar').css({ height: '6rem', transition: 'height 0.3s' })
            $('nav.navbar').css('background-color', '#1b2033')
            $('.dropdown-menu').css('background-color', '#1b2033');
            $('nav.navbar').css('box-shadow', '0 0 0 0 rgba(0, 0, 0, 0.2)')
        }
        else if ($(window).scrollTop() < 100) {
            $('nav.navbar').css({ height: '5rem', transition: 'height 0.3s' })
            $('nav.navbar').css('background-color', '#0b0f1e')
            $('.dropdown-menu').css('background-color', '#0b0f1e');
            $('nav.navbar').css('box-shadow', '0 4px 8px 0 rgba(0, 0, 0, 0.2)')
        }
        else if ($(window).scrollTop() < 200) {
            $('nav.navbar').css({ height: '4rem', transition: 'height 0.3s' })
            $('nav.navbar').css('background-color', '#0b0f1e')
            $('.dropdown-menu').css('background-color', '#0b0f1e');
            $('nav.navbar').css('box-shadow', '0 4px 8px 0 rgba(0, 0, 0, 0.2)')
        }
        else {
            $('nav.navbar').css({ transition: 'transform 0.5s', transform: 'translate3d(0, 0, 0)' })
        }
    }
    lastScrollTop = st;
});

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $('.navbar-toggler').click(function () {
        if ($('.navbar-toggler').attr("aria-expanded") == "true") {
            $('.dropdown-menu').slideUp(500);
        }
        else {
            $('.dropdown-menu').slideDown(500);
        }
        if ($(window).scrollTop() == 0) {
            $('.dropdown-menu').css('background-color', '#1b2033');
            $('html').off('scroll mousewheel touchmove');
        }
        else {
            $('.dropdown-menu').css('background-color', '#0b0f1e');
            $('html').off('scroll mousewheel touchmove');
        }
    });
    $('.navbar').on('hidden.bs.dropdown', function () {
        $('.dropdown-menu-behind').css('display', 'none');
        $('.dropdown-menu').slideUp(500);
    })
    $('.navbar').on('shown.bs.dropdown', function () {
        $('.dropdown-menu-behind').css('display', 'block');
    })
});