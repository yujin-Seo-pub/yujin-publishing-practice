// $('.title').click(function(){
//   $(this).toggleClass('active')
//   $(this).siblings('.title').removeClass('active')
//   $(this).siblings('.content').stop().slideUp()
//   $(this).next().stop().slideToggle()
// })

$(function(){
  $('.content').eq(0).show()
  $('.title').click(function(){
    $(this).toggleClass('active')
    $(this).siblings('.title').removeClass('active')
    $(this).siblings('.content').stop().slideUp()
    $(this).next().stop().slideToggle()
  })
})