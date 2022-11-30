jQuery(function ($) {
    'use strict';



    // Navigation Scroll

    $(window).scroll(function (event) {

        Scroll();

    });



    $('.navbar-collapse ul li a').on('click', function () {

        $('html, body').animate({ scrollTop: $(this.hash).offset().top - 5 }, 1000);

        return false;

    });



    // User define function

    function Scroll() {

        var contentTop = [];

        var contentBottom = [];

        var winTop = $(window).scrollTop();

        var rangeTop = 200;

        var rangeBottom = 500;

        $('.navbar-collapse').find('.scroll a').each(function () {

            contentTop.push($($(this).attr('href')).offset().top);

            contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());

        })
       


        $.each(contentTop, function (i) {

            if (winTop > contentTop[i] - rangeTop) {

                $('.navbar-collapse li.scroll')

				.removeClass('active')

				.eq(i).addClass('active');

            }

        })

    };



    $('#tohash').on('click', function () {

        $('html, body').animate({ scrollTop: $(this.hash).offset().top - 5 }, 1000);

        return false;

    });



    // accordian

    $('.accordion-toggle').on('click', function () {

        $(this).closest('.panel-group').children().each(function () {

            $(this).find('>.panel-heading').removeClass('active');

        });



        $(this).closest('.panel-heading').toggleClass('active');

    });



    //Slider

    $(document).ready(function () {

        var time = 7; // time in seconds



        var $progressBar,

	      $bar,

	      $elem,

	      isPause,

	      tick,

	      percentTime;



        //Init the carousel

        $("#main-slider").find('.owl-carousel').owlCarousel({

            slideSpeed: 500,

            paginationSpeed: 500,

            singleItem: true,

            navigation: true,

            navigationText: [

			"<i class='fa fa-angle-left'></i>",

			"<i class='fa fa-angle-right'></i>"

			],

            afterInit: progressBar,

            afterMove: moved,

            startDragging: pauseOnDragging,

            //autoHeight : true,

            transitionStyle: "fadeUp"

        });



        //Init progressBar where elem is $("#owl-demo")

        function progressBar(elem) {

            $elem = elem;

            //build progress bar elements

            buildProgressBar();

            //start counting

            start();

        }



        //create div#progressBar and div#bar then append to $(".owl-carousel")

        function buildProgressBar() {

            $progressBar = $("<div>", {

                id: "progressBar"

            });

            $bar = $("<div>", {

                id: "bar"

            });

            $progressBar.append($bar).appendTo($elem);

        }



        function start() {

            //reset timer

            percentTime = 0;

            isPause = false;

            //run interval every 0.01 second

            tick = setInterval(interval, 10);


        };



        function interval() {

            if (isPause === false) {

                percentTime += 1 / time;

                $bar.css({

                    width: percentTime + "%"

                });

                //if percentTime is equal or greater than 100

                if (percentTime >= 100) {

                    //slide to next item 

                    $elem.trigger('owl.next')

                }

            }

        }



        //pause while dragging 

        function pauseOnDragging() {

            isPause = true;

        }



        //moved callback

        function moved() {


            //clear interval

            clearTimeout(tick);

            //start again

            start();
            //alert('hola');

        }

    });



    //Initiat WOW JS

    new WOW().init();

    //smoothScroll

    smoothScroll.init();



    // portfolio filter

    jQuery(window).load(function () {
        'use strict';
        jQuery('#loading').hide();
        jQuery('#contentIsasystem').show();
        var $portfolio_selectors = $('.portfolio-filter >li>a');

        var $portfolio = $('.portfolio-items');

        $portfolio.isotope({

            itemSelector: '.portfolio-item',

            layoutMode: 'fitRows'

        });



        $portfolio_selectors.on('click', function () {

            $portfolio_selectors.removeClass('active');

            $(this).addClass('active');

            var selector = $(this).attr('data-filter');

            $portfolio.isotope({ filter: selector });

            return false;

        });

    });



    $(document).ready(function () {

        //Animated Progress

        $('.progress-bar').bind('inview', function (event, visible, visiblePartX, visiblePartY) {

            if (visible) {

                $(this).css('width', $(this).data('width') + '%');

                $(this).unbind('inview');

            }

        });



        //Animated Number

        $.fn.animateNumbers = function (stop, commas, duration, ease) {

            return this.each(function () {

                var $this = $(this);

                var start = parseInt($this.text().replace(/,/g, ""));

                commas = (commas === undefined) ? true : commas;

                $({ value: start }).animate({ value: stop }, {

                    duration: duration == undefined ? 1000 : duration,

                    easing: ease == undefined ? "swing" : ease,

                    step: function () {

                        $this.text(Math.floor(this.value));

                        if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); }

                    },

                    complete: function () {

                        if (parseInt($this.text()) !== stop) {

                            $this.text(stop);

                            if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); }

                        }

                    }

                });

            });

        };



        $('.animated-number').bind('inview', function (event, visible, visiblePartX, visiblePartY) {

            var $this = $(this);

            if (visible) {

                $this.animateNumbers($this.data('digit'), false, $this.data('duration'));

                $this.unbind('inview');

            }

        });

    });



    // Contact form

    var form = $('#main-contact-form');

    form.submit(function (event) {

        event.preventDefault();

        var form_status = $('<div class="form_status"></div>');

        $.ajax({           
            type: 'POST',
            url: $(this).attr('action'),

            data: $(this).serialize(),
            beforeSend: function () {

                form.prepend(form_status.html('<p><i class="fa fa-spinner fa-spin"></i> El correo se esta enviando...</p>').fadeIn());

            }

        }).done(function (data) {
            debugger;
            form_status.html('<p class="text-success">Gracias por escribirnos. Pronto nos pondremos en contacto con usted.</p>').delay(5000).fadeOut();
            $('#main-contact-form')[0].reset();
        });

    });



    //Pretty Photo

    $("a[rel^='prettyPhoto']").prettyPhoto({

        social_tools: false

    });



    //Google Map

    var latitude = $('#google-map').data('latitude');

    var longitude = $('#google-map').data('longitude');

    function initialize_map() {

        var myLatlng = new google.maps.LatLng(latitude, longitude);

        var mapOptions = {

            zoom: 14,

            scrollwheel: false,

            center: myLatlng

        };

        var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);

        var marker = new google.maps.Marker({

            position: myLatlng,

            map: map

        });

    }

    google.maps.event.addDomListener(window, 'load', initialize_map);



});



