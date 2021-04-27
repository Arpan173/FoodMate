// Loader Event

$(window).on("load", function () {
    $("#preloader").css({
        transform: "translateY(-100%)",
        "transition-delay": "0.6s",
    });
    $(".loader").css({
        opacity: "0",
        "transition-delay": "0.3s",
    });
});

// ****************************************************************************

// Scroll Event

$(window).scroll(function () {
    $("header").toggleClass("showHeader", window.scrollY > 50);
});

// ****************************************************************************

// Navbar Toggle

$(".navbar-toggler").click(function () {
    $(".navbar-toggler").toggleClass("showNavbar");
});

// ****************************************************************************

// Cart Button Mouse Hover In

$(".cart-link").mouseenter(function () {
    $(".cart-link img").attr("src", "./img/cart_light.png");
});

// Cart Button Mouse Hover Out

$(".cart-link").mouseleave(function () {
    $(".cart-link img").attr("src", "./img/cart_dark.png");
});

// ****************************************************************************

// Go Back Function

$(".go-back").click(function () {
    window.history.back();
});

// ****************************************************************************

// Scroll To Top

$(window).scroll(function () {
    $(".ScrolltoTop").toggleClass("show", window.scrollY > 500);
});

$(".ScrolltoTop").click(function () {
    $(window).scrollTop(0);
});

// ****************************************************************************

// Add to Cart Counter (Food Cart)

var counter = 0;
var cartCounter = localStorage.getItem("cartCounter");

// Local Storage

// if (cartCounter === "enabled") {
//     counter++;
//     $(".badge-count").text(counter);
//     localStorage.setItem("cartCounter", "enabled");
// }

// $(".food-cart").click(function () {
//     var cartCounter = localStorage.getItem("cartCounter");

//     if (cartCounter !== "enabled") {
//         counter++;
//         $(".badge-count").text(counter);
//         localStorage.setItem("cartCounter", "enabled");
//     } else {
//         counter--;
//         $(".badge-count").text(counter);
//         localStorage.setItem("cartCounter", null);
//     }
// });

// If / Else

// $(".food-cart").click(function () {
//     if ($(".food-cart img:nth-child(1)").css("visibility", "visible")) {
//         counter++;
//         $(".badge-count").text(counter);
//     }
//     else if ($(".food-cart img:nth-child(1)").css("visibility", "hidden")) {
//         counter--;
//         $(".badge-count").text(counter);
//     }
// });

$(".food-cart img:nth-child(1)").click(function () {
    counter++;
    $(".badge-count").text(counter);
});

$(".food-cart img:nth-child(2)").click(function () {
    counter--;
    $(".badge-count").text(counter);
});

// ****************************************************************************

// Add to Cart Btn: Each Dishes Individual Id

$("#dish_1 img").click(function () {
    $("#dish_1").toggleClass("addCart");
});

$("#dish_2 img").click(function () {
    $("#dish_2").toggleClass("addCart");
});

$("#dish_3 img").click(function () {
    $("#dish_3").toggleClass("addCart");
});

$("#dish_4 img").click(function () {
    $("#dish_4").toggleClass("addCart");
});

$("#dish_5 img").click(function () {
    $("#dish_5").toggleClass("addCart");
});

$("#dish_6 img").click(function () {
    $("#dish_6").toggleClass("addCart");
});

$("#dish_7 img").click(function () {
    $("#dish_7").toggleClass("addCart");
});

$("#dish_8 img").click(function () {
    $("#dish_8").toggleClass("addCart");
});

$("#dish_9 img").click(function () {
    $("#dish_9").toggleClass("addCart");
});

$("#dish_10 img").click(function () {
    $("#dish_10").toggleClass("addCart");
});

// ****************************************************************************
