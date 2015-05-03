
var Page = (function() {

    var config = {
    $bookBlock : $( '#bb-bookblock' ),
    $navNext : $( '#bb-nav-next' ),
    $navPrev : $( '#bb-nav-prev' )
    },
    init = function() {
    config.$bookBlock.bookblock( {
    orientation : 'horizontal',
    speed : 700
    } );
    initEvents();
    },
    initEvents = function() {

    var $slides = config.$bookBlock.children();

    // add navigation events
    config.$navNext.on( 'click touchstart', function() {
    config.$bookBlock.bookblock( 'next' );
    return false;
    } );

    config.$navPrev.on( 'click touchstart', function() {
    config.$bookBlock.bookblock( 'prev' );
    return false;
    } );

    // add keyboard events
    $( document ).keydown( function(e) {
    var keyCode = e.keyCode || e.which,
    arrow = {
    left : 37,
    up : 38,
    right : 39,
    down : 40
    };

    switch (keyCode) {
    case arrow.up:
    config.$bookBlock.bookblock( 'prev' );
    e.preventDefault();
    break;
    case arrow.down:
    config.$bookBlock.bookblock( 'next' );
    e.preventDefault();
    break;
    }

    } );
    };

    return { init : init };

    })();