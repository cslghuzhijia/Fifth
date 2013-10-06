$(function(){
	Transfor();
	bottomHuang();
	getFocus();
	headerHuan();
	skip();
	//Move();
	//setInterval("Move()",1000);
});

function Move(){

	$("#U").animate({left:'-296px'},"slow");
	$("#li1").css("left","888px");


}








function skip()
{
	$(".prev").click(function(){
		clearInterval(handle);
		index--;
		index--;
		if (index<=0) {index=4;}

		Change();
		handle=setInterval("Change()",2000);
	});
	$(".next").click(function(){
		clearInterval(handle);
		
		Change();
		handle=setInterval("Change()",2000);
	});
	
}



var handle;
function headerHuan(){
 	handle=setInterval("Change()",2000);
}

var index=1;
function Change(){
	if (index>4) {
		index=1;
		$("#bgImg").attr("src","Image/1.jpg");
		index++;
	}
	else{
		$("#bgImg").attr("src","Image/"+index+".jpg");
		index++;
	}
		
		
	
}




function getFocus(){
	var x=$(".txt").val();
	$(".txt").focus(function(){
		
		$(".txt").val("");
	});

	$(".txt").blur(function(){
		$(this).val(x);
	});
}






function bottomHuang()
{
	$(".headline").click(function(){
		$(".headline").css("background-position","0 0");
		$(".content").hide();
		$(this).next(".content").show();
		$(this).css("background-position","-50px 0");
	});
	$(".headline").hover(
		function(){
			
			$(this).css("background-position","-100px 0");
		},
		function(){
			
			$(this).css("background-position","0 0");
		});


}


function Transfor(){
	$(".flip-teaser").hover(function(){
	
		$(".flip-back").animate({opacity:'toggle'},1000);
	},
	function(){
		$(".flip-back").animate({opacity:'toggle'},1000);
		
	});
}