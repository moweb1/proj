$(function($) {

    /* References to elements */
    var $menuButton = $('#menu-toggle-button');
    var $navbarLinks = $('#navbar-links');
    var $topBar = $('#top-bar');
    var $media = $('.media');
    var $overlay = $('.scroller-item::after');
    var $captions = $('.caption');
    var $body = $($('body')[0]);
    var $footer = $($("footer")[0]);

    /* Toggle menu-active mode */
    $menuButton.on('click', () => {
        $navbarLinks.toggleClass('menu-active');
        $menuButton.toggleClass('menu-active');
        $topBar.toggleClass('menu-active');
        $body.toggleClass('menu-active');
        $footer.toggleClass('menu-active');
    })

    /* Set event listeners to automatically play videos on hover */
    $.each($media, function(index,item) {
        $(item).on('mouseover', () => {
            item.play();
        });
        $($captions[index]).on('mouseover', () => {
            item.play();
        });
        $(item).on('mouseout', () => {
            item.pause();
            item.currentTime = 0;
        });
        $($captions[index]).on('mouseout', () => {
            item.pause();
            item.currentTime = 0;
        });
    });

});