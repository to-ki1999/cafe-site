$(function () {
    const $items = $(".menu-item li");
    let shown = false;

    $(window).on("scroll", function () {
        const menuTop = $("#menu").offset().top;
        const scrollBottom = $(window).scrollTop() + $(window).height();

        if (!shown && scrollBottom > menuTop + 100) {
            $items.each(function (i) {
                setTimeout(() => {
                    $(this).find("img").addClass("show");
                }, i * 300);
            });
            shown = true;
        }
    });
});


    
    $(".toggle-btn").on("click", function () {
        $("header").toggleClass("open");
    });
    $("#mask").on("click", function () {
        $("header").toggleClass("open");
    });
    $(".navi a").on("click", function () {
        $("header").removeClass("open");
    });

    