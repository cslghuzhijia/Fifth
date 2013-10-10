$(function(){
	$(".menu a").first().css({borderTop:"2px solid rgb(228, 31, 34)"});
	SmallIconslide();
	TimeStart();
	menuClick();
	Jump();
	master();
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




var handle;
function master(){
	$(".goahead").click(function(){
		clearInterval(handle);
		ChangeImg();
		handle=setInterval("ChangeImg()",3000);
	});
	$(".return").click(function(){
		clearInterval(handle);
		ReturnImg();
		handle=setInterval("ChangeImg()",3000);
	});
}
function ReturnImg(){
	var last=arrayList.pop();
	var len=arrayList.length;
	$(last).animate({opacity:'toggle'},2000);
	$(arrayList[len-1]).animate({opacity:'toggle'},2000);
	index=len;
}

var index=1;
var ImgName=".No";
var current;
var cur;
var arrayList=new Array();
arrayList[0]=".No0";
function TimeStart(){
	handle=setInterval("ChangeImg()",3000);
}
function ChangeImg(){
	current=index%3;
	cur=ImgName+current;
	var i=arrayList.push(cur);
	$(arrayList[i-2]).animate({opacity:'toggle'},2000);
	$(arrayList[i-1]).animate({opacity:'toggle'},2000);
	index++;
}



function SmallIconslide(){
	$(".social-media-icon").hover(function(){
		 $(this).stop().animate({backgroundPosition:"(0 -32px)"}, {duration:200});
	},function(){
		 $(this).stop().animate({backgroundPosition:"(0 0px)"}, {duration:200});
	});
}