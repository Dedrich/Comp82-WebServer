//Checks for .webp image support, I remember always seeing Simzer needing to update firefox, firefox being one of the browsers that don't support .webp.
function hasWebP() {
  var rv = $.Deferred();
  var img = new Image();
  img.onload = function() { rv.resolve(); };
  img.onerror = function() { rv.reject(); };
  img.src = 'http://www.gstatic.com/webp/gallery/1.webp';
  return rv.promise();
}

//Changes images depending on above condition.
hasWebP().then(function() {
  // ... code to take advantage of WebP ...
}, function() {
  // ... code to deal with the lack of WebP ...
});

//Changes song and image depending on what was clicked
$(document).ready(function(){
    $(".s1").click(function(){
        $("#v1").addClass("opacityOne");
        $("#v2").removeClass("opacityOne");
        $("#v3").removeClass("opacityOne");
        $("#v4").removeClass("opacityOne");
        $("#v5").removeClass("opacityOne");
        $("#v6").removeClass("opacityOne");
        $("#v7").removeClass("opacityOne");
        $("#v8").removeClass("opacityOne");
        $("#v9").removeClass("opacityOne");
        $("#v10").removeClass("opacityOne");
        $(".portrait").css("background-image","url(../images/LloydPrice.webp)")
        $("#music").attr('src','mp3/StaggerLee.m4a')
    });
    
    $(".s2").click(function(){
        $("#v1").removeClass("opacityOne");
        $("#v2").addClass("opacityOne");
        $("#v3").removeClass("opacityOne");
        $("#v4").removeClass("opacityOne");
        $("#v5").removeClass("opacityOne");
        $("#v6").removeClass("opacityOne");
        $("#v7").removeClass("opacityOne");
        $("#v8").removeClass("opacityOne");
        $("#v9").removeClass("opacityOne");
        $("#v10").removeClass("opacityOne");
        $(".portrait").css("background-image","url(../images/BobbyDarin.webp)")
        $("#music").attr('src','mp3/DreamLover.ogg')
    });
    
    $(".s3").click(function(){
        $("#v1").removeClass("opacityOne");
        $("#v2").removeClass("opacityOne");
        $("#v3").addClass("opacityOne");
        $("#v4").removeClass("opacityOne");
        $("#v5").removeClass("opacityOne");
        $("#v6").removeClass("opacityOne");
        $("#v7").removeClass("opacityOne");
        $("#v8").removeClass("opacityOne");
        $("#v9").removeClass("opacityOne");
        $("#v10").removeClass("opacityOne");
        $(".portrait").css("background-image","url(../images/BenEKing.webp)")
        $("#music").attr('src','mp3/StandByMe.ogg')
    });

    $(".s4").click(function(){
        $("#v1").removeClass("opacityOne");
        $("#v2").removeClass("opacityOne");
        $("#v3").removeClass("opacityOne");
        $("#v4").addClass("opacityOne");
        $("#v5").removeClass("opacityOne");
        $("#v6").removeClass("opacityOne");
        $("#v7").removeClass("opacityOne");
        $("#v8").removeClass("opacityOne");
        $("#v9").removeClass("opacityOne");
        $("#v10").removeClass("opacityOne");
        $(".portrait").css("background-image","url(../images/Elvis.webp)")
        $("#music").attr('src','mp3/BlueSuedeShoes.m4a')
    });   
    
    $(".s5").click(function(){
        $("#v1").removeClass("opacityOne");
        $("#v2").removeClass("opacityOne");
        $("#v3").removeClass("opacityOne");
        $("#v4").removeClass("opacityOne");
        $("#v5").addClass("opacityOne");
        $("#v6").removeClass("opacityOne");
        $("#v7").removeClass("opacityOne");
        $("#v8").removeClass("opacityOne");
        $("#v9").removeClass("opacityOne");
        $("#v10").removeClass("opacityOne");
        $(".portrait").css("background-image","url(../images/Franky.webp)")
        $("#music").attr('src','mp3/EyesOffYou.m4a')
    }); 
    
    $(".s6").click(function(){
        $("#v1").removeClass("opacityOne");
        $("#v2").removeClass("opacityOne");
        $("#v3").removeClass("opacityOne");
        $("#v4").removeClass("opacityOne");
        $("#v5").removeClass("opacityOne");
        $("#v6").addClass("opacityOne");
        $("#v7").removeClass("opacityOne");
        $("#v8").removeClass("opacityOne");
        $("#v9").removeClass("opacityOne");
        $("#v10").removeClass("opacityOne");
        $(".portrait").css("background-image","url(../images/Danleers.webp)")
        $("#music").attr('src','mp3/SummerNight.m4a')
    }); 
    
    $(".s7").click(function(){
        $("#v1").removeClass("opacityOne");
        $("#v2").removeClass("opacityOne");
        $("#v3").removeClass("opacityOne");
        $("#v4").removeClass("opacityOne");
        $("#v5").removeClass("opacityOne");
        $("#v6").removeClass("opacityOne");
        $("#v7").addClass("opacityOne");
        $("#v8").removeClass("opacityOne");
        $("#v9").removeClass("opacityOne");
        $("#v10").removeClass("opacityOne");
        $(".portrait").css("background-image","url(../images/Penguins.webp)")
        $("#music").attr('src','mp3/EarthAngel.m4a')
    }); 
     
    $(".s8").click(function(){
        $("#v1").removeClass("opacityOne");
        $("#v2").removeClass("opacityOne");
        $("#v3").removeClass("opacityOne");
        $("#v4").removeClass("opacityOne");
        $("#v5").removeClass("opacityOne");
        $("#v6").removeClass("opacityOne");
        $("#v7").removeClass("opacityOne");
        $("#v8").addClass("opacityOne");
        $("#v9").removeClass("opacityOne");
        $("#v10").removeClass("opacityOne");
        $(".portrait").css("background-image","url(../images/CurtisLee.webp)")
        $("#music").attr('src','mp3/AngelEyes.m4a')
    });
     
    $(".s9").click(function(){
        $("#v1").removeClass("opacityOne");
        $("#v2").removeClass("opacityOne");
        $("#v3").removeClass("opacityOne");
        $("#v4").removeClass("opacityOne");
        $("#v5").removeClass("opacityOne");
        $("#v6").removeClass("opacityOne");
        $("#v7").removeClass("opacityOne");
        $("#v8").removeClass("opacityOne");
        $("#v9").addClass("opacityOne");
        $("#v10").removeClass("opacityOne");
        $(".portrait").css("background-image","url(../images/Dion.webp)")
        $("#music").attr('src','mp3/Teenager.ogg')
    });
    
    $(".s10").click(function(){
        $("#v1").removeClass("opacityOne");
        $("#v2").removeClass("opacityOne");
        $("#v3").removeClass("opacityOne");
        $("#v4").removeClass("opacityOne");
        $("#v5").removeClass("opacityOne");
        $("#v6").removeClass("opacityOne");
        $("#v7").removeClass("opacityOne");
        $("#v8").removeClass("opacityOne");
        $("#v9").removeClass("opacityOne");
        $("#v10").addClass("opacityOne");
        $(".portrait").css("background-image","url(../images/Paul.webp)")
        $("#music").attr('src','mp3/Shoulder.ogg')
    });
});