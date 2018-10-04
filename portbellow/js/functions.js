var articleHeight = [];
var marginTop = 400;
var fadeTime = 2000;
var timer, timer2;
var margin;

function setMargin() {
	margin = $(window).height() - $('main article:last').height() - $('header').height();
	if (margin < 100) { margin = 100; }
	$('main article').css('margin-bottom', margin+'px');

	console.log(margin);
}
function changeTopImage() {
	if ($(this).scrollTop() < articleHeight[0] + margin - marginTop) { //HOME
		$('header').removeClass('narrow');
		$('header img.top').fadeIn(fadeTime);
		$('header img.aboutus').hide();
		$('header img.profile').hide();
		$('header img.aboutus').hide();

		$('header img.aboutus02').hide();
		$('header img.profile02').hide();
		$('header img.aboutus02').hide();
	} else if ($(this).scrollTop() < articleHeight[1] + margin*2 - marginTop) { //ABOUT US
		$('header').addClass('narrow');
		$('header img.top').hide();
		$('header img.aboutus').fadeIn(fadeTime);
		$('header img.profile').hide();
		$('header img.recruit').hide();

		$('header img.aboutus02').fadeIn(fadeTime);
		$('header img.profile02').hide();
		$('header img.recruit02').hide();
	} else if ($(this).scrollTop() < articleHeight[2] + margin*3 - marginTop) { //PROFILE
		$('header').addClass('narrow');
		$('header img.top').hide();
		$('header img.aboutus').hide();
		$('header img.profile').fadeIn(fadeTime);
		$('header img.recruit').hide();

		$('header img.aboutus02').hide();
		$('header img.profile02').fadeIn(fadeTime);
		$('header img.recruit02').hide();
	} else { //RECRUIT
		$('header').addClass('narrow');
		$('header img.top').hide();
		$('header img.aboutus').hide();
		$('header img.profile').hide();
		$('header img.recruit').fadeIn(fadeTime);

		$('header img.aboutus02').hide();
		$('header img.profile02').hide();
		$('header img.recruit02').fadeIn(fadeTime);
	}

}
function setArticleHeight() {
	$('article#top').height($(window).height());
	articleHeight[0] = $('article#top').outerHeight();
	articleHeight[1] = articleHeight[0] + $('article#aboutus').outerHeight();
	articleHeight[2] = articleHeight[1] + $('article#profile').outerHeight();
	articleHeight[3] = articleHeight[2] + $('article#recruit').outerHeight();

	console.log(articleHeight);
}
$(function(){
	
	$(window).on('load resize', function() {
		if (timer !== false) {
			clearTimeout(timer);
		}
		timer = setTimeout(function() {
			setArticleHeight();
			setMargin();
			changeTopImage();
		}, 200);
	});

   // #で始まるアンカーをクリックした場合に処理
   $('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 1000; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });

   $(window).on('scroll', function() {
		if (timer2 !== false) {
			clearTimeout(timer2);
		}
		timer2 = setTimeout(function() {
			console.log($(this).scrollTop());
			changeTopImage();
		}, 200);
	});

	if(navigator.userAgent.match(/iPhone|iPad|iPod/)){
		$('body').addClass('ios');
	}
});
