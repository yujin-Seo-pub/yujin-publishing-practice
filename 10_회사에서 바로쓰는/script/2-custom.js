$(function(){
  $('.title').click(function(){
    $(this).toggleClass('active')
    $(this).siblings().toggleClass('active')
  })
})