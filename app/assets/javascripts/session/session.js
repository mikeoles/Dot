//Takes email from field and uses Firebase to send a reset 
var ref = new Firebase("https://dot2015.firebaseio.com");
var userID = "";
var submitted = 0;

function resetpassword() {
    var email;
    $( "#email" )
      .keyup(function() {
        email = $( this ).val();
      })
      .keyup();
    var ref = new Firebase("https://dot2015.firebaseio.com");
    ref.resetPassword({
      email : email
    }, function(error) {
      if (error === null) {
        $( "#canreset" ).text( "Reset email sent to: " + email );
      } else {
          $( "#canreset" ).text("Error sending password reset email.  Please make sure correct email is entered in the form above");
      }
    });
}

//Log In

$( "#new_user" ).submit(function(event) {
    
    submitted = 1;
    
    var email, password;
    
    $( "#username" )
      .keyup(function() {
        email = $( this ).val();
      })
      .keyup(); 
    $( "#password" )
      .keyup(function() {
        password = $( this ).val();
      })
      .keyup();

    ref.authWithPassword({
      email    : email,
      password : password
    }, authHandler);

    function authHandler(error, authData) {
      if (error) {
        $( "#canreset" ).text("Login Failed!", error);
        event.preventDefault();
      } else {
        userID = authData.uid;
        var usersRef = ref.child("users");
        var currentUserRef = usersRef.child(userID);
        
        var name = currentUserRef.get("name");
        var verified = currentUserRef.get("emailVerified");      
        if(verified.parseInt() === 0){
            $(".login").hide();
            $('.verify').show();
            event.preventDefault();
        }else{
            $("#name").attr("value",name);
        }
      }
    }
});


//VERIFY

$(".verLink").click(function(event) {   
      
     var userVerCode, verCode;

    $( "#verCode" )
      .keyup(function() {
        userVerCode = $( this ).val();
      })
      .keyup(); 

    var usersRef = ref.child("users");
    var currentUserRef = usersRef.child(userID);

    verCode = currentUserRef.get("name");
    
    $( "#update" ).text(verCode);

    if(userVerCode.parseInt()===verCode){
        var usersRef = ref.child("users");
        var currentUserRef = usersRef.child(userID);
        currentUserRef.update({
            emailVerified: 1
        });
        $("#new_user").submit();
        $(".verLink").submit();
    }else{
        $( "#test" ).text("Invalid Verificaiton Code");
        event.preventDefault();
    }

});

$(".resend").submit(function(event) {   
        
    verCode = Math.floor(Math.random()*90000000) + 10000000;//validation code (randomly generated)

    var ref = new Firebase("https://dot2015.firebaseio.com");
    var usersRef = ref.child("users");
    var curUserRef = usersRef.child(userID);
    curUserRef.update({
      verificationCode: verCode
    }); 
    
    email = curUserRef.get("email");
    
    var sendgrid  = require('sendgrid')('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');
    sendgrid.send({
      to:       email,
      from:     'dotsince2015@gmail.com',
      subject:  'Sign Up For Dot',
      text:     'Hello welcome to Dot! Your Verification Code is:' + verCode
    }, function(err, json) {
      if (err) { return console.error(err); }
      console.log(json);
    });
    
    $( "#test" ).text("New Verification Code Sent. Check Your Email");

});

$(document).on('page:load', function() {   
    if(submitted === 0){
        $(".verify").hide();
        $('.signup').show();       
    }else{
        $(".signup").hide();
        $('.verify').show();       
    }
});
$(document).ready(function() {   
    if(submitted === 0){
        $(".verify").hide();
        $('.signup').show();       
    }else{
        $(".signup").hide();
        $('.verify').show();       
    }
    $('#forgotpw').mouseenter(function(){
        $(this).fadeTo('fast',1);
    });
    $('#forgotpw').mouseleave(function(){
        $(this).fadeTo('fast',.75);
    });
});