$(function(){
	txtFocus();
	txtKeyUp();
	ChangbgPosition();
})

function ChangbgPosition(){
	$(".third-party-first a").hover(function(){
		var poY=$(this).css("background-position").split(" ")[1];
		var poX="-211px";
		var s=poX+" "+poY;
		$(this).css({backgroundPosition:s});
	},function(){

		var poY=$(this).css("background-position").split(" ")[1];
		var poX="0px";
		var s=poX+" "+poY;
		$(this).css({backgroundPosition:s});
	});

	$(".ctrlbuttonlogin-submit").hover(function(){
		
		var poX=$(this).css("background-position").split(" ")[0];
		var poY="-650px";
		var s=poX+" "+poY;
		$(this).css({backgroundPosition:s});
	},function(){
		var poX=$(this).css("background-position").split(" ")[0];
		var poY="-600px";
		var s=poX+" "+poY;
		$(this).css({backgroundPosition:s});
	});

	$(".ctrlbuttonlogin-submitlabel,.skin-button-willblue-bg-left").mousedown(function(){
		var poX=$(this).css("background-position").split(" ")[0];
		var poY="-700px";
		var s=poX+" "+poY;
		$(this).css({backgroundPosition:s});
	});
	$(".ctrlbuttonlogin-submitlabel,.skin-button-willblue-bg-left").mouseup(function(){
		var poX=$(this).css("background-position").split(" ")[0];
		var poY="-600px";
		var s=poX+" "+poY;
		$(this).css({backgroundPosition:s});
	});
}

function txtKeyUp(){
	$("#txt1").keyup(function(){
		if ($(this).val()=="") {
			$("#lblEmail").show();
		}
		else{
			$("#lblEmail").hide();
		}
		
	});

	$("#txt2").keyup(function(){
		if ($(this).val()=="") {
			$("#lblPwd").show();
		}
		else{
			$("#lblPwd").hide();
		}
		
	});

}

function txtFocus(){
	$(".startpage-input-text").focus(function(){
		$(this).parent("div").addClass("focus");
	});

	$(".startpage-input-text").blur(function(){
		$(this).parent("div").removeClass("focus");
	});
}