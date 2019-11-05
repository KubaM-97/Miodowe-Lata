$(function () {
    // ScrollToTop Button
    $(window).on("scroll", function () {

        if ($(this).scrollTop() > 700) {
            $(".scroll").fadeIn();
        } else {
            $(".scroll").fadeOut();
        }

    });

    //    Instead of html{scroll-behavior: smooth;} in main.css
    //
    //    $(".scroll").on('click',function() {
    //    $([document.documentElement, document.body]).animate({
    //        scrollTop: $("body").offset().top}, 1100);
    //});


    // Quiz
    $(".quiz_solution").hide();

    //coloring user's answers
    $("input:radio").on("click", function () {

        if ($(this).prop("checked", true)) {
            $(this).parent().parent().siblings().children().removeClass("choose");
            $(this).parent().addClass("choose");
        }

    });

    //submitting the quiz
    // $(".quiz_form").on("submit", function (e) {
    $(".go").on("click", function (e) {
        e.preventDefault();
        if ($(".choose").length < 10) {
            alert("Nie zaznaczono wszystkich odpowiedzi!");
            return;
        }
        let $points = $(".ans.good.choose").length;
        $("#pkt").append(`Brawo! Zdobyłeś ${$points} pkt!`);

        $(".ans.good").addClass("green");
        $(".ans.choose").addClass("red");

        $("input:radio").prop("disabled", true);
        $(".quiz_solution").fadeIn();

        $([document.documentElement, document.body]).animate({
            scrollTop: $("body").offset().top
        }, 1100);

        $(this).hide();
        //answers
        $(".quiz_section").each(function () {


            let $span = $('<span></span>');
            $span.insertAfter($(this).find(".question"));


            let $value1 = $(this).find(".good").children().val();
            let $value2 = $(this).find(".choose").children().val();


            if ($value2 === $value1) {
                $(this).find($("span")).text(`Dobrze! Poprawna odpowiedź to ${$value1}.`);
                $(this).find($("span")).addClass("correct");
            } else {
                $(this).find($("span")).text(`Źle! Zaznaczono:  ${$value2}. Poprawna odpowiedź to: ${$value1}.`);
                $(this).find($("span")).addClass("incorrect");
            }
        });

        $(".quiz_header p").hide();
    });


    //index.html - laughtrack audio
    const $imgred = $("img.laugh");
    $($imgred).on("click", function () {

        var $audio = $("#play");
        $audio.volume = 0.1;
        $(this).toggleClass("sound");
        $audio.get(0).pause();


        if ($(this).hasClass("sound")) {
            $(this).attr("src", "img/Glowna/indexgreen.png");
            $audio.get(0).play();
            $(this).attr("alt", "Odtwarzanie w trakcie");
        } else {
            $(this).attr("src", "img/Glowna/indexred.png");
            $(this).attr("alt", "Odtwarzanie zatrzymane");
        }
        $audio.on('ended', function () {
            $($imgred).removeClass("sound");
            $($imgred).attr("src", "img/Glowna/indexred.png");
            $($imgred).attr("alt", "Odtwarzanie zatrzymane");

        });
    });

    //index.html - first image
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


    //subiektywne.html - links
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
    
    //kontakt.html - tel
    $("input[type=tel]").on("blur", function () {
        let $text = $(this).val();
        let $re = /^(\d{7}|\d{9})$/;
        if (!($re.exec($text))) {
            const $div = $('<div class="feedback"></div>');
            $div.text("Proszę wprowadzić poprawny numer telefonu.")
                     .addClass("feedback")
                     .insertAfter($("input[type=tel]"));
            $(this).on("focus", function () {
        $(".feedback").hide();
    });
        }
    });

    //kontakt.html - email
    $("input[type=email]").on("blur", function () {
        let $text = $(this).val();
        let $re = /^[\w-\.]+@[\w-+]+\.([a-z\.]+)$/i;
        if (!($re.exec($text))) {
            const $div = $('<div class="feedback"></div>');
            $div.text("Proszę wprowadzić poprawny adres e-mail.")
                     .addClass("feedback")
                     .insertAfter($("input[type=email]"));
            $(this).on("focus", function () {
        $(".feedback").hide();
    });
        }
    



    });

    //kontakt.html - textarea
    $("textarea").on("input", function () {
        let $textInserted = $(this).val();
        let $counter = (250 - ($textInserted.length));
        $("#chars").text(`Pozostało: ${$counter} znaków`);

    });
});
