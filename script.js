$(document).ready(function(event){
  $('.hamburger').click(function(){
    $('.navlinks').show('3000').focus();;
  })
  $('.accountOptions').click(function(){
    $('.accountButton').show('3000').focus();
  })
  $('.close').click(function(){
    $('.navlinks').hide('3000');
  })
  $('.closeButton').click(function(){
    $('.accountButton').hide('3000');
  })
  $('.navlinks, .accountButton').on('blur', function () {
    $(this).hide('3000');
  });
})
