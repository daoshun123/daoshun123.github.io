$(function() {
  var pageSliderIndex = 0
  $("#page-slider .left_btn").click(function () {
    console.log(124);
    if (pageSliderIndex > 0) {
      pageSliderIndex--;
      $("#page-slider ul li").eq(pageSliderIndex + 1).fadeOut()
      $("#page-slider ul li").eq(pageSliderIndex).fadeIn()
    } else if (pageSliderIndex == 0) {
      pageSliderIndex = 3
      $("#page-slider ul li").eq(0).fadeOut()
      $("#page-slider ul li").eq(3).fadeIn()
    }
  })
  $("#page-slider .right_btn").click(function () {
    if (pageSliderIndex < 3) {
      pageSliderIndex++;
      $("#page-slider ul li").eq(pageSliderIndex - 1).fadeOut()
      $("#page-slider ul li").eq(pageSliderIndex).fadeIn()
    } else if (pageSliderIndex == 3) {
      pageSliderIndex = 0
      $("#page-slider ul li").eq(3).fadeOut()
      $("#page-slider ul li").eq(0).fadeIn()
    }
  })
});
