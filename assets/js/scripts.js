$(window).scroll(function () {
    if ($(window).scrollTop() === 0) {
        $('nav.navbar').css('height', '6rem')
        $('nav.navbar').css('background-color', '#1b2033')
        $('nav.navbar').css('box-shadow', '0 0 0 0 rgba(0, 0, 0, 0.2)')
    }
    else if ($(window).scrollTop() < 150) {
        $('nav.navbar').css('height', '5rem')
        $('nav.navbar').css('background-color', '#0b0f1e')
        $('nav.navbar').css('box-shadow', '0 4px 8px 0 rgba(0, 0, 0, 0.2)')
    }
    else {
        $('nav.navbar').css('height', '4rem')
        $('nav.navbar').css('background-color', '#0b0f1e')
        $('nav.navbar').css('box-shadow', '0 4px 8px 0 rgba(0, 0, 0, 0.2)')
    }
    console.log($(window).scrollTop());
});
