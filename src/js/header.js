var slideFlag = false
$('.icon-btn').on('click', function (e) {
  e.stopPropagation()
  if (!slideFlag) {
    $('.link-list').slideDown()
  } else {
    $('.link-list').slideUp()
  }
  slideFlag = !slideFlag
})
$('body').on('click', function(e) {
  slideFlag = false
  $('.link-list').slideUp()
})