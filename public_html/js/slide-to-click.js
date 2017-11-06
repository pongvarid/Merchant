(function ($) {
    $.fn.slideToClick = function () {
        $(this).each(function () {
            var button = $(this);
            button.css({
                width: '0',
                height: '0',
                overflow: 'hidden',
                visibility: 'hidden',
                padding: '0',
                margin: '0'
            });
            var value = $(this).html();
            if(button[0].tagname == 'INPUT') value = $(this).val();
            var sliderContainer = $('<div class="slide-to-click-slider-container">' + value + '</div>');
            var slider = $('<div class="slide-to-click-slider">&#10095;</div>');
            var dragging = false;
            var offset = 0;
            slider.on('mousedown', function(e){
                dragging = true;
                offset = e.pageX - slider.position().left;
            });
            $(document.body).on('mouseup', function(){
                dragging = false;
                slider.css('left', '2px');
            });
            $(document.body).on("mousemove", function(e) {
                if (dragging) {
                    var measure = e.pageX - offset;
                    if(measure < 2) measure = 2;
                    if(measure + slider.width() > sliderContainer.width() - 5){
                        slider.css('left', '2px');
                        $(document.body).trigger('mouseup');
                        button.click();
                    }
                    else slider.css('left', measure + 'px');
                }
            });
            sliderContainer.prepend(slider);
            $(this).after(sliderContainer);
        });
    };
})(jQuery);

/* =============================================== created by giovazzz89 - http://giovannimuzzolini.com ================================================ */