$(document).ready(function() {
    $(".popFigure").draggable();

    var shelf1 = document.getElementById("shelf1");
    var shelf2 = document.getElementById("shelf2");
    var shelf3 = document.getElementById("shelf3");
    var x = 173;
    var y = 238;
    var xMin = 0;
    var xMax = 173;
    var yMin = 0;
    var yMax = 238;
    var increasing = 0;
    var decreasing = 1;

    function changeShadowColor() {
        if (decreasing == 1) {
            //numbers going down
            if (x > xMin) {
                //haven't hit the bottom yet
                x = x - 1;
            }

            if (y > yMin) {
                y = y - 1;
            } else {
                decreasing = 0;
                increasing = 1;
            }
        } else if (increasing == 1) {
            //numbers going up
            if (x < xMax) {
                x = x + 1;
            }

            if (y < yMax) {
                y = y + 1;
            } else {
                decreasing = 1;
                increasing = 0;
            }
        }
        shelf1.style.boxShadow = "2px 5px 10px rgb(0, " + x + ", " + y + ")";
        shelf2.style.boxShadow = "2px 5px 10px rgb(0, " + x + ", " + y + ")";
        shelf3.style.boxShadow = "2px 5px 10px rgb(0, " + x + ", " + y + ")";
        // console.log(x + " : " + y);
    }
    // changeShadowColor();
    setInterval(changeShadowColor, 10);



    // spawn the pop figure at random on screen
    // $("#pop1").css({
    //     position: "absolute",
    //     left: Math.round(Math.random() * window.innerWidth) + "px",
    //     top: Math.round(Math.random() * window.innerHeight) + "px",
    // }); 
    // $("#pop2").css({
    //     position: "absolute",
    //     left: Math.round(Math.random() * window.innerWidth) + "px",
    //     top: Math.round(Math.random() * window.innerHeight) + "px",
    // }); 
    // $("#pop3").css({
    //     position: "absolute",
    //     left: Math.round(Math.random() * window.innerWidth) + "px",
    //     top: Math.round(Math.random() * window.innerHeight) + "px",
    // }); 
    // $("#pop4").css({
    //     position: "absolute",
    //     left: Math.round(Math.random() * window.innerWidth) + "px",
    //     top: Math.round(Math.random() * window.innerHeight) + "px",
    // }); 
    // $("#pop5").css({
    //     position: "absolute",
    //     left: Math.round(Math.random() * window.innerWidth) + "px",
    //     top: Math.round(Math.random() * window.innerHeight) + "px",
    // }); 
    // $("#pop6").css({
    //     position: "absolute",
    //     left: Math.round(Math.random() * window.innerWidth) + "px",
    //     top: Math.round(Math.random() * window.innerHeight) + "px",
    // }); 
    // $("#pop7").css({
    //     position: "absolute",
    //     left: Math.round(Math.random() * window.innerWidth) + "px",
    //     top: Math.round(Math.random() * window.innerHeight) + "px",
    // }); 
    // $("#pop8").css({
    //     position: "absolute",
    //     left: Math.round(Math.random() * window.innerWidth) + "px",
    //     top: Math.round(Math.random() * window.innerHeight) + "px",
    // }); 
});