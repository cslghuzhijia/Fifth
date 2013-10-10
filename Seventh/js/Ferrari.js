$(function(){
	$(".menu a").first().css({borderTop:"2px solid rgb(228, 31, 34)"});
	SmallIconslide();
	TimeStart();
	menuClick();
	Jump();
});
function Jump(){
	$(".tagcloud a").hover(function(){
		$(this).css({top:"-4px"});
	},function(){
		$(this).css({top:"0px"});
	});
}

function menuClick(){
	$(".menu a").click(function(){
		$(".menu a").not($(this)).css({borderTop:"2px solid #000"});
		$(this).css({borderTop:"2px solid rgb(228, 31, 34)"});
	});
}
var index=0;
var ImgName=".No";
function TimeStart(){
	setInterval("ChangeImg()",2000);
}
function ChangeImg(){
	var current=index%3;
	$(".No1,.No2,.No0").hide();

	$(ImgName+current).animate({opacity:'toggle'},2000);
	
	index++;
}
function SmallIconslide(){
	$(".social-media-icon").hover(function(){
		
		 $(this).stop().animate({backgroundPosition:"(0 -32px)"}, {duration:200});
	},function(){
		 $(this).stop().animate({backgroundPosition:"(0 0px)"}, {duration:200});
	});
}