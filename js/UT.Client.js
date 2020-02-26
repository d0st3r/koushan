$( document ).ready(function() {
    $(".copy-link").click(function(){
        var temp = $("<input>");
        $("body").append(temp);
        temp.val("https://koushan.net/koushan.swf?build=release").select();
        document.execCommand("copy");
        temp.remove();
        $(".copy-link").text("(Copied!)")
    });
});
