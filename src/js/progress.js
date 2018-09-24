  $('#form').on('keyup change paste', 'input, select', function(){

var numValid = 0;
$("#form input[required], #form select[required]").each(function() {
    if (this.validity.valid) {
        numValid++;
    }
});

var progress = $(".progress"),
    progressMessage = $(".progress-message");

if (numValid == 0) {
    progress.attr("value", "0");
    progressMessage.text("Complete the form.");
}
if (numValid == 1) {
    progress.attr("value", "20");
    progressMessage.text("There you go, great start!");
}
if (numValid == 2) {
    progress.attr("value", "40");
    progressMessage.text("Nothing can stop you now.");
}
if (numValid == 3) {
    progress.attr("value", "80");
    progressMessage.text("SO CLOSE.");
}
if (numValid == 4) {
    progress.attr("value", "100");
    progressMessage.text("They are going to write songs about you.");
}

});