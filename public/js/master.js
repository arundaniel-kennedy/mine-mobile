
$(document).ready(function(){
  $(".nav-link").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

function mode_change(){
  if(document.documentElement.getAttribute('data-theme')=='light'){
    document.documentElement.setAttribute('data-theme','dark');
    document.getElementById('smode').classList.remove('fa-moon');
    document.getElementById('smode').classList.add('fa-sun');
    document.getElementById('html').src = 'skills/html_dark.svg';
    document.getElementById('css').src = 'skills/css_dark.svg';
    document.getElementById('js').src = 'skills/js_dark.svg';
    document.getElementById('flask').src = 'skills/flask_dark.svg';
    document.getElementById('jsp').src = 'skills/jsp_dark.svg';
    document.getElementById('node').src = 'skills/node_dark.svg';
  }else{
    document.documentElement.setAttribute('data-theme','light');
    document.getElementById('smode').classList.remove('fa-sun');
    document.getElementById('smode').classList.add('fa-moon');
    document.getElementById('html').src = 'skills/html.svg';
    document.getElementById('css').src = 'skills/css.svg';
    document.getElementById('js').src = 'skills/js.svg';
    document.getElementById('flask').src = 'skills/flask.svg';
    document.getElementById('jsp').src = 'skills/jsp.svg';
    document.getElementById('node').src = 'skills/node.svg';
  }
}

function mail_me(){
  var email = $("#email").val();
  var msg = $("#msg").val();

  $.ajax({
   url : "https://us-central1-mail-app-dany.cloudfunctions.net/app/mail",
   method : "POST",
   dataType : 'text',
   contentType : "application/x-www-form-urlencoded; charset=utf-8",
   async : false,
   cache : false,
   data : {email:email,msg:msg},
   success : function(data)
   {
     console.log(data);
     // if(type){
     //   $("#submit").removeClass("btn-light");
     // }else{
     //   $("#submit").removeClass("btn-dark");
     // }
     $("#submit").removeClass("btn-primary");
     $("#submit").addClass("btn-warning");
     $("#submit").html("<div class=\"spinner-border\" role=\"status\"><span class=\"sr-only\">Loading...</span></div>");

     setTimeout(function(){
       $("#submit").removeClass("btn-warning");
       $("#submit").addClass("btn-success");
       $("#submit").html("Mail Sent!");
     },1000);
   },
   error:function(data)
   {
     console.log(data);
     // if(type){
     //   $("#submit").removeClass("btn-light");
     // }else{
     //   $("#submit").removeClass("btn-dark");
     // }
     $("#submit").removeClass("btn-primary");
     $("#submit").addClass("btn-warning");
     $("#submit").html("<div class=\"spinner-border\" role=\"status\"><span class=\"sr-only\">Loading...</span></div>");

     setTimeout(function(){
       $("#submit").removeClass("btn-warning");
       $("#submit").addClass("btn-danger");
       $("#submit").html("Mail not Sent! mail me @ ad@weunitx.com");
      },1000);
   }
  });
}

$("#submit").hover(function(){
  $("#submit").removeClass("btn-primary");
  if(document.documentElement.getAttribute('data-theme')=='dark'){
    $("#submit").addClass("btn-light");
  }else{
    $("#submit").addClass("btn-dark");
  }

},
function(){
  if(document.documentElement.getAttribute('data-theme')=='dark'){
    $("#submit").removeClass("btn-light");
  }else{
    $("#submit").removeClass("btn-dark");
  }
  $("#submit").addClass("btn-primary");
});
