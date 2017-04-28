var ref = new Firebase("https://dot2015.firebaseio.com");
var verCode = 0;
var userID = "";
var submitted = 0;

function signup() {
    
    submitted = 1;
    
     //Get User Values
     var email, password, name;
    $( "#name" )
      .keyup(function() {
        name = $( this ).val();
      })
      .keyup();      
    $( "#email")
      .keyup(function() {
        email = $( this ).val();
      })
      .keyup(); 
    $( "#password" )
      .keyup(function() {
        password = $( this ).val();
      })
      .keyup(); 
      
    //Check user values  
    var domain = email.substr(email.length - 4); //Last 4 digits of email
    if(domain!==".edu"){
        $( "#signupupdate" ).text("Please sign up with your .edu email address");
        return;
    }
    
    if(password.length<6){
        $( "#signupupdate" ).text("Password should be at least 6 characters");
        return;
    }
    
    if(name.length<5){
        $( "#signupupdate" ).text("Please enter full name");
        return;
    }    
    
    //Firebase create user
    ref.createUser({
        email    : email,
        password : password
    }, function(error, userData) {
        if (error) {
            switch (error.code) {
                case "EMAIL_TAKEN":
                    $( "#signupupdate" ).text( "The new user account cannot be created because the email is already in use.", email);
                break;
                case "INVALID_EMAIL":
                    $( "#signupupdate" ).text( "The specified email is not a valid email.");
                break;
                default:
                    $( "#signupupdate" ).text( "Error creating user:", error);
                }
        } else {
            verCode = Math.floor(Math.random()*90000000) + 10000000;//validation code (randomly generated)
            var usersRef = ref.child("users");
            var userInfo = {
                    emailAddress: email,
                    emailVerified: 0,
                    name: name,
                    numberOfOrders: 0,
                    numberOfSales: 0,
                    reputation: 10,
                    school: "Pitt",
                    uid: userData.uid,
                    verificationCode: verCode
            };  
            userID = userData.uid;
            usersRef.child(userID).set(userInfo);
    
            //Sign Up Email 
            var sendgrid  = require('sendgrid')('dot2015','dotit2015');
            var email     = new sendgrid.Email({
                to:       email,
                from:     'dotsince2015@gmail.com',
                subject:  'Sign up for dot',
                text:     'Hello, welcome to Dot!',
                html:     ''
            });
            sendgrid.send(email, function(err, json) {
              if (err) { return console.error(err); }
              console.log(json);
            });            
            
            $(".signup").hide();
            $('.verify').show();

        }
    });
}

//VERIFY

$(".verLink").submit(function(event) {   
      
    var userVerCode;

    //Get User Input
    $( "#verCode" )
      .keyup(function() {
        userVerCode = $( this ).val();
      })
      .keyup(); 
    
    //Check verificaiton code and set verification
    if(userVerCode.parseInt()===verCode){
        var usersRef = ref.child("users");
        var curUserRef = usersRef.child(userID);
        curUserRef.update({
          emailVerified: "1"
        });        
        
        $(".verLink").submit();
    }else{
        $( "#signupupdate" ).text("Invalid Verificaiton");
        event.preventDefault();
    }
});


function resend() {
        
    //Update verification home    
    verCode = Math.floor(Math.random()*90000000) + 10000000;//validation code (randomly generated)
    var usersRef = ref.child("users");
    var curUserRef = usersRef.child(userID);
    curUserRef.update({
      verificationCode: verCode
    }); 
    
    //Send email
    email = curUserRef.get("email");    
    var sendgrid  = require('sendgrid')('dot2015','dotit2015');
    var email     = new sendgrid.Email({
        to:       email,
        from:     'dotsince2015@gmail.com',
        subject:  'Sign up for dot',
        text:     'Hello, welcome to Dot!'
    });
    sendgrid.send(email, function(err, json) {
      if (err) { return console.error(err); }
      console.log(json);
    }); 
    
    $( "#signupupdate" ).text("New Verification Code Sent. Check Your Email");
}

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
});