
//insert text into the preview div on button click
$(function () {
    $("#previewbutton").click(function () {
        $("#preview").html($("#editor").htmlcode());
             }
        );
    });


//Live preview function
/*
$(function () {
    $(".wysibb-body").on('keyUp', function () {
        $("#preview").html($("#editor").htmlcode());
    });        
});
*/