$(function(){
  $('#jqlistener').on('click', function(e){
    e.preventDefault();  //stop the browser from following
    window.location.href = 'download/mp3.zip';
  });
});
