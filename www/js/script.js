$(document).ready(function() {
    $('body').css('background', '#f00');

    $('.gallery').masonry({
        itemSelector: 'li',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('body').style.backgroundColor = '#00f';
});