function begin(){
    var url = "question1.html";
    window.location.href = url;
}

var counter = 1;

for(let i = 1; i <= 8; i++){
    function antiHoist(index){
        var div = "#div" + index;
        var divAnswer = div + "-answer";
    
        $(div).bind("click", function(){
            $(div).animate({opacity: 0}, 300);
            $(divAnswer).animate({opacity: 0}, 300);
            setTimeout(function(){
                $(div).css("background-image", "none");
            }, 300);
            $(div).animate({opacity: 1}, 300);
            $(divAnswer).animate({opacity: 1}, 300);
        })
    }
    antiHoist(i);
}

$("#wrong").click(function(){
    if(counter > 3){
        counter = 1;
    }

    var file = "x" + counter + ".png";
    var url = "url('" + file + "')";

    $("#overlay").css("background-image", url);

    $("#overlay").animate({opacity: 1}, 400);
    setTimeout(function(){
        $("#overlay").animate({opacity: 0}, 400);
    }, 600);

    counter++;
})


