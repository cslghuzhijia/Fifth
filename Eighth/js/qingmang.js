$(function(){
	ChangeBgPosition();
	AddWord();
	Slide();
	PositionChoose();
	smallpchoose();
});
function smallpchoose(){
	$(".pop_city_container a").click(function(){
		
		$(".input_city").val($(this).attr("value"));
	});
}

function PositionChoose(){
	$(".list_label a").click(function(){

		var s=($(this).attr("id"));
		var goal="#"+s+"_container";
		$(".pop_city_container ul").hide();
		$(goal).show();
		var thisheight=($(goal).height()+85);
		$("#pop_city_city").css({"height":thisheight});

	});
}
function Slide(){
	$(".item_icon").hover(function(){

		var Y=$(this).css("background-position").split(" ")[1];
		var X=-136;
		var s=X+"px"+" "+Y;
		
		$(this).stop().animate({backgroundPosition:"("+s+")",opacity:'0.6'}, {duration:200});
		
	},function(){
		var Y=$(this).css("background-position").split(" ")[1];
		var X=0;
		var s=X+"px"+" "+Y;
		$(this).stop().animate({backgroundPosition:"("+s+")",opacity:'1'}, {duration:200});
		
	});
}
var viewable=0;

function AddWord(){
	$(".pop_city").mousedown(function(){
		viewable+=1;
		
	});

	$(".input_city").focus(function(){
		$(this).css({border:"2px solid #7cbf1c"});
		$(".pop_city").show();
	});
	$(".input_city").blur(function(){
		
		if (viewable==1) 
			{
				return;
			}
			else
			{
				$(this).css({border:"2px solid #fff"});
				$(".pop_city").hide();
				viewable=0;
			}
		
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