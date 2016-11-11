// JavaScript Document
$(document).ready(function(e) {
  //document.addEventListener("deviceready",function(){
	$("#test").on('click', function(){
	if($("#conexion").val()==0)
	{
		alert ("Probar Default");
	}
	else
	{
		alert ("Probar alterna");
	}
	});
  //}); 
  
});

