$(document).ready(function () {
    $("section").hide();
    $("#home").show();

    $("#homeBtn").click(function () {
        $("section:visible").hide();
        $("#home").show();
    });

    $("#resumeBtn").click(function () {
        $("section:visible").hide();
        $("#resume").show();
    });

    $("#menuBtn").click(function () {
        $("section:visible").hide();
        $("#menu").show();
    });

    $("#galleryBtn").click(function () {
        $("section:visible").hide();
        $("#gallery").show();
    });

    $("#infoBtn").click(function () {
        $("section:visible").hide();
        $("#info").show();
    });
});