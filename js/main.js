// JavaScript to handle portfolio interaction
document.addEventListener('DOMContentLoaded', function() {
    // Swiper JS initialization
    var swiper = new Swiper('.swiper-container', {
        effect: 'slide',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // More JavaScript functionality here
});
