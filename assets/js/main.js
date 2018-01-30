jQuery('.basket-tab').on("click", function () {
    var down = jQuery('.fa', this);
    var up = jQuery('.fa', this);
    console.log(down);
    console.log(up);
    if(down.attr("class").toString() === 'fa fa-angle-down') {
        down.removeClass('fa-angle-down').addClass('fa-angle-up');
    } else {
        up.removeClass('fa-angle-up').addClass('fa-angle-down');
    }
});

jQuery(".element-full img, .photo-modal").click(function(){
    var img = jQuery(this);
    var src = img.attr('src');
    var delay = 100;
    jQuery("body").append("<div class='popup'>"+
        "<div class='popup_bg'></div>"+
        "<img src='"+src+"' class='popup_img' />"+
        "</div>");
    jQuery(".popup").fadeIn(delay);
    jQuery(".popup_bg").click(function(){
        jQuery(".popup").fadeOut(delay);
        setTimeout(function() {
            jQuery(".popup").remove();
        }, delay);
    });
});

jQuery(".range-slider__range").mousemove(
    function (pos) {
        jQuery('.range-slider__value2').css('left',(pos.pageX - 432)+'px');
    }
).mouseleave(function() {
    jQuery('.range-slider__value2').fadeOut(300);
    jQuery(this).blur();
});

var rangeSlider = function(){
    var slider = jQuery('.range-slider'),
        range = jQuery('.range-slider__range'),
        value = jQuery('.range-slider__value');
        value2 = jQuery('.range-slider__value2');

    range.focus(function() {
        value2.fadeIn(300);
    });

    slider.each(function(){
        var data;
        value2.each(function(){
            var value = jQuery(this).prev().attr('value');
            console.log(value)
            if(value == 0) {
                data = '0 - 1 мес.';
            } else if(value == 1) {
                data = '1 - 2 года';
            } else if(value == 2) {
                data = '3 - 4 лет';
            } else if(value == 3) {
                data = '6 - 7 лет';
            }
            jQuery(this).html(data);
        });
        value.each(function(){
            var value = jQuery(this).prev().attr('value');
            if(value == 0) {
                data = '0 - 1 мес.';
            } else if(value == 1) {
                data = '1 - 2 года';
            } else if(value == 2) {
                data = '3 - 4 лет';
            } else if(value == 3) {
                data = '6 - 7 лет';
            }
            jQuery(this).html(data);
        });

        range.on('input', function(){
            if(this.value == 0) {
                data = '0 - 1 мес.';
            } else if(this.value == 1) {
                data = '1 - 2 года';
            } else if(this.value == 2) {
                data = '3 - 4 лет';
            } else if(this.value == 3) {
                data = '6 - 7 лет';
            }
            jQuery(value, this).html(data);
            jQuery(value2, this).html(data);
        });
    });
};
rangeSlider();

// Owl carousel
$(document).ready(function(){
    if(owlCarousel) {
        $(".profile-gallery").owlCarousel({
            center: true,
            items: 2,
            loop: true,
            nav: false,
            dots: false,
            margin: 20,
            responsive:{
                600:{
                    items:4
                }
            }
        });
        $(".feed-gallery").owlCarousel({
            items: 3,
            loop: false,
            nav: false,
            dots: false,
            margin: 20,
            responsive:{
                600:{
                    items:4
                }
            }
        });
    }
});

//video
$(document).ready(function($){
    var videoBlock = $('.video-block');
    videoBlock.on('click', function () {
        var vid = $('.tab-video', this);
        if (vid.get(0).paused) {
            vid[0].play();
            $(this).removeClass('paused');
        } else {
            vid[0].pause();
            $(this).addClass('paused');
        };
    })
});

//star
$(document).ready(function($){
    var star = $('.star-icon');
    star.mousemove(function () {
        $(this).prevAll().addClass('icon-active');
        $(this).addClass('icon-active');
    }).mouseleave(function () {
        $(this).prevAll().removeClass('icon-active');
        $(this).removeClass('icon-active');
    });
});
//star
$(document).ready(function($){
    var point = $('.city-container .point');
    point.on('click', function () {
        var pointLeft = $(this).position().left - 130;
        var pointTop = $(this).position().top - 215;
        var city = $(this).prev();

        city.css({top: pointTop, left: pointLeft});
        if(city.attr('class').toString() == 'city active') {
            city.removeClass('active');
        } else {
            city.addClass('active');
        }
    })

});
//article-collapse
$(document).ready(function($){
    $('.article-info .read-more').on('click', function (event) {
        event.preventDefault();
        var collapseBox = $(this).parent().prev();
        if(collapseBox.attr('class').indexOf('hide-collapse') > -1) {
            collapseBox.removeClass('hide-collapse');
        } else {
            collapseBox.addClass('hide-collapse');
        }
    })
});