$(document).ready(function () {



    $("#hrfHome").click(function () {



        document.getElementById("element").click();

    });

    $("#hrfInicio").click(function () {



        document.getElementById("element").click();
        document.getElementById("imgInicio").className = "img-responsive animationImage";
    });

    $("#hrfService").click(function () {



        document.getElementById("element").click();

    });

    $("#subMenuDesSoft").click(function () {


        document.getElementById("imgDesSoft").className = "img-responsive enlaceconfondo2 animationImage";
        document.getElementById("element").click();

    });
    $("#subMenuSopAplic").click(function () {


        document.getElementById("imgSopAplic").className = "img-responsive enlaceconfondo2 animationImage";
        document.getElementById("element").click();

    });
    $("#subMenuDesWeb").click(function () {

        document.getElementById("imgIntra").className = "img-responsive enlaceconfondo2 animationImage";
        document.getElementById("imgAutoadmin").className = "img-responsive enlaceconfondo2 animationImage";
        document.getElementById("imgAdapta").className = "img-responsive enlaceconfondo2 animationImage";

        document.getElementById("element").click();

    });
    $("#subMenuTecn").click(function () {



        document.getElementById("element").click();

    });






    $("#hrfNosotros").click(function () {


        document.getElementById("work-somos").style.paddingTop = "0px";
        document.getElementById("work-prof").style.paddingTop = "0px";
        document.getElementById("element").click();

    });



    $("#hrfContacto").click(function () {


        document.getElementById("element").click();

    });


    //en Inicio***********************************************



//    $("#hrfService2").click(function () {


        
        //        document.getElementById("hrfServiceIni").click();

//    });


    $("#hrfNosotros2").click(function () {


        document.getElementById("work-somos").style.paddingTop = "0px";
        document.getElementById("work-prof").style.paddingTop = "0px";
        //document.getElementById("hrfNosotrosIni").click();


    });

//    $("#hrfContacto2").click(function () {



//        document.getElementById("hrfContactoIni").click();


//    });
    //*****************************************************
    $("#btnLeerFuturo").click(function () {

        document.getElementById("work-somos").style.paddingTop = "100px";
        document.getElementById("work-prof").style.paddingTop = "100px";
        document.getElementById("imgSomos").className = "animationFont enlaceconfondo2";
        document.getElementById("pSomos").className = "animationFont";



    });


    $("#btnPersAltam").click(function () {
        document.getElementById("work-somos").style.paddingTop = "100px";
        document.getElementById("work-prof").style.paddingTop = "100px";
        document.getElementById("imgProf").className = "animationFont enlaceconfondo2";
        document.getElementById("aProf").className = "animationFont";


    });

    $("#btnVermasOutSour").click(function () {

        document.getElementById("imgOut").className = "img-responsive enlaceconfondo2 animationImage";
      

    });
    $("#btnDisWeb").click(function () {

        document.getElementById("imgIntra").className = "img-responsive enlaceconfondo2 animationImage";
        document.getElementById("imgAutoadmin").className = "img-responsive enlaceconfondo2 animationImage";
        document.getElementById("imgAdapta").className = "img-responsive enlaceconfondo2 animationImage";
    });

    $("#btnDisWeb2").click(function () {

        document.getElementById("imgIntra").className = "img-responsive enlaceconfondo2 animationImage";
        document.getElementById("imgAutoadmin").className = "img-responsive enlaceconfondo2 animationImage";
        document.getElementById("imgAdapta").className = "img-responsive enlaceconfondo2 animationImage";
    });

    $("#btnDesSoft").click(function () {

        document.getElementById("imgDesSoft").className = "img-responsive enlaceconfondo2 animationImage";
      
    });

    $("#btnSopAplic").click(function () {

        document.getElementById("imgSopAplic").className = "img-responsive enlaceconfondo2 animationImage";

    });

  


    

});



/*var rotation = function () {
$("#imgSomos").rotate({
angle: 0,
animateTo: 360,
callback: rotation
});
}
rotation();*/

$(function () {

    $('a[href*=#work]').click(function () {

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
         && location.hostname == this.hostname) {

            var $target = $(this.hash);

            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');

            if ($target.length) {

                var targetOffset = $target.offset().top;

                $('html,body').animate({ scrollTop: targetOffset }, 1000);

                return false;

            }

        }

    });

});


