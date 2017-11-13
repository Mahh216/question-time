$(document).on("pagecreate","#pageone",function(){
  $('#Button').on("click", function(){
   
      var buttonPress = ButtonPressed();
      if(buttonPress){
          alert("hell yeeaaah bruh");
      }
      else{
        alert("hell naaaaaaw daaawg");  
      }
          
          
        });
          
      
  });            
           


    function ButtonPressed() {
	return !Math.round(Math.random());
};



 
