//меню
$(document).on('click', '.js-menu-opener', function () {
  $('body').css('overflow', 'hidden');
  $('.main-menu').addClass('is-open');
  return false;
});

$(document).on('click', '.js-menu-closer', function () {
  $('body').css('overflow', '');
  $('.main-menu').removeClass('is-open');
  return false;
});


//аккордион
$(document).on('click', '.accordion__toggler', function () {
  $(this).closest('.accordion').toggleClass('is-open');
  $(this).closest('.accordion').find('.accordion__body').slideToggle();
  return false;
});