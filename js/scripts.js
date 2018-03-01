$(document).ready(function(){
    $(".s1").click(function(){
        $("#v1").addClass("opacityOne");
        $("#v2").removeClass("opacityOne");
        $(".portrait").css("background-image","url(../images/LloydPrice.jpg)")
        $("#music").attr('src','mp3/StaggerLee.m4a')
    });
    
    $(".s2").click(function(){
        $("#v2").addClass("opacityOne");
        $("#v1").removeClass("opacityOne");
        $(".portrait").css("background-image","url(../images/BobbyDarin.jpg)")
        $("#music").attr('src','mp3/DreamLover.ogg')
    });
});