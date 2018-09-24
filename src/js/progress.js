  $('#form').on('keyup change paste', 'input, select', function(){

var numValid = 0;
$("#form input[required], #form select[required]").each(function() {
    if (this.validity.valid) {
        numValid++;
    }
});

var progress = $(".progress-form"),
    progressMessage = $(".progress-message");

if (numValid == 0) {
    progress.attr("value", "0");
    progressMessage.text("Complete the form.");
}
if (numValid == 1) {
    progress.attr("value", "33");
    progressMessage.text("There you go, great start!");
    progress.addClass('light-green');
}
if (numValid == 2) {
    progress.attr("value", "66");
    progressMessage.text("Nothing can stop you now.");
    progress.addClass('green');
}
if (numValid == 3) {
    progress.attr("value", "100");
    progressMessage.text("Completed!");
    progress.addClass('dark-green');
}

});