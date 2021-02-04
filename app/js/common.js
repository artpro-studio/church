window.onload = function(){
    setTimeout(function(){
        let arrIframe = document.querySelectorAll('iframe');
        arrIframe.forEach(forIframe => {
            let frameSrc = forIframe.getAttribute('data-src');
            forIframe.setAttribute('src', frameSrc);
        });
    },4000);
}

const images = document.querySelectorAll('img')
const itemsBg = document.querySelectorAll('.imgLoad')

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
}

function handlerImg(dataImg, observer){
    dataImg.forEach(forImg => {
        if(forImg.intersectionRatio > 0){
            loadImages(forImg.target, false);
        }
    })
}
function handlerBG(dataImg, observer){
    dataImg.forEach(forImg => {
        if(forImg.intersectionRatio > 0){
            loadImages(forImg.target, true);
        }
    })
}

function loadImages(imgage, type ){
    if(type == false){
        imgage.src = imgage.getAttribute('data-src');
    }
    if(type == true){
        imgage.style.backgroundImage = `url(${imgage.getAttribute('data-bg')}`
    }
}

const observer = new IntersectionObserver(handlerImg, options)
const observerBG = new IntersectionObserver(handlerBG, options)

images.forEach(img => {
    observer.observe(img)
})
itemsBg.forEach(item => {
    observerBG.observe(item)
})


$(window).scroll(function (){
    let topScroll = $(window).scrollTop();
    if(topScroll > 50){
       $('.header').addClass('active');
    }else{
        $('.header').removeClass('active');
    }
})
$(document).ready(function (){
    $('.header__burger').on('click',function (e){
        e.preventDefault();
        $('.mobile_menu').addClass('active');
    });
    $('.mobile_menu__close').on('click',function (e){
        e.preventDefault();
        $('.mobile_menu').removeClass('active');
    });
    $('.about .item_sliders').slick({
        prevArrow: '.slider_nav .prev',
        nextArrow: '.slider_nav .next',
    });
    $('.newsBlock .sliders').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        appendDots: '.newsBlock .dots',
        arrows: false,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll:2,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1,
                }
            }
        ]
    });

    $('.newsBlock2 .sliders').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        appendDots: '.newsBlock2 .dots',
        arrows: false,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll:2,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1,
                }
            }
        ]
    });

    $('.detail_news__photo').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        arrows:false,
        dots:true,
        appendDots: '.detail_news__dots',
        infinite:false,
        responsive: [
            {
                breakpoint: 650,
                settings: 'unslick'
            }
        ]
    });

    $('.gallery__slider').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        nextArrow: $('.gallery_next'),
        prevArrow: $('.gallery_prev'),
        appendDots: '.gallery__dots',
        arrows: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll:2,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll:1,
                }
            }
        ]
    });
    $('.tab').on('click', function (e){
        console.log('asdasd');
        let src = $(this).attr('data-src');
        $('.panorama').attr('src', src);
        $('.panorama').attr('data-src', src);
    });

    $('.panorama').paver();


})
