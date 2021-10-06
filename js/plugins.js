$(document).ready(function() {

    //toggle option-box
    $(".gear").click(function() {
        $(".option-color").fadeToggle();
    });

    //change theme color on click
    var colorLi = $(".option-color ul li");
    colorLi
    .eq(0).css("backgroundColor","#42c9c9d1").end()
    .eq(1).css("backgroundColor","#FF5B66").end()
    .eq(2).css("backgroundColor","#7B3267").end()
    .eq(3).css("backgroundColor","#E39A3C").end()

    colorLi.click(function()
    {
        $("link[href*='theme']").attr("href",$(this).attr("data-value"));
        // console.log($(this).attr("data-value"))
    });
});


