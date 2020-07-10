$(document).ready(function() {
    
    let offset = $("#heroImgAccent").offset();
    offset.top += $("#heroImg").height()/10;
    offset.left -= $("#heroImg").height()/10;
    $("#heroImg").offset(offset);
    $("#heroImg").height($("#heroImgAccent").height());
    $("#heroImg").width($("#heroImgAccent").width());
    $("#heroImgsContainer").css("min-height", $("#heroImgAccent").height() * 1.1);

    // let margin = $("#heroImg").offset().left - ($("#heroAccent").offset().left + $("#heroAccent").width());
    // margin -= 5;
    // $("#heroText").css("margin-right",margin);
    


})