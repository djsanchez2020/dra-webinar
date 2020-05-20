// Custom Script
// Developed by: Samson.Onna
// CopyRights : http://webthemez.com

/*
Theme by: WebThemez.com
Note: Please use our back link in your site
*/
$(function () {
  // var endDate = "March 29, 2020 20:09:00";
  var endDate = "May  22, 2020 19:00:00";
  var webinarUrl = 'https://meet.jit.si/webinar-4p';

  // $('.countdown.simple').countdown({ date: endDate });

  $('.countdown.styled').countdown({
    date: endDate,
    render: function (data) {
      $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>días</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>horas</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>minutos</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>segundos</span></div>");
    },
    onEnd: function () {
      console.log('redirect');
      $(this.el).addClass('ended');
      window.location.replace(webinarUrl);
    }
  });

  // $('.countdown.callback').countdown({
  //   date: +(new Date) + 10000,
  //   render: function (data) {
  //     $(this.el).text(this.leadingZeros(data.sec, 2) + " sec");
  //   },
  //   onEnd: function () {
  //     console.log('redirect');
  //     $(this.el).addClass('ended');
  //     window.location.replace(webinarUrl);
  //   }
  // }).on("click", function () {
  //   $(this).removeClass('ended').data('countdown').update(+(new Date) + 10000).start();
  // });



});


var customScripts = {

  onePageNav: function () {

    $('#mainNav').onePageNav({
      currentClass: 'active',
      changeHash: false,
      scrollSpeed: 950,
      scrollThreshold: 0.2,
      filter: '',
      easing: 'swing',
      begin: function () {
        //I get fired when the animation is starting
      },
      end: function () {
        //I get fired when the animation is ending
        if (!$('#main-nav ul li:first-child').hasClass('active')) {
          $('.header').addClass('addBg');
        } else {
          $('.header').removeClass('addBg');
        }

      },
      scrollChange: function ($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
        if (!$('#main-nav ul li:first-child').hasClass('active')) {
          $('.header').addClass('addBg');
        } else {
          $('.header').removeClass('addBg');
        }
      }
    });

    $("a[href='#top']").click(function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
    $("a[href='#basics']").click(function () {
      $("html, body").animate({ scrollTop: $('#services').offset().top }, "slow");
      return false;
    });
  },
  waySlide: function () {
    /* Waypoints Animations
   ------------------------------------------------------ */
    $('#services').waypoint(function () {
      $('#services .col-md-3').addClass('animated fadeInUp show');
    }, { offset: 800 });
    $('#aboutUs').waypoint(function () {
      $('#aboutUs').addClass('animated fadeInUp show');
    }, { offset: 800 });
    $('#contactUs').waypoint(function () {
      $('#contactUs .parlex-back').addClass('animated fadeInUp show');
    }, { offset: 800 });

  },
  init: function () {
    customScripts.onePageNav();
    customScripts.waySlide();
  }
}
$('document').ready(function () {
  $.backstretch([
    "images/slide/9.jpg",
    "images/slide/5.jpg",
    "images/slide/6.jpg",
    "images/slide/7.jpg",
    "images/slide/8.jpg"
  ], { duration: 4000, fade: 1250 });

  customScripts.init();
  $('#services .col-md-3, #features, #aboutUs, #clients, #portfolio, #plans, #contactUs .parlex-back').css('opacity', '0');
  $("#menuToggle").toggle(function () {
    $(this).find('i').removeClass('fa-bars').addClass('fa-remove');
    $('#mainNav').animate({ "right": "0px" }, "slow");
  }, function () {
    $('#mainNav').animate({ "right": "-200px" }, "slow");
    $(this).find('i').removeClass('fa-remove').addClass('fa-bars');
  });
});
