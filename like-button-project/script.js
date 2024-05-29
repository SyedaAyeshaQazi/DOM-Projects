// var box = document.querySelector("#container")
// var love = document.querySelector("i")

// box.addEventListener("dblclick", function(){
//     love.style.transform = "translate(-50% , -50%) scale(1)";
//     love.style.opacity = 0.8
// })

// setTimeout(function(){
//     love.style.opacity = 0;
// }, 1000);

// setTimeout(function(){
//     love.style.transform = "translate(-50% , -50%) scale(0)";
// }, 2000);



var box = document.querySelector("#container");
var love = document.querySelector("i");
var timer1, timer2;

box.addEventListener("dblclick", function() {
    // Reset transformations and opacity
    love.style.transform = "translate(-50% , -50%) scale(1)";
    love.style.opacity = 0.8;

    // Clear previous timers if any
    if (timer1) clearTimeout(timer1);
    if (timer2) clearTimeout(timer2);

    // Set new timers
    timer1 = setTimeout(function() {
        love.style.opacity = 0;
    }, 1000);

    timer2 = setTimeout(function() {
        love.style.transform = "translate(-50% , -50%) scale(0)";
    }, 2000);
});
