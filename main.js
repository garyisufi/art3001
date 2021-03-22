$(document).ready(function() {

    // spawn the title at random on screen
    // $("#title").css({
    //     position: "absolute",
    //     left: Math.round(Math.random() * window.innerWidth) + "px",
    //     top: Math.round(Math.random() * window.innerHeight) + "px",
    // }); 

    $("input[placeholder]").each(function () {
        $(this).attr('size', $(this).attr('placeholder').length);
    });

    var input = document.getElementById('in');
    input.focus();

    // Working with input text
    input.addEventListener("keydown", function (e) {
        if (e.keyCode == 13) {
            // Enter key is pressed
            checkInput(e);
        }
    });

    function checkInput(e) {
        var inputText = e.target.value;
        
        if (inputText.toLowerCase() == "gary isufi" ) {
            // go to main.html
            location.href = 'main.html';
        } else if (inputText.toLowerCase() == "tobey maguire") {
            // go to secret fun page
            //alert("Welcome to the lair ---- coming soon!");
            location.href = 'funko/funko.html';
        } else if (inputText.toLowerCase() == "heesoo lee") {
            alert("Heesoo, leave my site.");
        }
    }
});