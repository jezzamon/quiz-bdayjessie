$(document).ready(function() {
    var videoID= 'videoclip';
    var sourceID = 'mp4video';
   
    
    
    $(".questions").on("click","a", function(event) {
    event.preventDefault();
    var $video = $(this).data("vidsource");
    if ($(this).hasClass("correct")) {
       $("#overlay").fadeIn("slow","linear");
        $("#"+videoID).get(0).pause();
        $("#"+sourceID).attr("src", $video);
        $("#"+videoID).get(0).load();
        $("#"+videoID).get(0).play();
    }
    else {
    $(".wronganswercontainer").toggleClass("open");
    setTimeout(function() {
        $(".wronganswercontainer").toggleClass("open");},2000);
            
        
    }
    
})
    
    
/*close modal window*/
$("#close").click(function() {
    $("#overlay").fadeOut("slow","linear");
  $("video").get(0).pause(); //pause if playing
})


});