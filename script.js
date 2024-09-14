window.onscroll = function() {
    let header = document.getElementById("header");
    let sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.project-item').forEach((item, index) => {
    item.addEventListener('click', function() {
        const dummyLinks = [
            'https://github.com/vanshbhardwaj911/CODSOFT_PYTHON/blob/main/CODSOFT_PYTHON/RANDOMPASSGEN.py',
            'https://vanshbhardwaj911.github.io/amazonclone',
            'https://vanshbhardwaj911.github.io/new-one/'
        ];
        const url = dummyLinks[index % dummyLinks.length];
        window.location.href = url;
    });
});

$(document).ready(function() {
    $(window).on('scroll', function() {
        $('.fade-in').each(function() {
            const position = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();
            if (scroll + windowHeight > position) {
                $(this).addClass('visible');
            }
        });
    });

    $('.project-item').hover(function() {
        $(this).animate({ marginTop: "-10px" }, 200);
    }, function() {
        $(this).animate({ marginTop: "0px" }, 200);
    });
});
