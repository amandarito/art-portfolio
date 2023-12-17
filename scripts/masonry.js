$(document).ready(function () {
  var $container = $('#container')
  var $imageHolder = $('.image-holder')
  $container.imagesLoaded(function () {
    console.log('images loaded')
    $container.masonry({
      itemSelector: '.grid-item',
      columnwidth: '.grid-sizer',
      gutter: 30,
      fitWidth: true
    })
  })
})
