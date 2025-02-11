$(function(){
  $('.modal-notice').click(function(){
    $('.modal').stop().fadeIn()
  })
  $('.btn-close').click(function(){
    $('.modal').stop().fadeOut()
  })
})