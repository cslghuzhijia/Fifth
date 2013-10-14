$(function(){
		DatePicker();
		Startprepare();
		ChangeStyle();
		$("#datepicker").val(" ");
		
});
function ChangeStyle(){
	 $("#ui-datepicker-div").attr("style", "width:420px;height:234px;position: absolute; top: 19px;left: 48px; z-index: 1;");
	 
}
function Startprepare(){
	$(".ui-datepicker-current").trigger("click");
}
function DatePicker(){
	$( "#datepicker" ).datepicker({
		numberOfMonths: 2,
		showButtonPanel: false
	});
}
