let section1 = $("#section1").offset().top
$("#home").click(function()
{
    $("html , body").animate({scrollTop: section1} , 1000)
})



let section2 = $("#section2").offset().top
$("#about").click(function()
{
    $("html , body").animate({scrollTop: section2} , 1000)
})

let section3 = $("#section3").offset().top
$("#category").click(function()
{
    $("html , body").animate({scrollTop: section3} , 1000)
})

let section4 = $("#section4").offset().top
$("#team").click(function()
{
    $("html , body").animate({scrollTop: section4} , 1000)
})

let section5 = $("#section5").offset().top
$("#contact").click(function()
{
    $("html , body").animate({scrollTop: section5} , 1000)
})




$(window).scroll(function()
{
    let x = $(window).scrollTop()
    if( x > section2)
    {
        $(".arrow").fadeIn(1000)
        $(".words").css("color","black")
    }
    else
    {
        $(".arrow").fadeOut(1000)
        $(".words").css("color","white")
    }
})

$(".arrow").click(function()
{
    $("html , body").animate({scrollTop:0} , 1000)
})