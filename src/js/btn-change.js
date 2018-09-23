
 $('.btn').click(function() {
    var $this = $(this);
    if ($this.hasClass('btn-simple')) {
        $this.removeClass();
    } else if ($this.hasClass('btn-link')) {
        $this.removeClass('btn-link').addClass('btn-simple');
    } else {
        $this.addClass('btn-simple');
    }
});