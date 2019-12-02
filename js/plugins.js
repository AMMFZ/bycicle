$(document).ready(function() {
    'use strict';
    // Scroll_top_show_hidden
    $(window).scroll(function(){
        var window_scroll = $(this).scrollTop();
        if(window_scroll > 500){
            $('.scroll_top').css('left','15px');
            $('header nav ul li a[data-value="home"]').removeClass('active');
        }else{
            $('.scroll_top').css('left','-1000px');
            $('header nav ul li a[data-value="home"]').addClass('active');
        }
    });
    // Scroll_top_Move_top
    $('.scroll_top').on('click', function(){
        $('html,body').animate({
            scrollTop: $('#home').offset().top
        },1000);
    });
    // smooth_scroll
    $('header nav ul li a').click(function(){
        var section_id = $(this).data('value');
        //console.log(section_id);
        $('html,body').animate({
            scrollTop: ($('#'+section_id).offset().top) - 5
        },1000);
    });
    // using Owl_Carousel plugin for testimonials
    $("#owl_carousel").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        pagination: true, //for dots
        navigation: false, //for prev and next
        items : 1,
        itemsDesktop : [1199,1], // this mean when the width become 1199px it will be just 3 items at one time(responsive)
        itemsDesktopSmall : [979,1], // this mean when the width become 979px it will be just 3 items at one time(responsive)
        itemsTablet : [768,1],
    });
    // now we will [Hide] placeholder when -focus- and [Restore] when -blur-
    var placeAttr = '';
    $('[placeholder]').focus(function(){
       placeAttr = $(this).attr('placeholder');
       $(this).attr('placeholder', '');
    }).blur(function(){
        $(this).attr('placeholder',placeAttr);
    });
    // Animate All Website Sections
    $(window).on('scroll', function(){
        var win_scroll = $(this).scrollTop();

        var about = $('#about').offset().top;
        var work_frow = $('#work .f_row').offset().top;
        var work_srow = $('#work .s_row').offset().top;
        var work_trow = $('#work .t_row').offset().top;
        var shop = $('#shop').offset().top;
        var discover = $('#discover').offset().top;
        var contact = $('#contact').offset().top;
        // Animate_about_section
        if(win_scroll > about - 100){
            $('#about img').css({'transform':'scale(1)'});
            $('#about h3').css({'transform': 'translateX(0px)','opacity':'1'});
            $('#about p').css({'transform':'scale(1)'});
        }else{
            $('#about img').css({'transform':'scale(0)',}); 
            $('#about h3').css({'transform': 'translateX(-150px)','opacity':'0'});
            $('#about p').css({'transform':'scale(0)'});
        }
        // Animate_Work-Frow_section
        if(win_scroll > work_frow - 100){
            $('#work .f_row .sec-left img.icon').css({'transform':'translate(-50%,-50%)'});
            $('#work .f_row .sec-right .right_top img').css({'transform':'scale(1)'});
            $('#work .f_row .sec-right h4').css({'transform':'translateY(0px)','opacity':'1'});
            $('#work .f_row .sec-right p').css({'transform':'translateY(0px)','opacity':'1'});
        }else{
            $('#work .f_row .sec-left img.icon').css({'transform':'translate(-1000px,-50%)',}); 
            $('#work .f_row .sec-right .right_top img').css({'transform':'scale(0)'});
            $('#work .f_row .sec-right h4').css({'transform':'translateY(30px)','opacity':'0'});
            $('#work .f_row .sec-right p').css({'transform':'translateY(30px)','opacity':'0'});
        }
        // Animate_Work-Srow_section
        if(win_scroll > work_srow - 200){
            $('#work .s_row .sec-right img.icon').css({'transform':'translate(-50%,-50%)'});
            $('#work .s_row .sec-left .left_top img').css({'transform':'scale(1)'});
            $('#work .s_row .sec-left h4').css({'transform':'translateY(0px)','opacity':'1'});
            $('#work .s_row .sec-left p').css({'transform':'translateY(0px)','opacity':'1'});
        }else{
            $('#work .s_row .sec-right img.icon').css({'transform':'translate(1000px,-50%)'});
            $('#work .s_row .sec-left .left_top img').css({'transform':'scale(0)'});
            $('#work .s_row .sec-left h4').css({'transform':'translateY(30px)','opacity':'0'});
            $('#work .s_row .sec-left p').css({'transform':'translateY(30px)','opacity':'0'});
        }
        // Animate_Work-Trow_section
        if(win_scroll > work_trow - 350){
            $('#work .t_row .sec_left img.logo').css({'transform':'translate(-50%,-50%)'});
            $('#work .t_row .sec_middle .mid_top img').css({'transform':'scale(1)'});
            $('#work .t_row .sec_middle h4').css({'transform':'translateY(0px)','opacity':'1'});
            $('#work .t_row .sec_middle p').css({'transform':'translateY(0px)','opacity':'1'});
        }else{
            $('#work .t_row .sec_left img.logo').css({'transform':'translate(-1000px,-50%)'});
            $('#work .t_row .sec_middle .mid_top img').css({'transform':'scale(0)'});
            $('#work .t_row .sec_middle h4').css({'transform':'translateY(30px)','opacity':'0'});
            $('#work .t_row .sec_middle p').css({'transform':'translateY(30px)','opacity':'0'});
        }
        // Animate_shop_section
        if(win_scroll > shop - 400){
            $('#shop .row').css({'transform':'scale(1)'});
        }else{
            $('#shop .row').css({'transform':'scale(.8)',}); 
        }
        // Animate_discover_section
        if(win_scroll > discover - 650){
            $('#discover button').css({'transform':'rotate(0deg) scale(1)'});
        }else{
            $('#discover button').css({'transform':'rotate(100deg) scale(0)'}); 
        }
        // Animate_Contact & Footer_section
        if(win_scroll > contact - 800){
            $('#contact input').css({'transform':'translateX(0px)','opacity':'1'});
            $('#contact button').css({'transform':'translateX(0px)','opacity':'1'});

            $('#footer .footer_left').css({'transform':'translateX(0px)','opacity':'1'});
            $('#footer .footer_right').css({'transform':'translateX(0px)','opacity':'1'});
            $('#footer .footer_middle a').css({'transform':'scale(1)'});
            $('#footer .footer_middle a').hover(function(){
                $(this).css({'transform':'scale(1.2)','transition-delay':'0s'});
            }, function(){
                $(this).css({'transform':'scale(1)','transition-delay':'0s'});
            });
        }else{
            $('#contact input').css({'transform':'translateX(-100px)','opacity':'0'});
            $('#contact button').css({'transform':'translateX(100px)','opacity':'0'});

            $('#footer .footer_left').css({'transform':'translateX(-1000px)','opacity':'0'});
            $('#footer .footer_right').css({'transform':'translateX(1000px)','opacity':'0'});

            $('#footer .footer_middle a').css({'transform':'scale(0)'});
            $('#footer .footer_middle a#first').css({'transition-delay':'.2s'});
            $('#footer .footer_middle a#second').css({'transition-delay':'.4s'});
            $('#footer .footer_middle a#third').css({'transition-delay':'.6s'});
        }
    });
});