$(document).ready(function(){
  
  $("#toolbar").click(selectTool);
  $("body").click(dig);
  
  function selectTool(event) {
    event.stopPropagation();
  }
  
  function dig(event) {
    var div = $("<div>hole</div>");
    div.css("position", "absolute");
    div.css("top", event.pageY);
    div.css("left", event.pageX);
    $("body").append(div);
  }
  
});