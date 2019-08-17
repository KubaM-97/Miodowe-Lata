$(function(){
    
    
     $(window).scroll(function(){
       if($(this).scrollTop()>700){
           jQuery(".scroll").fadeIn();
       } else{$(".scroll").fadeOut();}
    });
    
    
  $(".quiz_solution").hide();
    $("input:radio").on("click", function(){
        
        if($(this).prop("checked", true))
        {
            $(this).parent().parent().siblings().children().removeClass("redBackground");
            $(this).parent().addClass("redBackground");
        }
           
    });
    
    $(".dalej").on("submit", function(e){
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
        $('window').animate({scrollTop: 0}, 400);
    });
    
    $("img.red").on("click",function(){
        var audio = document.getElementById("play");
        audio.volume = 0.1;
        $(this).toggleClass("zielen");
       $('#play').get(0).pause();
        if($(this).hasClass("zielen"))
         {
             $(this).attr("src", "img/Główna/indexgreen.png");
             $("#play").get(0).play();
         }
        else{
                $(this).attr("src", "img/Główna/indexred.png");      
            }             
    });
    $(window).on("scroll",function(){
       if($(window).scrollTop() > 400 )
           {$("header>img").fadeIn();}
    });
    
   $("a.episode").hide(); 
    $("button").on("click", function(){
        let aa = $(this).parent().find("a.episode");
        aa.each(function(index){
            $(this).delay(200*index).fadeIn(1000)
        });
        });
        });
       
   
        

    



//  $answer.each(function(){})
//    // POBRANIE WSZYSTKICH INPUTÓW
//    let kolejne_inputy=document.getElementsByTagName('input');
//    let len = kolejne_inputy.length;
//    
//    
//    // WYSZUKANIE POLA INPUT ZAZNACZONEGO (WYBRANEJ PRZEZ UŻYTKOWNIKA ODPOWIEDZI) I NADANIE JEGO RODZICOWI KLASY REDBACKGROUND ODPOWIEDZIALNEJ ZA ŻÓŁTE OBRAMOWANIE, A W PRZYPADKU INPUTA NIEZAZNACZONEGO - USUNIĘCIE KLASY REDBACKGROUND RODZICOWI
//    for(let i=0; i<len; i++)
//        {
//            let zazn=kolejne_inputy[i].checked;
//            // console.log(zazn);
//            
//            //RODZIC
//            let div=kolejne_inputy[i].parentNode;
//            //console.log(div);
//            
//            
//            if(zazn)
//            {
//               //przejście na rodziców inputów(divy)
//               div.classList.add('redBackground');
//            }
//
//            else
//            {
//               div.classList.remove('redBackground');
//            }
//
//        }
//}

        
        
    

//
//
//    // WYŚWIETLENIE KOMUNIKATU O ILOŚCI ZDOBYTYCH PUNKTÓW
//    let zdobyte_punkty = document.getElementsByClassName("odp popr redBackground");
//    
//    document.getElementById("test").textContent = "Brawo zdobyłeś " + zdobyte_punkty.length + " pkt!" 
//  
//    
//    
//  
//    // USTAWIANIE POPRAWNYCH ODPOWIEDZI NA ZIELONO NA PODSTAWIE SELEKTORA 
//    let correct=document.querySelectorAll(".odp.popr"); //wybór
//    let len1 = correct.length;    
//    
//    for(let i=0; i<len1; i++)
//    {
//       correct[i].className="odp green"; 
//    }
//    
//    
//    
//   
//    // USTAWIANIE ZŁYCH ODPOWIEDZI NA CZERWONO NA PODSTAWIE SELEKTORA
//    let incorrect = document.querySelectorAll(".odp.redBackground");
//    let len2 = incorrect.length;
//    
//    for (let j=0; j<len2; j++)
//        {        
//             
//            if(incorrect)
//            {
//                incorrect[j].classList.add("wrong");  
//            }
//            
//       
//        }
//    
//    
//    
//    
//    // DEAKTYWACJA MOŻLIWOŚCI KLIKNIĘCIA NA INPUTY (WYBORU ODPOWIEDZI) 
//    let inputy=document.querySelectorAll('input[type=radio]');
//    let len3 = inputy.length;
//        
//    for(let i=0; i<len3; i++)
//    {
//        inputy[i].disabled=true;
//    }
//
//}
//
//const btn = document.querySelector("button");
//btn.addEventListener('click', poznaj_odpowiedz, false);
//
// 
