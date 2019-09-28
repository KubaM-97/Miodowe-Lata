$(function () {
    // ScrollToTop Button
    $(window).on("scroll", function () {

        if ($(this).scrollTop() > 700) {
            $(".scroll").fadeIn();
        } else {
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
    $("input:radio").on("click", function () {

        if ($(this).prop("checked", true)) {
            $(this).parent().parent().siblings().children().removeClass("choose");
            $(this).parent().addClass("choose");
        }

    });

    //podsumowanie quizu
    $(".quiz_form").on("submit", function (e) {
        e.preventDefault();
        if ($(".choose").length < 10) {
            alert("Nie zaznaczono wszystkich odpowiedzi!");
            return;
        }
        let $zdobyte_punkty = $(".odp.popr.choose").length;
        $("#pkt").append(`Brawo! Zdobyłeś ${$zdobyte_punkty} pkt!`);

        $(".odp.popr").addClass("green");
        $(".odp.choose").addClass("wrong");

        $("input:radio").prop("disabled", true);
        $(".quiz_solution").fadeIn();

        $([document.documentElement, document.body]).animate({
            scrollTop: $("body").offset().top
        }, 1100);

        $(this).hide();
        //odpowiedzi
        $(".quiz_section").each(function () {


            let $span = $('<span></span>');
            $span.insertAfter($(this).find(".question"));


            let $value1 = $(this).find(".popr").children().val();
            let $value2 = $(this).find(".choose").children().val();


            if ($value2 === $value1) {
                $(this).find($("span")).text(`Dobrze! Poprawna odpowiedź to ${$value1}.`);
                $(this).find($("span")).addClass("correct");
            } else {
                $(this).find($("span")).text(`Źle! Zaznaczyłeś:  ${$value2}. Poprawna odpowiedź to: ${$value1}.`);
                $(this).find($("span")).addClass("incorrect");
            }
        });

        $(".quiz_header p").hide();
    });


    //index.html laughtrack audio
    const $imgred = $("img.red");
    $($imgred).on("click", function () {

        var $audio = $("#play");
        $audio.volume = 0.1;
        $(this).toggleClass("verde");
        $audio.get(0).pause();


        if ($(this).hasClass("verde")) {
            $(this).attr("src", "img/Glowna/indexgreen.png");
            $audio.get(0).play();
            $(this).attr("alt", "Odtwarzanie w trakcie");
        } else {
            $(this).attr("src", "img/Glowna/indexred.png");
            $(this).attr("alt", "Odtwarzanie zatrzymane");
        }
        $audio.on('ended', function () {
            $($imgred).removeClass("verde");
            $($imgred).attr("src", "img/Glowna/indexred.png");
            $($imgred).attr("alt", "Odtwarzanie zatrzymane");

        });
    });

    //index.html pierwszy obraz
    const $headerimg = $("header>img");
    $(window).on("scroll", function () {

        if (window.matchMedia("(max-width:500px)").matches) {
            if ($(window).scrollTop() > 400) {
                $headerimg.fadeIn();
            }
        } else if ($(window).scrollTop() > 300) {
            {
                $headerimg.fadeIn();
            }
        }
    });


    //subiektywne.html linki do odcinków
    $("a.episode").hide();
    $("button").on("click", function () {
        let aa = $(this).parent().find("a.episode");
        aa.each(function (index) {
            $(this).stop().delay(200 * index).fadeToggle(1000)
        });
    });

    //kontakt.html - placeholder
    $("input").on("focus", function () {
        let $place = $(this).attr("placeholder");
        $(this).attr("placeholder", "");

        $(this).on("blur", function () {
            $(this).attr("placeholder", $place);
        });

    });

    //kontakt.html - textarea
    $("textarea").on("keydown keyup click", function () {
        let $tekstWprowadzany = $(this).val();
        let $counter = (250 - ($tekstWprowadzany.length));
        $("#znaki").text(`Pozostało: ${$counter} znaków`);

    });
});
