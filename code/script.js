//$( stuff in here ) = js selector (same as css)
//document = dom, O is for object
//.ready() is a method() for the document
//stuff inside the .ready parenthesis = parameter
//this stuff: function(){} ... IIFE, imediately invoked f/n expression


$(document).ready(function(){
  //code goes here
  
  $("#saveLog").on("click", function(){
    //alert("not yet ready");
    let statusText = underConstruction("not ready");
    
    $("#saveLog").text(statusText).prop("disabled", true)
    
  });
  
    //function to pass a status and get back a message for user
    //rn it is not ready becasue it only gives message for not ready
    function underConstruction(status){
      
      return "not yet ready, bruh"
      
    };
  
});