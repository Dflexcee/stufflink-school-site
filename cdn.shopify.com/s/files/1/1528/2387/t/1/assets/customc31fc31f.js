/*
Template: Logistic Pro - Transport & Cargo & Online Tracking & Booking & Logistics Services
Author: ScriptsBundle
Version: 3.1
Designed and Development by: ScriptsBundle
*/
/*
====================================
[ CSS TABLE CONTENT ]
------------------------------------
    1.0 -  Page preloader
	2.0 -  Sticky Sidebar
    3.0 -  Page Scrolling Plugin
	4.0 -  Counter FunFacts
	5.0 -  Parallax Scrolling
    6.0 -  Accordion Panels
	7.0 -  Revolution slider  Home Page
	8.0 -  Services Grid slider
    9.0 -  Blog Post slider
    10.0 -  Testimonial Slider
	11.0 -  Clients Grid Slider
    12.0 -  Mgnific Popup
-------------------------------------
[ END JQUERY TABLE CONTENT ]
=====================================
*/
jQuery(function($) {
    "use strict";
	
    $(window).scroll(function() {
      if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/ 
      {
        $('.transparent-header .navbar-default').addClass('opaque');
      } else {
        $('.transparent-header .navbar-default').removeClass('opaque');
      }
    });

	
	/* ======= Page Scrolling Plugin ======= */
    $('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 60
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

	
	/* ======= Counter FunFacts ======= */
           
    $('.statistic-percent').waypoint( function() {
      var e = $( this.element );   
      e.find('.percentfactor').delay(6000).countTo({
        from: 0,                 // number to begin counting
        to: e.attr('data-perc'),      
        speed: 1000,             // ms
        refreshInterval: 10
      });
    }, {
      offset: '95%',                 
      triggerOnce: true
    });

	/* ======= Accordion Panels  ======= */
	$( document ).delegate( '.accord-btn', 'click', function() {
		
      $(this)
      .toggleClass( 'active' )
      .next('.accord-content').slideToggle(300)
      ;
      
      return false;
    });
	
	
	/* ======= Sticky Menu  ======= */
	
    $(window).scroll(function(){
        if ($(window).scrollTop() > 60){
            $('#one-page .transparent  .navigation .navbar-default').addClass("navbar-fixed-top");
        }else{
            $('#one-page .transparent  .navigation .navbar-default').removeClass("navbar-fixed-top");
        }
    });
  
});

jQuery(function($) {
  $( document ).on( 'shopify:section:load', function( e ) {
  	if( $( e.target ).is( '.rev-section' ) )
    {
     	$( e.target ).find( '.rev_slider' ).trigger( 'install' ); 
    }
    else if( $( e.target ).is( '.services-section' ) )
    {
     	$( e.target ).find( '.owl-carousel' ).trigger( 'install' ); 
    }
    else if( $( e.target ).is( '.gallery-section' ) )
    {
     	$( e.target ).find( '.portfolio-grid' ).trigger( 'install' ); 
    }
    else if( $( e.target ).is( '.testimonials-section' ) )
    {
     	$( e.target ).find( '.testimonials' ).trigger( 'install' ); 
    }
    else if( $( e.target ).is( '.logo-section' ) )
    {
     	$( e.target ).find( '.logos' ).trigger( 'install' ); 
    }
    else if( $( e.target ).is( '.header-section' ) )
    {
      $( e.target ).find( '[data-hover="dropdown"]' ).dropdownhover(); 

      $( '.section-mega-menu [data-mega-item]' ).trigger( 'install' ); 
    }
    
    var eo = [
        '[id^="morphext-"] .text',  
        '[id*="map-"]>[id*="map-e-"]',
        '[data-sticky="true"]',
        '.posts-slider',
        '.tt-lightbox',
        '[data-slick]',
        '.blog-layout-masonry',
        '[data-fetch="scroll"]',
        '[data-mega-item]',
        '[data-wai]:not([data-wai="none"])'
        ]
    ;
    $( e.target ).find( eo.join(',') ).trigger( 'install' );
    $( e.target ).find( '#Collection [class*="blog-layout-"]' ).trigger( 'install-ratings' );
    
  } ).delegate( '.rev_slider', 'install', function() {
    var e = $( this );
    e.revolution({
      sliderType:"standard",
      sliderLayout: e.attr( 'data-strech' ) == "true" ? "fullwidth" : "auto",
      jsFileLocation: "",
      dottedOverlay: "none",
      delay: e.attr( 'data-speed' ) || 5000,
      navigation: {
        keyboardNavigation: "off",
        keyboard_direction: "horizontal",
        mouseScrollNavigation: "off",
        onHoverStop: "off",
        touch: {
          touchenabled: "on",
          swipe_threshold: 75,
          swipe_min_touches: 1,
          swipe_direction: "horizontal",
          drag_block_vertical: false
        },
        arrows: {
          style: "gyges",
          enable: true,
          hide_onmobile: false,
          hide_onleave: true,
          hide_delay: 200,
          hide_delay_mobile: 1200,
          tmp: '',
          left: {
            h_align: "left",
            v_align: "center",
            h_offset: 0,
            v_offset: 0
          },
          right: {
            h_align: "right",
            v_align: "center",
            h_offset: 0,
            v_offset: 0
          }
        },

        bullets: {
          enable: true,
          hide_onmobile: true,
          hide_under: 800,
          style: "hebe",
          hide_onleave: false,
          direction: "horizontal",
          h_align: "center",
          v_align: "bottom",
          h_offset: 0,
          v_offset: 30,
          space: 5,
          tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span><span class="tp-bullet-title"></span>'
        }
      },
      responsiveLevels: [1240, 1024, 778],
      visibilityLevels: [1240, 1024, 778],
      gridwidth: [1170, 1024, 778, 480],
      gridheight: [620, 768, 960, 720],
      lazyType: "none",
      parallax: {
        type: "scroll",
        origo: "slidercenter",
        speed: 1000,
        levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 100, 55],
        type: "scroll",
      },
      shadow: 0,
      spinner: "off",
      stopLoop: "on",
      stopAfterLoops: 0,
      stopAtSlide: -1,
      shuffle: "off",
      autoHeight: "off",
      fullScreenAutoWidth: "off",
      fullScreenAlignForce: "off",
      fullScreenOffsetContainer: "",
      fullScreenOffset: "0",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: false,
      fallbacks: {
        simplifyAll: "off",
        nextSlideOnWindowFocus: "off",
        disableFocusListener: false,
      }
    });
  } ).delegate( '.owl-carousel:not(.post-slider)', 'install', function() { 
    var e = $( this ),
    	w = e.attr( 'data-width' ) || 1
   	;
    w = Math.ceil( 12 / w );
    e.owlCarousel({
      navigation: true,
      pagination:false,
      autoPlay: 9000, //Set AutoPlay to 5 seconds
      navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      slideSpeed: 600,
      items : w,
      itemsDesktop : [1199,w],
      itemsDesktopSmall : [979,4],
      itemsTablet: [800,2],
      itemsMobile :	[479,1]
    });
  } ).delegate( '.portfolio-grid', 'install', function() {
    /* initialize shuffle plugin */
    var $grid = $( this );
  	if ($grid.length > 0) 
    {

      $grid.imagesLoaded( function() {
        $grid.shuffle({
          itemSelector: '.portfolio-item'
        });
      } );

      /* reshuffle when user clicks a filter item */
      $('#filter li').on('click', function(e) {
        e.preventDefault();

        // set active class
        $('#filter li').removeClass('active');
        $(this).addClass('active');

        // get group name from clicked item
        var groupName = $(this).attr('data-group');

        // reshuffle grid
        $grid.shuffle('shuffle', groupName);
      });
    }

  } ).delegate( '.testimonials', 'install', function() {
  	$( this ).owlCarousel({

        navigation: false, // Show next and prev buttons
        slideSpeed: 600,
        paginationSpeed: 700,
        singleItem: true,
        autoPlay: 5000,
		 navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		 pagination:true,
		 responsive:true
    });
  } ).delegate( '.logos', 'install', function() {
  	var e = $( this ),
    	w = e.attr( 'data-show' ) || 6
   	;
    e.owlCarousel({
	  navigation: true,
	  pagination:false,
      autoPlay: 5000, //Set AutoPlay to 5 seconds
  	  navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	  slideSpeed: 600,
      items : w,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,4],
	  itemsTablet: [800,2],
	  itemsMobile :	[479,1]
    });
  } ).delegate( '.post-slider', 'install', function() {
  	var e = $( this ),
    	w = e.attr( 'data-show' ) || 1
   	;
    e.owlCarousel({
	  navigation: true,
	  pagination:false,
      autoPlay: 5000, //Set AutoPlay to 5 seconds
  	  navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	  slideSpeed: 600,
      items : w,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1],
	  itemsTablet: [800,1],
	  itemsMobile :	[479,1]
    });
  } ).delegate( '[id^="morphext-"] .text', 'install', function() {
  		var e = $( this ),
        	animation = e.attr( 'data-animation' ) || 'fadeIn',
        	speed = e.attr( 'data-speed ' ) || 3000
        ;
    e.Morphext( {
      animation: animation,
      speed: speed
    } ); 
  }).delegate( '[id*="map-"]>[id*="map-e-"]', 'setup', function() {
    var m = $( this ).removeClass( 'hidden' ),
        mapOptions = {
          scrollwheel: eval( m.attr( 'data-scrollwheel' ) ),
          // How zoomed in you want the map to start at (always required)
          zoom: eval( m.attr( 'data-zoom' ) ),
          type: m.attr( 'data-type' ),

          // How you would like to style the map. 
          // This is where you would paste any style found on Snazzy Maps.
          styles: eval( $.trim( m.text() ) )
        },
        markerOptions = {
          icon: m.attr( 'data-marker_icon' ),
          title: m.attr( 'data-title' )
        }
    ;
    
    mapOptions.center = new google.maps.LatLng( m.attr( 'data-lat' ), m.attr( 'data-lng' ) );
    markerOptions.position = mapOptions.center;
    markerOptions.map = new google.maps.Map(m.get( 0 ), mapOptions);

    new google.maps.Marker( markerOptions );
    
  }).delegate( '[id*="map-"]>[id*="map-e-"]', 'install', function() {
  	var e = $( this );
    if( window.google )
    {
      e.trigger( 'setup' );
    }
    else
    {
      $.getScript( e.attr( 'data-js' ), function() {
        e.trigger( 'setup' );
      } );
    }
  }).delegate( '[data-sticky="true"]', 'install', function() {
    $( this ).theiaStickySidebar({
      additionalMarginTop: 80
    });  
  }).delegate( '.tt-lightbox', 'install', function() {
    $( this ).magnificPopup({
      type: 'image',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      fixedContentPos: false
    });  
  }).delegate( '[data-slick]', 'install', function() {
    $( this ).slick();
  }).delegate( '.blog-layout-masonry', 'install', function() {
    var e = $( this );
    e.imagesLoaded( function() {
      e.shuffle( { itemSelector: '[class*="col-"]' } );
    } );  
  }).delegate( '[data-fetch="scroll"]', 'install', function() {
    var e = $( this );
    $( e.attr( 'data-target' ) ).infinitescroll( {
      nextSelector: '[data-fetch="scroll"] .next a',
      navSelector: '[data-fetch="scroll"]',
      itemSelector: e.attr( 'data-item-selector' ),
      loading: {
        finishedMsg: '<em>' + e.attr( 'data-finish-msg' ) + '</em>',
      	msgText: '<em>' + e.attr( 'data-msg-text' ) + '</em>'
      }
    }, function( items, o, xhr ) {
      var sticky = o.contentSelector.closest( '[data-sticky="true"]' );
      sticky.length && sticky.find( '.theiaStickySidebar' ).css( 'position', 'static' );
      if( !o.contentSelector.hasClass( 'shuffle' ) )
      {
        return false;  
      }
      var items = $( items );
      items.imagesLoaded( function() {
        o.contentSelector.shuffle( 'appended', items );
      } );
      
    } );  
  }).delegate( '.section-mega-menu [data-mega-item]', 'install', function() {
    
    var handles = [],
    	mis = $( '.section-mega-menu [data-mega-item]' )
   	;
    
    mis.each( function() {
    	handles.push( $( this ).attr( 'data-mega-item' ) );
    });
    
    mis.each( function() {
        var e = $( this ),
            handle = e.attr( 'data-mega-item' )
        ;

        handle = handle.replace( location.origin, '' );

        !handle && ( handle = '/' );

        $( '#main-navigation>.nav>li' ).each( function() {

          var l = $( this ),
              a = l.find( 'a' ),
              u = a.attr( 'href' ),
              isdrop = l.find( 'ul.dropdown-menu' ).length == 1
          ;

          if( handle == u )
          {
            l.addClass( 'dropdown mega-menu' ).addClass( e.attr( 'data-pc' ) ).find( 'div.dropdown-menu' ).remove();
            e.clone().removeClass( 'hidden' ).removeAttr( 'data-mega-item' ).attr( 'style', l.attr( 'data-style' ) ).insertAfter( a );
            if( !isdrop )
            {
              a.addClass( 'dropdown-toggle' ).dropdownhover();
            }
          }
          else
          {
            if( $.inArray( u, handles ) == -1 )
            {
              l
              .removeClass( 'mega-menu custom-width' )
              .find( 'div.dropdown-menu' ).remove();
              
              
              if( !isdrop )
              {
                l.removeClass( 'dropdown' );
                a
                .removeClass( 'dropdown-toggle' )
                .off('mouseenter.bs.dropdownhover mouseleave.bs.dropdownhover')
                .removeData( 'bs.dropdownhover' );
                
              }
              
            }
          }
    } );
      
    } );
  }).delegate( '.advanced-filter', 'click', function( e ) {
    var el = $(this),
        elGroup = el.data('group'),
        elHandle = el.data('handle'),
        activeTagInGroup = $('.active-filter[data-group="'+ elGroup +'"]')
    ;
        // If the tag clicked is not already active and its group contains an active tag, we will swap tag within the group.
        if ( !el.hasClass('active-filter')  && activeTagInGroup.size() ) {
          e.preventDefault();
          location.href = location.href
            // swap tag
            .replace(activeTagInGroup.data('handle'), elHandle)
            // go back to page 1
            .replace(/(&page=\d+)|(page=\d+&)|(\?page=\d+$)/, '');
        }
  }).delegate( '[class*="blog-layout-"]', 'install-ratings', function() {
    if( window.SPR )
    {
      return SPR.registerCallbacks(), SPR.initRatingHandler(), SPR.initDomEls(), SPR.loadProducts(), SPR.loadBadges();
    }
  }).delegate( '[data-wai]:not([data-wai="none"])', 'install', function() {
   	var el = $( this );
    el.waypoint( function() {
      var e = $( this.element ),
          c = [ 'animated', e.attr( 'data-wai' ) ].join( ' ' )
      ;   
      e.addClass( c );
    }, {
      offset: el.attr( 'data-woffset' )
    } );
  });
  
  var ei = [
  	'.rev_slider',
    '.owl-carousel:not(.post-slider)',
    '.portfolio-grid',
    '.testimonials',
    '.logos',
    '[id^="morphext-"] .text',
    '[id*="map-"]>[id*="map-e-"]',
    '[data-sticky="true"]',
    '.post-slider',
    '.tt-lightbox',
    '[data-slick]',
    '.blog-layout-masonry',
    '[data-fetch="scroll"]',
    '[data-mega-item]',
    '[data-wai]:not([data-wai="none"])'
  ];
  $( ei.join( ',' ) ).trigger( 'install' );
    
});