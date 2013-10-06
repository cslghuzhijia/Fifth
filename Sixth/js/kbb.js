$(function() {
	ChangeImg();
	Changebgcolor();
});


function ChangeImg(){
	$(".paynew_homepage").hover(function(){
		$(this).addClass("changeImg");
	},function(){
		$(this).removeClass("changeImg");
	});
}

function Changebgcolor(){
	$(".nav-item-link-primary").hover(function(){
		$(this).addClass("Changebgcolor");
	},function(){
		$(this).removeClass("Changebgcolor");
	});
}