$(document).ready(function(){
  $('.hamburger').click(function(){
    $('.navlinks').show('3000');
  })
  $('.accountOptions').click(function(){
    $('.accountButton').show('3000');
  })
  $('.close').click(function(){
    $('.navlinks').hide('3000');
  })
  $('.closeButton').click(function(){
    $('.accountButton').hide('3000');
    // console.log('closed');
  })
})
