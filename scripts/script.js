$(function($) {

    /* References to elements */
    var $menuButton = $('#menu-toggle-button');
    var $navbarLinks = $('#navbar-links');
    var $topBar = $('#top-bar');
    var $media = $('.media');
    var $scrollerItem = $('.scroller-item');
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

    /* Dim unhovered items */
    $.each($scrollerItem, function(index,item) {
        $(item).on('mouseover', ()=> {
            $.each($scrollerItem, function(index2, item2) {
                if (index2!=index) {
                    $(item2).css('opacity',0.8);
                }
            });
        });
        $(item).on('mouseout', ()=> {
            $.each($scrollerItem, function(index2, item2) {
                if (index2!=index) {
                    $(item2).css('opacity',1);
                }
            });
        });
    });

});
