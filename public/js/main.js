        $(document).ready(function(){
            
            $(document).scroll(function(){
                let height = $(window).height();
                let top = $(window).scrollTop();
                if ($(window).scrollTop() > 30){
                    $('header > section').fadeOut(0);
                    $('header').css('position','fixed');
                    $('.logo a').css('font-size','15px');
                    $('.navUL a').css('font-size','11px');
                }else{
                    $('header > section').fadeIn(0);
                    $('header').css('position','absolute');
                    $('.logo a').css('font-size','18px');
                    $('.navUL a').css('font-size','14px');
                }
                if ($(window).scrollTop() > 100){
                    $('.upArrow').fadeIn(0); 
                }else{
                    $('.upArrow').fadeOut(0); 
                }
                if ($(window).scrollTop() > 650){
                    $('.over').find('.row > .container > div > div').css('transform' , 'translateX(0)'); 
                }
                if ($(window).scrollTop() > 926){
                    $('.inventory').find('.container > .row > div').css('transform' , 'translateY(0)'); 
                }
//                alert($(window).scrollTop());
                
            });
            
            
             //menu click
            $('.navUL li a').click(function(){
                $('.navUL li a').removeClass('active');
                $(this).addClass('active');
            });
            
            //slider
            let slider = $('.slide > ul');
            let mytimeout;
            let nextSlide = (i) =>{
                let active = slider.find('li.active');
                let hGroup = active.find('h2');
                let index = active.index();
                let next;
                if (i != -1){
                    if (index == 4){
                        next = slider.find('li:first-child');
                    }else{
                        next = active.next();
                    }
                }else{
                    if (index == 0){
                        next = slider.find('li:last-child');
                    }else{
                        next = active.prev();
                    }
                }
                
                active.css('opacity','0');
                hGroup.removeClass('active');
                active.removeClass('active');
                var hGroupNext = next.find('h2');
                next.css('opacity','1');
                next.addClass('active');
                hGroupNext.addClass('active');
                mytimeout = 0;
            };
            let x = () => {
                mytimeout = setTimeout(function() {
                    nextSlide();
                    x();
                },6000);
            };            
            let liActive = slider.find('li.active');
            liActive.find('h2').addClass('active');
            x();
            $('.leftArrow').click(function(){
               nextSlide(-1); 
            });
            $('.rightArrow').click(function(){
               nextSlide(); 
            });
            
            $('.slide').mouseover(function(){
               clearTimeout(mytimeout); 
            });
            $('.slide').mouseleave(function(){
               x();
            });
            
            
           
        });