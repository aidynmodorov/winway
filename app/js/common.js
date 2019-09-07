$(document).ready(function() {

	$('.about-item-text').matchHeight();

	$('.menu-btn').on('click', function(e) {
		e.preventDefault();
		$('.menu-sm').toggleClass('active');
		$('.menu-btn').toggleClass('active');
		$('.search-container').removeClass('active');
	});

	$('.user_link.drop').on('click', function(e) {
		e.preventDefault();
		$('.dropdown-menu').toggleClass('active');
		$('.arrow_user').toggleClass('active');
	});

	$('.search-btn').on('click', function(e) {
		e.preventDefault();
		$('.search-container').toggleClass('active');
		$('.menu-sm').removeClass('active');
		$('.menu-btn').removeClass('active');
	});

	$('.search-container_close').on('click', function (e) {
			e.preventDefault();
			$('.search-container').removeClass('active');
	});

	//$('.sidebar').jScrollPane({});

	// if (screen.width < 480) {
	// 		var mvp = document.getElementById('testViewport');
	// 		mvp.setAttribute('content','width=480');
	// }

	$('.v-filter-select').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.v-filter-panel').slideToggle();
	});

	if (screen.width < 992) {
		var prevScrollpos = window.pageYOffset;
		window.onscroll = function() {
			var currentScrollpos = window.pageYOffset;
			if(prevScrollpos > currentScrollpos) {
				document.getElementById("header").style.top = "0";
			} else {
				document.getElementById("header").style.top = "-180px";
			}
			prevScrollpos = currentScrollpos;
		}
	}

	$(function(){

		$('.tab-title li').not('.active').click(function(){
			var index = $(this).index();
			var content = $('.tab-content li').eq(index);
			$(this).addClass('active').siblings().removeClass('active');
			$('.tab-content li').css('display', 'none').eq(index).css('display', 'block');
		});

		$('.tab-title li:first').addClass('active');
		$('.tab-content li:first').css('display', 'block');

	});

	$(function(){

		$('.tab-title-bottom li').not('.active').click(function(){
			var index = $(this).index();
			var content = $('.tab-content-bottom li').eq(index);
			$(this).addClass('active').siblings().removeClass('active');
			$('.tab-content-bottom li').css('display', 'none').eq(index).css('display', 'block');
		});

		$('.tab-title-bottom li:first').addClass('active');
		$('.tab-content-bottom li:first').css('display', 'block');

	});

	$('.js_popup').magnificPopup({
		type:'inline',
		mainClass: 'mfp-fade',
		fixedContentPos: true,
		callbacks: {
			open: function() {
				hash = window.location.hash ? window.location.hash : '#popup'
				window.location.href = hash
			},
			close: function() {
				history.pushState('', document.title, window.location.pathname)
			}
		}
	});

	$(window).bind('hashchange', function() {
		if(window.location.hash == ''){
			$.magnificPopup.close()
		}
	});

});
