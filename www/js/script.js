$(document).ready(function() {
    $('.tiles').masonry({
        itemSelector: 'li',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
});