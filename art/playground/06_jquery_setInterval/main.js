$(document).ready(function() {
  
  setInterval(appendText, 1000);
  
  function appendText() {
    $("body").append("<p>SOME MORE TEXT</p>");
  }
  
});
