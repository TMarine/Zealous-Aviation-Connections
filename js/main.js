/////////////////////navbar//////////////////////
$('[data-toggle=offcanvas]').click(function () {
    $('.row-offcanvas').toggleClass('active');
});


///////////////////////////
$("body").children().each(function() {
    document.body.innerHTML = document.body.innerHTML.replace(/\u2028/g, ' ');
});
///////////////////////////
$('.toggle-wrap').on('click', function () {
    $(this).toggleClass('active');
    $('aside').animate({width: 'toggle'}, 200);
});

$(function () {
    $(".favorite-item").click(function () {
        $(this).toggleClass("favorite-item-active");
    });
});



////////////////////////////////////////////one item slider//////////////////////////////
    $(document).ready(function(){
    $('.slick-carousel').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        infinite: false
    });
});
/////////////////////////////////////slider styles end///////////////////////////////////

/////////////////////////////////////////////////2row slider end/////////////////////////////////////////////
$(document).ready(function(){
    $('.slider-4st').slick({
        dots: false,
        arrows: true,
        nextArrow: '<div class="next"><i>Next</i></div>',
        prevArrow: '<div class="prev"><i>Prev</i></div>',
        infinite: false,
        speed: 300,
        slidesPerRow: 5,
        rows: 2,
        adaptiveHeight: true,
        //slidesToShow: 4,
        //slidesToScroll: 4,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    slidesPerRow: 1,
                    rows: 1,
                    adaptiveHeight: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,

                    slidesPerRow: 1,
                    slidesToScroll: 1,
                },
            },
        ],

    });
});
/////////////////////////////////////////////////2row slider end/////////////////////////////////////////////
$(() => {
    var createSlick = () => {
        let slider = $(".slider");

        slider.not('.slick-initialized').slick({
            autoplay: false,
            infinite: true,
            dots: true,
            margin: 29,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        adaptiveHeight: true,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
    }

    createSlick();

    $(window).on('resize orientationchange', createSlick);
})
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $("header").addClass("darkHeader");
    } else {
        $("header").removeClass("darkHeader");
    }
});













///////////////////////////

$(".custom-select").each(function () {
    var classes = $(this).attr("class"),
        id = $(this).attr("id"),
        name = $(this).attr("name");
    var template = '<div class="' + classes + '">';
    template +=
        '<span class="custom-select-trigger">' +
        $(this).attr("placeholder") +
        "</span>";
    template += '<div class="custom-options">';
    $(this)
        .find("option")
        .each(function () {
            template +=
                '<span class="custom-option ' +
                $(this).attr("class") +
                '" data-value="' +
                $(this).attr("value") +
                '">' +
                $(this).html() +
                "</span>";
        });
    template += "</div></div>";

    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
});
$(".custom-option:first-of-type").hover(
    function () {
        $(this)
            .parents(".custom-options")
            .addClass("option-hover");
    },
    function () {
        $(this)
            .parents(".custom-options")
            .removeClass("option-hover");
    }
);
$(".custom-select-trigger").on("click", function () {
    $("html").one("click", function () {
        $(".custom-select").removeClass("opened");
    });
    $(this)
        .parents(".custom-select")
        .toggleClass("opened");
    event.stopPropagation();
});
$(".custom-option").on("click", function () {
    $(this)
        .parents(".custom-select-wrapper")
        .find("select")
        .val($(this).data("value"));
    $(this)
        .parents(".custom-options")
        .find(".custom-option")
        .removeClass("selection");
    $(this).addClass("selection");
    $(this)
        .parents(".custom-select")
        .removeClass("opened");
    $(this)
        .parents(".custom-select")
        .find(".custom-select-trigger")
        .text($(this).text());
});
