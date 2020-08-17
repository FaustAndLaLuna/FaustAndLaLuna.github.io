function carouselMove(){

}

$(window).on('load', function() {
    if($(window).width() >= 768){
        $(".teamCardMove").each(function(index){
            tempOffset = $(this).offset();
            tempOffset.top = topOffset;
            $(this).offset(tempOffset);
        });
        $(".teamCardHover").height($(".teamCard").height());
    }
    else{
        // var elements =  $("#references > div");
        // var iterator = 0;
        // var maxIteration = elements.length;
        windowWidth = $(window).width();
        // var currentMargin = windowWidth/2;
        // setInterval(function(){
        //     if ((iterator + 1) < maxIteration){
        //         currentMargin -= (windowWidth/2 + $(elements[iterator]).width());
        //     } else {
        //         currentMargin = windowWidth/2;
        //     }
        //     $("#carousel").css("margin-left", currentMargin + "px");
        //     iterator++;
        //     iterator %= maxIteration;
        // }, 2000);
        var hacemosElements = $(".queHacemosCard");
        var hacemosIterator = 0;
        var hacemosMaxIteration = hacemosElements.length;
        var hacemosCurrentMargin = 0;
        var buttonNext = function(){
            if((hacemosIterator+1) < hacemosMaxIteration){
                hacemosCurrentMargin -= (windowWidth /2 + $(hacemosElements[hacemosIterator]).outerWidth());
            } else {
                hacemosCurrentMargin = 0;
            }
            $("#queHacemosCards").css("margin-left", hacemosCurrentMargin +"px");
            hacemosIterator++;
            hacemosIterator %= hacemosMaxIteration;
        }
        while(hacemosIterator+1 < hacemosMaxIteration){
            buttonNext();
        }
        var hacemosMaxLeft = hacemosCurrentMargin;
        buttonNext();
        var buttonLast = function(){
            if(hacemosIterator - 1 < 0){
                hacemosCurrentMargin = hacemosMaxLeft;
            } else {
                hacemosCurrentMargin += (windowWidth/2 + $(hacemosElements[hacemosIterator]).outerWidth());
            }
            $("#queHacemosCards").css("margin-left", hacemosCurrentMargin +"px");
            hacemosIterator = (hacemosIterator - 1 < 0 ? hacemosMaxIteration-1 : hacemosIterator - 1);
        }
        let arrowOffset = $("#queHacemosCards").offset().top;
        arrowOffset += $("#queHacemosCards").height()/2;
        $("#arrowLast").offset({top: arrowOffset, left: $("#arrowLast").offset().left});
        $("#arrowNext").offset({top: arrowOffset, left: $("#arrowNext").offset().left});
        $("#arrowLast").click(buttonLast);
        $("#arrowNext").click(buttonNext);

        $("#hamburger").click(function(){
            $("#hamburger").css("visibility", "hidden");
            $("#hamburgerOut").css("visibility", "visible");
            $("#mobileMenu").css("visibility", "visible");
            $("#hamburger").css("opacity", "0");
            $("#hamburgerOut").css("opacity", "1");
            $("#mobileMenu").css("opacity", "1");
        });
        var disappear = function(){
            $("#hamburgerOut").css("visibility", "hidden");
            $("#hamburger").css("visibility", "visible");
            $("#mobileMenu").css("visibility", "hidden");
            $("#hamburger").css("opacity", "1");
            $("#hamburgerOut").css("opacity", "0");
            $("#mobileMenu").css("opacity", "0");
        }
        $(".disappear").click(disappear);
    }
})


