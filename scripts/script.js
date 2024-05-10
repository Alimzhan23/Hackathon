

$(".video-button").click(function () {
    let modal = $(".modal")
    $("#video-button").click(function () {
    $('.modal-canvas').toggleClass("hidden");
    });
    $(".modal-close").click(function () { 
      $(".modal-canvas").toggleClass("hidden");
    });
});