var slideFlag = false
$('.icon-btn').on('click', function (e) {
  if (!slideFlag) {
    $('.link-list').slideDown()
  } else {
    $('.link-list').slideUp()
  }
  slideFlag = !slideFlag
})