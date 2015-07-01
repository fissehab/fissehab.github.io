$(document).ready(function() {

  $("aside").hide(); //hide the p tag
  
  /*
   block comment
  */
  

  $("#bootcamps").click(function() {
    $(this).next().slideToggle(300);
	
  });
  
 
 $("#moocs").click(function() {
   $(this).next().slideToggle(300);

});