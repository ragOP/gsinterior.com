function main(){!function(){"use strict";$("a.page-scroll").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=$(this.hash);if(a=a.length?a:$("[name="+this.hash.slice(1)+"]"),a.length)return $("html,body").animate({scrollTop:a.offset().top-40},900),!1}}),$(window).bind("scroll",function(){var a=$(window).height()-500;$(window).scrollTop()>a?$(".navbar-default").addClass("on"):$(".navbar-default").removeClass("on")}),$("body").scrollspy({target:".navbar-default",offset:80}),$(".navbar-nav li a").click(function(a){var b=$(".navbar-toggle").is(":visible");b&&$(".navbar-collapse").collapse("hide")}),$(window).load(function(){var a=$(".portfolio-items");a.isotope({filter:"*",animationOptions:{duration:750,easing:"linear",queue:!1}}),$(".cat a").click(function(){$(".cat .active").removeClass("active"),$(this).addClass("active");var b=$(this).attr("data-filter");return a.isotope({filter:b,animationOptions:{duration:750,easing:"linear",queue:!1}}),!1})}),$(".portfolio-item a").nivoLightbox({effect:"slideDown",keyboardNav:!0})}()}main();