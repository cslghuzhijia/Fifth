$(function(){
	ChangeBgPosition();
});


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