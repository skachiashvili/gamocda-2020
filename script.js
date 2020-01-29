var accordWithPage =  function() {




  $(function () {

    faqDiv.on("click", function() {

      var hideSec = 'faq-hide';
      var $this = $(this),
          $id = $this.attr('id'),
          $class = '.' + $('.about-' + $id).attr('class').replace(hideSec, '');

      $('#faq-wrapper').addClass(hideSec);
      $('.about-' + $id).removeClass(hideSec);
      $('div[class*=about]').not($class).addClass(hideSec);

    });

  });







  $(function () {

    var expand = 'expanded';
    var content = $('.faq-content');
    //FAQ Accordion
    $('.faq-accordion > li > a').click(function (e) {
      e.preventDefault();
      if ($(this).hasClass(expand)) {
        $(this).removeClass(expand);

        $(this).parent().children('ul').stop(true, true).slideUp();
      } else {

        $('.faq-accordion > li > a.expanded').removeClass(expand);
        $(this).addClass(expand);
        content.filter(":visible").slideUp();
        $(this).parent().children('ul').stop(true, true).slideDown();
      }
    });

    content.hide();

  });

}
accordWithPage();
