function carousel(selector, data) {
    let element = document.querySelector(selector);
    data.forEach(function(d) {
        element.innerHTML += 
        `<a href="${d.link}" class="card-img"><img src="${d.attachment}" alt="${d.alt}" class="img-fluid"></a>`;
    });
    $(element).slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 5,
        arrows: true,
        speed:1000,
        adaptiveHeight: true,
        autoplaySpeed:1200,
        autoplay: true,

        responsive: [{
                breakpoint: 1300,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 630,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding:  '0px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '50px',
                    slidesToShow: 1
                }
            }
        ]
    });
}

carousel(".firstCarousel", teeshirt_women);
carousel(".secondCarousel", teeshirt_men);
carousel(".thirdCarousel", teeshirt_design)
