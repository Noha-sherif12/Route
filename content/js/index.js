
$(".open-icon").click(function(){
    $("main .side-menu").css("left","0");
    $("main section span").css("left","263px");

})

$(".close-btn").click(function(){
    
    $("main .side-menu").css("left","-250px");
    $("main section span").css("left","13px");
})

$(".singers h3").click(function(){
    $(this).next().slideToggle();
    $(".singers p").not($(this).next()).slideUp();
})


$("textarea").keyup(function(){
    let textLength = $(this).val().length;
    $(".charachter-num").text(
    100 - textLength <= 0 ? "your available character finished " : 100 - textLength
    )
})


let countDate = new Date("November 8, 2024 15:05:12").getTime();

let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the corresponding HTML elements
    document.querySelector(".days").textContent = days + " D";
    document.querySelector(".hours").textContent = hours + " h";
    document.querySelector(".minutes").textContent = minutes + " m";
    document.querySelector(".seconds").textContent = seconds + " s";

    // If the countdown is over, display some text and stop the timer
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".days").textContent = "0 D";
        document.querySelector(".hours").textContent = "0 h";
        document.querySelector(".minutes").textContent = "0 m";
        document.querySelector(".seconds").textContent = "0 s";
        // Optionally, you can display a message
        console.log("Countdown finished!");
    }
}, 1000);
