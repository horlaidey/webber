$(function(){
    $("#bars").click(function(){
        $("#first").slideToggle(500);
        $("#second, #third, #fourth, #fifth").hide(500);
    });
    $(" #bar2").click(function(){
        $("#second").slideToggle(500);
        $("#first, #third, #fourth, #fifth").hide(500);
    });
    $("#bar3").click(function(){
        $("#third").slideToggle(500);
        $("#first, #second, #fourth, #fifth").hide(500);
    });
    $("#bar4").click(function(){
        $("#fourth").slideToggle(500);
        $("#first, #second, #third, #fifth").hide(500)
    });
    $("#bar5").click(function(){
        $("#fifth").slideToggle(500);
        $("#first, #second, #third, #fourth").hide(500);
    });
});
