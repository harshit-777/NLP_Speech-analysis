// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


// place any jQuery/helper plugins in here, instead of separate, slower script files.

/*
 * jQuery Orbit Plugin 1.2.3
 * www.ZURB.com/playground
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

(function(d){d.fn.orbit=function(a){a=d.extend({animation:"horizontal-push",animationSpeed:600,timer:!0,advanceSpeed:4E3,pauseOnHover:!1,startClockOnMouseOut:!1,startClockOnMouseOutAfter:1E3,directionalNav:!0,captions:!0,captionAnimation:"fade",captionAnimationSpeed:600,bullets:!1,bulletThumbs:!1,bulletThumbLocation:"",afterSlideChange:function(){}},a);return this.each(function(){function q(){if(!a.timer||a.timer=="false")return!1;else r.is(":hidden")?s=setInterval(function(){l("next")},a.advanceSpeed):
(o=!0,x.removeClass("active"),s=setInterval(function(){var a="rotate("+m+"deg)";m+=2;t.css({"-webkit-transform":a,"-moz-transform":a,"-o-transform":a});m>180&&(t.addClass("move"),y.addClass("move"));m>360&&(t.removeClass("move"),y.removeClass("move"),m=0,l("next"))},a.advanceSpeed/180))}function n(){if(!a.timer||a.timer=="false")return!1;else o=!1,clearInterval(s),x.addClass("active")}function z(){if(!a.captions||a.captions=="false")return!1;else{var c=e.eq(b).data("caption");(_captionHTML=d(c).html())?
(j.attr("id",c).html(_captionHTML),a.captionAnimation=="none"&&j.show(),a.captionAnimation=="fade"&&j.fadeIn(a.captionAnimationSpeed),a.captionAnimation=="slideOpen"&&j.slideDown(a.captionAnimationSpeed)):(a.captionAnimation=="none"&&j.hide(),a.captionAnimation=="fade"&&j.fadeOut(a.captionAnimationSpeed),a.captionAnimation=="slideOpen"&&j.slideUp(a.captionAnimationSpeed))}}function A(){if(a.bullets)C.children("li").removeClass("active").eq(b).addClass("active");else return!1}function l(c){function d(){e.eq(f).css({"z-index":1});
u=!1;a.afterSlideChange.call(this)}var f=b,g=c;if(f==g)return!1;if(e.length=="1")return!1;u||(u=!0,c=="next"?(b++,b==p&&(b=0)):c=="prev"?(b--,b<0&&(b=p-1)):(b=c,f<b?g="next":f>b&&(g="prev")),A(),e.eq(f).css({"z-index":2}),a.animation=="fade"&&e.eq(b).css({opacity:0,"z-index":3}).animate({opacity:1},a.animationSpeed,d),a.animation=="horizontal-slide"&&(g=="next"&&e.eq(b).css({left:h,"z-index":3}).animate({left:0},a.animationSpeed,d),g=="prev"&&e.eq(b).css({left:-h,"z-index":3}).animate({left:0},a.animationSpeed,
d)),a.animation=="vertical-slide"&&(g=="prev"&&e.eq(b).css({top:v,"z-index":3}).animate({top:0},a.animationSpeed,d),g=="next"&&e.eq(b).css({top:-v,"z-index":3}).animate({top:0},a.animationSpeed,d)),a.animation=="horizontal-push"&&(g=="next"&&(e.eq(b).css({left:h,"z-index":3}).animate({left:0},a.animationSpeed,d),e.eq(f).animate({left:-h},a.animationSpeed)),g=="prev"&&(e.eq(b).css({left:-h,"z-index":3}).animate({left:0},a.animationSpeed,d),e.eq(f).animate({left:h},a.animationSpeed))),z())}var b=0,
p=0,h,v,u,f=d(this).addClass("orbit"),c=f.wrap('<div class="orbit-wrapper" />').parent();f.add(h).width("1px").height("1px");var e=f.children("img, a, div");e.each(function(){var a=d(this),b=a.width(),a=a.height();b>f.width()&&(f.add(c).width(b),h=f.width());a>f.height()&&(f.add(c).height(a),v=f.height());p++});if(e.length==1)a.directionalNav=!1,a.timer=!1,a.bullets=!1;e.eq(b).css({"z-index":3}).fadeIn(function(){e.css({display:"block"})});if(a.timer){c.append('<div class="timer"><span class="mask"><span class="rotator"></span></span><span class="pause"></span></div>');
var r=c.children("div.timer"),o;if(r.length!=0){var t=d("div.timer span.rotator"),y=d("div.timer span.mask"),x=d("div.timer span.pause"),m=0,s;q();r.click(function(){o?n():q()});if(a.startClockOnMouseOut){var B;c.mouseleave(function(){B=setTimeout(function(){o||q()},a.startClockOnMouseOutAfter)});c.mouseenter(function(){clearTimeout(B)})}}}a.pauseOnHover&&c.mouseenter(function(){n()});if(a.captions){c.append('<div class="orbit-caption"></div>');var j=c.children(".orbit-caption");z()}if(a.directionalNav){if(a.directionalNav==
"false")return!1;c.append('<div class="slider-nav"><span class="right">Right</span><span class="left">Left</span></div>');var k=c.children("div.slider-nav").children("span.left"),w=c.children("div.slider-nav").children("span.right");k.click(function(){n();l("prev")});w.click(function(){n();l("next")})}if(a.bullets){c.append('<ul class="orbit-bullets"></ul>');var C=c.children("ul.orbit-bullets");for(i=0;i<p;i++){k=d("<li>"+(i+1)+"</li>");if(a.bulletThumbs&&(w=e.eq(i).data("thumb")))k=d('<li class="has-thumb">'+
i+"</li>"),k.css({background:"url("+a.bulletThumbLocation+w+") no-repeat"});c.children("ul.orbit-bullets").append(k);k.data("index",i);k.click(function(){n();l(d(this).data("index"))})}A()}})}})(jQuery);

/*!
 * webTicker 1.3
 * Examples and documentation at: 
 * http://jonmifsud.com
 * 2011 Jonathan Mifsud
 * Version: 1.2 (26-JUNE-2011)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Requires:
 * jQuery v1.4.2 or later
 * 
 */
