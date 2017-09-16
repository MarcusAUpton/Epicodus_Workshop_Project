$(document).ready(function(){
  //Make pressing enter activate the button
  $(document).bind('keypress', function(e){
    if(e.keyCode==13){
      $('#goal-button').trigger('click');
    }
  })

  $("#goal-button").click(function(){
    $("#goal-list").append("<li class='list-item'>" + $("#new-goal").val() + "</li>");
    $("#new-goal").val("");
  })
})
