$(function(){
	ChangeBgPosition();
	AddWord();
});

function AddWord(){
	$(".input_city").focus(function(){
		$(this).css({border:"2px solid #7cbf1c"});
		$(".pop_city").show();
	});
	$(".input_city").blur(function(){
		$(this).css({border:"2px solid #fff"});
		$(".pop_city").hide();
	});
}

function ChangeBgPosition(){
	$(".nav2013 a").hover(
	function(){
		var X=$(this).css("background-position").split(" ")[0];
		var Y=-292;
		var s=X+" "+Y+"px";
		$(this).css("background-position",s)
	},
	function(){
		var X=$(this).css("background-position").split(" ")[0];
		var Y=8;
		var s=X+" "+Y+"px";
		$(this).css("background-position",s)
	});
}