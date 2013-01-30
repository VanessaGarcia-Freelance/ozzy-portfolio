$(window).load(function () {
  
  $('one').toggle(function(){
    $(this).animate({'height': '100px'}, 100);
}, function(){
    $(this).animate({'height': '20px'}, 100);
});
  
});	