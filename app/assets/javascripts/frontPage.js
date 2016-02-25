

$(".logo").click(function(){
  debugger;
  $.get("/", {}, function(data){
    console.log(data);
  });
});
