$(function(){
    
    // ScrollToTop Button
    $(window).on("scroll",function(){
         
       if($(this).scrollTop()>700)
       {
           $(".scroll").fadeIn();
       } 
         
       else
       {
           $(".scroll").fadeOut();
       }
         
    });
    
//    Zamiast w main.css html{scroll-behavior: smooth;}
//    $(".scroll").on('click',function() {
//    $([document.documentElement, document.body]).animate({
//        scrollTop: $("body").offset().top}, 1100);
//});
    
   
    // Quiz
    $(".quiz_solution").hide();
    
    //kolorowanie odpowiedzi
    $("input:radio").on("click", function(){
        
        if($(this).prop("checked", true))
        {                                                                                         $(this).parent().parent().siblings().children().removeClass("redBackground");
            $(this).parent().addClass("redBackground");
        }
           
    });
    
    //podsumowanie quizu
    $(".dalej").on("click", function(e){
        e.preventDefault();
        if($(".redBackground").length<10)
            {
                alert("Nie zaznaczono wszystkich odpowiedzi! Odpowiedz na pytani");
                return;
            }
        let $zdobyte_punkty = $(".odp.popr.redBackground").length;
        $("#test").append("Brawo zdobyłeś " + $zdobyte_punkty + " pkt!");
       
        $(".odp.popr").addClass("green");
        $(".odp.redBackground").addClass("wrong");
        
        $("input:radio").prop("disabled", true);
        $(".quiz_solution").fadeIn(); 
        
        $([document.documentElement, document.body]).animate({
            scrollTop: $("body").offset().top}, 1100);
        
        $(this).hide();
        //odpowiedzi
        $(".quiz_section").each(function(){
            
        
        let $span = $('<span></span>');
        $span.insertAfter($(this).find(".question"));
        
        
        let value1 = $(this).find(".popr").children().val();
        let value2 = $(this).find(".redBackground").children().val();
        
            
        if(value2 === value1)
            {
                $(this).find($("span")).text("Dobrze! Poprawna odpowiedź to "+ value1);
                $(this).find($("span")).addClass("dobrze");
            }
        else
            {
                $(this).find($("span")).text("Źle! Zaznaczyłeś: "+value2+". Poprawna odpowiedź to: "+ value1);
                $(this).find($("span")).addClass("zle");
            }
        });
        
        $(".quiz_header p").hide();
    });
    
    
    //index.html laughtrack audio
    $("img.red").on("click",function(){
        
        var audio = document.getElementById("play");
        audio.volume = 0.1;
        $(this).toggleClass("zielen");
        $('#play').get(0).pause();
        
        if($(this).hasClass("zielen"))
         {
             $(this).attr("src", "img/Główna/indexgreen.png");
             $("#play").get(0).play();
             $(this).attr("alt", "Odtwarzanie w trakcie");
         }
        else
         {
             $(this).attr("src", "img/Główna/indexred.png"); 
             $(this).attr("alt", "Odtwarzanie zatrzymane");
         }             
    });
    
    //index.html pierwszy obraz
    $(window).on("scroll",function(){
       if($(window).scrollTop() > 400 )
           {$("header>img").fadeIn();}
    });
    
    
    //subiektywne.html linki do odcinków
    $("a.episode").hide(); 
    $("button").on("click", function(){
        let aa = $(this).parent().find("a.episode");
        aa.each(function(index){
            $(this).stop().delay(200*index).fadeToggle(1000)
        });
        });
    
    //kontakt.html - placeholder
    $("input").on("focus", function(){
        let $place=$(this).attr("placeholder");
        $(this).attr("placeholder", "");
       
        $(this).on("blur", function(){
            $(this).attr("placeholder", $place);
        });
    
    });
    
    //kontakt.html - textarea
    $("textarea").on("keydown", function(){
        let tekstWprowadzany = $(this).val();
        let counter = (250 - (tekstWprowadzany.length));    
    $("#znaki").text("Pozostało: "+counter+" znaków");

    });
});