//load up the whysibb window

$(document).ready(function() {
var wbbOpt = {
buttons: "bold,italic,underline,strike,sup,sub,|,img,link,|,code,quote,hide,|,justifyleft,justifycenter,justifyright,|,fontcolor,fontsize,|,bullist,numlist"
}
$("#editor").css("height", "350px");
$("#editor").wysibb(wbbOpt);
});
