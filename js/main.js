$(document).ready(function() {
  console.log("JS good to go, sir!")

  $('#position-seeking').typeIt({
    strings: 'Full Stack Web Creator',
    speed: 100,
    startDelay: 400
  })
  .tiPause(500)
  .tiDelete(8)
  .tiType(' Developer')

  // 8 Bit Chat Hover
  $("#eightbitgif").hover(
    function() {
        $(this).attr("src", "img/8BitChat.gif");
    },
    function() {
        $(this).attr("src", "img/8BitChat.jpeg");
    }
  );

  /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#header', offset: 400});

    /* ======= Fixed header when scrolled ======= */

    $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 50) {
             $('#header').addClass('navbar-fixed-top');
         }
         else {
             $('#header').removeClass('navbar-fixed-top');
         }
    });

  /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){

        //store hash
        var target = this.hash;

        e.preventDefault();

		$('body').scrollTo(target, 800, {offset: -70, 'axis':'y', easing:'easeOutQuad'});
        //Collapse mobile menu after clicking
		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
	});

  // Highlight the top nav as scrolling occurs  -- NEW ONE
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });
})