(function( $ ){

  var globalSettings = new Array();

  var methods = {
    init : function( settings ) { // THIS 
		settings = jQuery.extend({
			travelocity: 0.05,
			direction: 1,
			moving: true
		}, settings);
		globalSettings[jQuery(this).attr('id')] = settings;
		return this.each(function(){
				var $strip = jQuery(this);
				$strip.addClass("newsticker")
				var stripWidth = 0;
				var $mask = $strip.wrap("<div class='mask'></div>");
				$mask.after("<span class='tickeroverlay-left'>&nbsp;</span><span class='tickeroverlay-right'>&nbsp;</span>")
				var $tickercontainer = $strip.parent().wrap("<div class='tickercontainer'></div>");	
				$strip.find("li").each(function(i){
					stripWidth += jQuery(this, i).outerWidth(true);
				});
				$strip.width(stripWidth+200);//20 used for ie9 fix					
				function scrollnews(spazio, tempo){
					if (settings.direction == 1)
						$strip.animate({left: '-='+ spazio}, tempo, "linear", function(){
							$strip.children().last().after($strip.children().first());
							var first = $strip.children().first();
							var width = first.outerWidth(true);
							var defTiming = width/settings.travelocity;
						//$strip.css("left", left);
							$strip.css("left", '0');
							scrollnews(width, defTiming);
						});
					else
						$strip.animate({right: '-='+ spazio}, tempo, "linear", function(){
							$strip.children().last().after($strip.children().first());
							var first = $strip.children().first();
							var width = first.outerWidth(true);
							var defTiming = width/settings.travelocity;
							//$strip.css("left", left);
							$strip.css("right", '0');
							scrollnews(width, defTiming);
						});
				}

				var first = $strip.children().first();
				var travel = first.outerWidth(true);
				var timing = travel/settings.travelocity;
				scrollnews(travel, timing);				
				$strip.hover(function(){
					jQuery(this).stop();
				},
				function(){
					if (globalSettings[jQuery(this).attr('id')].moving){
						var offset = jQuery(this).offset();
						var first = $strip.children().first();
						var width = first.outerWidth(true);
						var residualSpace;
						if (settings.direction == 1) residualSpace = parseInt(jQuery(this).css('left').replace('px',''))+ width;
						else residualSpace = parseInt(jQuery(this).css('right').replace('px',''))+ width;
						var residualTime = residualSpace/settings.travelocity;
						scrollnews(residualSpace, residualTime);						
					}
				});			
		});
	},
    stop : function( ) { 
		if (globalSettings[jQuery(this).attr('id')].moving){
			globalSettings[jQuery(this).attr('id')].moving = false;
			return this.each(function(){
				jQuery(this).stop();
			});
		}
	},
    cont : function( ) { // GOOD 	
		if (!(globalSettings[jQuery(this).attr('id')].moving)){
			globalSettings[jQuery(this).attr('id')].moving = true;
			var settings = globalSettings[jQuery(this).attr('id')];
			return this.each(function(){
				var $strip = jQuery(this);
					function scrollnews(spazio, tempo){
							if (settings.direction == 1)
								$strip.animate({left: '-='+ spazio}, tempo, "linear", function(){
									$strip.children().last().after($strip.children().first());
									var first = $strip.children().first();
									var width = first.outerWidth(true);
									var defTiming = width/settings.travelocity;
								//$strip.css("left", left);
									$strip.css("left", '0');
									scrollnews(width, defTiming);
								});
							else
								$strip.animate({right: '-='+ spazio}, tempo, "linear", function(){
									$strip.children().last().after($strip.children().first());
									var first = $strip.children().first();
									var width = first.outerWidth(true);
									var defTiming = width/settings.travelocity;
									//$strip.css("left", left);
									$strip.css("right", '0');
									scrollnews(width, defTiming);
								});

					}
						var offset = jQuery(this).offset();
						var first = $strip.children().first();
						var width = first.outerWidth(true);
						var residualSpace;
						if (settings.direction == 1) residualSpace = parseInt(jQuery(this).css('left').replace('px',''))+ width;
						else residualSpace = parseInt(jQuery(this).css('right').replace('px',''))+ width;
						var residualTime = residualSpace/settings.travelocity;
						scrollnews(residualSpace, residualTime);

			});	
		}
	}
  };

  $.fn.webTicker = function( method ) {
    
    // Method calling logic
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.webTicker' );
    }    
  
  };

})( jQuery );