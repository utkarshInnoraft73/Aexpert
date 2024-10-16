$(document).ready(function (event) {
  $('.hamburger').click(function () {
    $('.nav_content__navlinks').show('3000').focus();
  })
  $('.nav_content__account').click(function () {
    $('.nav_content__account_button').show('3000').focus();
  })
  $('.nav_content__navlinks--close').click(function () {
    $('.nav_content__navlinks').hide('3000');
  })
  $('.closeButton').click(function () {
    $('.nav_content__account_button').hide('3000');
  })
  $('.nav_content__navlinks, .nav_content__account_button').on('blur', function () {
    $(this).hide('3000');
  });
})
