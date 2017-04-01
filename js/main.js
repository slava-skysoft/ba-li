$(document).on('ready', function(){
	$('.internet_slider').polygon({
		width: 150,
		height: 150,
		timer: 3000
	});

	$('.tv_slider').polygon({
		width: 150,
		height: 150,
		timer: 3000
	});

	$('.mobile_slider').polygon({
		width: 150,
		height: 150,
		timer: 3000
	});

	function setFooterPosition(){
		if($('.wrapper').height() < $(window).height()){
			$('footer').css({'position' : 'absolute', 'bottom': 0})
		}else{
			$('footer').css({'position' : 'static'});
		}
	}

	setFooterPosition()

$(window).on('resize', function(){
	setFooterPosition();
})

$('.block .button').on('click', function(){
	$('.wrapper .popup').fadeIn();
	$('.wrapper .popup-background').fadeIn();
	// alert()
})

$('.wrapper .popup-background, .close-popup').on('click', function(){
	$('.wrapper .popup').fadeOut();
	$('.wrapper .popup-background').fadeOut();
})

$('.button[data-source]').on('click', function(){
	var dataSource = $(this).attr('data-source');
	console.log(dataSource)
})



// accessibility

"use strict";
    jQuery(document).ready(function(){

        var html = jQuery("body > *:not('.as-container, meta, script, link, title, style')");
        var asContainer = jQuery('.as-container');

        var fontSizeIncrease = jQuery('button[value="increase"]');
        var fontSizeDecrease = jQuery('button[value="decrease"]');
        var fontSizeDefault = jQuery('button[value="font-size-default"]');
        var currentFontSize = $('body > div').css('font-size');

        var grayscale = jQuery('button[value="grayscale"]');
        var grayscaleDefault = jQuery('button[value="grayscale-default"]');

        var contrast = jQuery('button[value="contrast"]');
        var contrastDefault = jQuery('button[value="contrast-default"]');

        var sepia = jQuery('button[value="sepia"]');
        var sepiaDefault = jQuery('button[value="sepia-default"]');

        var invert = jQuery('button[value="invert"]');
        var invertDefault = jQuery('button[value="invert-default"]');


        var cursor = jQuery('button[value="cursor"]');
        var cursorDefault = jQuery('button[value="cursor-default"]');

        var links = jQuery('button[value="links"]');
        var linksDefault = jQuery('button[value="links-default"]');

        fontSizeIncrease.click(function(){
          var html = jQuery("html, p, li, a, span, input, label");
            var currentFontSize = html.css('font-size');
            if(parseInt(currentFontSize) < 25){
                html.css('font-size', parseInt(currentFontSize) + 1);
            }
        });

        fontSizeDefault.click(function(){
              html.css('font-size', '14px');
        });

        fontSizeDecrease.click(function(){
          var html = jQuery("html, p, li, a, span, input, label");
            var currentFontSize = html.css('font-size');
             if(parseInt(currentFontSize) > 10){
                html.css('font-size', parseInt(currentFontSize) - 1);
            }
        });

        var handicapIcon = jQuery('.handicap-icon');
        var asClose = jQuery('.as-close');

        handicapIcon.click(function(e){
            asContainer.css('display', 'block');
            asContainer.animate({'width' : '100%'}, 300);
        });

        asClose.click(function(){
            var asContainer = jQuery('.as-container');
            
            asContainer.animate({'width' : '0%'}, 300, function(){
                asContainer.css('display', 'none');
            });
        });

        function applyValuesToPage(){
            var array = ['grayscale', 'sepia', 'contrast', 'invert', 'cursor', 'highlight_links'];

            var i = 0;
            for(i; i < array.length; i++){
                var currentItemValue = localStorage.getItem(array[i]);
                if(currentItemValue == 'true'){
                     setFilter(array[i]);
                     makeButtonActive(array[i]);
                }else if(currentItemValue == 'yes'){
                    jQuery('a').addClass('hightlight-links');
                     makeButtonActive('links');
                }else if(currentItemValue == 'no'){
                     jQuery('a').removeClass('hightlight-links');
                     makeButtonUnActive('links');
                }
            }
        }

        applyValuesToPage();

        function makeButtonActive(filterName){
            jQuery('.as-container button[value="'  + filterName +  '"]').addClass('active-option');
        }

        function makeButtonUnActive(filterName){
            jQuery('.as-container button[value="'  + filterName +  '"]').removeClass('active-option');
        }

        function setFilter(filterName){
            var html = jQuery("body > *:not('.as-container, meta, script, link, title, style')");
                html.addClass(filterName);
            
            localStorage.setItem(filterName, 'true');
        }

        function removeFilter(filterName){
            var html = jQuery("body > *:not('.as-container, meta, script, link, title, style')");
                html.removeClass(filterName);
            localStorage.setItem(filterName, 'false');
        }

        grayscale.click(function(){
            setFilter('grayscale');
            makeButtonActive('grayscale');
        });

        grayscaleDefault.click(function(){
            removeFilter('grayscale');
            makeButtonUnActive('grayscale');
        });

        sepia.click(function(){
            setFilter('sepia');
            makeButtonActive('sepia');
        });

        sepiaDefault.click(function(){
            removeFilter('sepia');
            makeButtonUnActive('sepia');
        });

        contrast.click(function(){
            setFilter('contrast');
            makeButtonActive('contrast');
        });

        contrastDefault.click(function(){
            removeFilter('contrast');
            makeButtonUnActive('contrast');
        });

        invert.click(function(){
                setFilter('invert');
                makeButtonActive('invert');
        });

        invertDefault.click(function(){
            removeFilter('invert');
            makeButtonUnActive('invert');
        });

        cursor.click(function(){
            setFilter('cursor');
            makeButtonActive('cursor');
        });

        cursorDefault.click(function(){
            removeFilter('cursor');
            makeButtonUnActive('cursor');
        });

        links.click(function(){
            jQuery('a').addClass('hightlight-links');
            localStorage.setItem('highlight_links', 'yes')
            makeButtonActive('links');
        });

        linksDefault.click(function(){
            jQuery('a').removeClass('hightlight-links');
            localStorage.setItem('highlight_links', 'no')
            makeButtonUnActive('links');
        });

        if(jQuery('.field-name').length === 0){
            jQuery('.nothing-to-show').css('display', 'block');
        }

    });

	
})