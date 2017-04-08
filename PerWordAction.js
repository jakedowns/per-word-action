(function(){
  $.fn.perWordAction = function(onPerWord){
    var $el = this;

    // idempotent wrap
    if(!$el.attr('data-pwa')){
      $el.attr('data-pwa', true);
      wrap($el);
    }

    // Wrap each word in a unique span for line-checkage
    // http://stackoverflow.com/questions/12105059/how-to-wrap-all-text-into-unique-span-tag
    var count = 0;
    function wrap(el) {
      $(el).filter(':not(script)').contents().each(function () {
        if (this.nodeType === Node.ELEMENT_NODE) {
          wrap(this);
        } else if (this.nodeType === Node.TEXT_NODE && !this.nodeValue.match(/^\s+$/m)) {
          $(this).replaceWith($.map(this.nodeValue.split(/(\S+)/), function (w) {
            return w.match(/^\s*$/) ? document.createTextNode(w) : $('<span>', {class: 'pwa-word', text: w}).get();
          }));
        }
      });
    }

    // our word stepper + line numberer
    function callPerWord(){
      var refPos = 0;
      var prevPos = null;
      var line = 0;

      $('.pwa-word', $el).each(function(){
        var $this = $(this);

        refPos = $this.offset().top;

        if(refPos !== prevPos){
          // next line
          line++;
        }else{
          // same line
        }
        $this.attr('pwa-line', line);

        onPerWord.call($el, $this, line);

        prevPos = refPos;

        $this = null;
      });
    }

    // do per-word loop and call callback
    callPerWord();
    $el.trigger('pwa-wrap-complete');
    $el = null;
  }
})();