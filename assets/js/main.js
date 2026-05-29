/**
* Template Name: Squadfree - v2.2.0
* Template URL: https://bootstrapmade.com/squadfree-free-bootstrap-template-creative/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 31;
  if (window.matchMedia("(max-width: 991px)").matches) {
    scrolltoOffset += 30;
  }
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      e.preventDefault();
      if (target.length) {

        var scrollto = target.offset().top - scrolltoOffset;
        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');
    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });
    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });
    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });
  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');
      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });
  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function() {
    $('.venobox').venobox();
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: false,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

  // Brain Code Camp registration warning modal
  $(document).ready(function() {
    // Append the modal markup globally
    var modalHtml = `
      <div class="modal fade" id="bccWarningModal" tabindex="-1" role="dialog" aria-labelledby="bccWarningModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content" style="border-radius: 12px; border: none; box-shadow: 0 10px 30px rgba(0,0,0,0.15); overflow: hidden;">
            <div class="modal-header" style="background: linear-gradient(135deg, #14938C, #00587E); color: #fff; padding: 18px 24px; border: none;">
              <h5 class="modal-title d-flex align-items-center" id="bccWarningModalLabel" style="font-weight: 700; font-family: 'Poppins', sans-serif;">
                <i class="bx bx-error" style="font-size: 24px; margin-right: 8px;"></i>
                คำแนะนำก่อนเข้าสู่ระบบสอบ / Important Notice
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="color: #fff; opacity: 0.8; text-shadow: none; font-size: 28px; line-height: 0.8; padding: 18px 24px; margin: -18px -24px -18px auto;">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body" style="padding: 24px; font-family: 'Open Sans', sans-serif; font-size: 15px; color: #444; line-height: 1.6;">
              <p style="font-weight: 600; color: #00587E; font-size: 16px; margin-bottom: 12px;">
                💡 ขอแนะนำให้เปิดคู่มือขั้นตอนการสอบควบคู่กับการสมัคร
              </p>
              <p>
                โครงการ Brain Code Camp มีขั้นตอนการสมัครและทำข้อสอบคัดเลือกผ่านระบบสอบ ซึ่งมีรายละเอียดสำคัญที่ส่งผลต่อคะแนนและการคัดเลือกของคุณ
              </p>
              <div style="background-color: #f7f9fa; border-left: 4px solid #14938C; padding: 12px 16px; border-radius: 4px; margin-bottom: 0;">
                กรุณาเปิดอ่านและทำความเข้าใจ <strong>คู่มือขั้นตอนการสอบ (Instruction File)</strong> ก่อนเข้าสู่ระบบสมัครและทำข้อสอบ
              </div>
            </div>
            <div class="modal-footer" style="padding: 16px 24px; border: none; background-color: #f8f9fa; display: flex; justify-content: space-between; align-items: center; gap: 10px;">
              <a href="https://github.com/braincodecamp/BCC-exam-2026/blob/20ef19959665e10836dd8254a53d6675ecd6d294/bcc-2026-exam-instructions.pdf" target="_blank" id="bccModalInstBtn" class="btn btn-secondary d-flex align-items-center justify-content-center" style="background-color: #5d677a; border: none; border-radius: 6px; padding: 10px 16px; font-weight: 600; font-size: 14px; flex: 1; transition: all 0.2s;">
                <i class="bx bx-file" style="margin-right: 6px; font-size: 18px;"></i>
                เปิดคู่มือขั้นตอนการสอบ
              </a>
              <a href="https://braincode101.com" target="_blank" id="bccModalRegBtn" class="btn btn-primary d-flex align-items-center justify-content-center" style="background-color: #36A9AE; border: none; border-radius: 6px; padding: 10px 16px; font-weight: 600; font-size: 14px; flex: 1; transition: all 0.2s;">
                ไปที่ระบบสมัคร / ทำข้อสอบ
                <i class="bx bx-right-arrow-alt" style="margin-left: 6px; font-size: 18px;"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;

    $('body').append(modalHtml);

    // Dynamic hover effects for modal buttons
    $('#bccModalInstBtn').hover(
      function() { $(this).css('background-color', '#4a5466'); },
      function() { $(this).css('background-color', '#5d677a'); }
    );
    $('#bccModalRegBtn').hover(
      function() { $(this).css('background-color', '#2a8387'); },
      function() { $(this).css('background-color', '#36A9AE'); }
    );

    // Intercept BCC click to show modal
    $(document).on('click', 'a.bcc-reg-button2[href*="braincode101.com"]', function(e) {
      e.preventDefault();
      $('#bccWarningModal').modal('show');
    });

    // Close modal when user clicks either button inside the modal
    $(document).on('click', '#bccModalInstBtn, #bccModalRegBtn', function() {
      $('#bccWarningModal').modal('hide');
    });
  });

})(jQuery);