$(document).ready(function(){
    $("#btn1").click(function(){
      $("ol").append(`<li>${$("#inp1").val()}</li>`);
    });
});
