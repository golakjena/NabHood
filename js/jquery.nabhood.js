;(function($){
	var device = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

	function fixHeader(){
		if($("body").hasClass("home")){
			$(window).on("scroll", function(){
				var topScroll = $(this).scrollTop();
				if(topScroll > 20){
					$(".header").addClass("fixHeader");
				}
				else{
					$(".header").removeClass("fixHeader");	
				}
			});
		}
	}

	function bannerText(){
		$(".bannerInner h2").css({opacity:0});
		$(".bannerInner h2").waypoint(function() {
            $(".bannerInner h2").css({opacity:1});
            
            TweenMax.from($(this), 1, {scale:0, opacity:0, delay:0.1, ease:Expo.easeOut, force3D:true}, 0.2);
        },{
            offset: '50%',
            triggerOnce: true
        });
	}

	function mobileNav(){
		$(".btnMobileNav").on("click", function(){
			var display = $(".topNav").css("display");
			if(display == "none"){
				$(".topNav").stop(true, true).slideDown(300);
			}
			else{
				$(".topNav").stop(true, true).slideUp(300);
			}
		});
	}

	function dropdownPosition(){
		if($(window).width() > 767){
			if($(window).width() < 1600){
				$("#prefferedPartner").css({right:200, left:"auto"});
			}
			else{
			    $("#prefferedPartner").css({right:"auto", left:200});
			}
		}
	}


	$(function(){
		if(!device){
			bannerText();
		}
		dropdownPosition();
		mobileNav();
		
	});

})(jQuery);




