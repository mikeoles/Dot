Parse.initialize("HqPdSCfdrgxIhlVRTvgVSPYqVvoxwD9h8B7C6GTv", "7hEXq39F3vb45ML23Voie1m7U8qyhXoD6XOA60qD");

// Input Lock
$('textarea').blur(function () {
    $('#hire textarea').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('textarea + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('textarea + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:first-child input').blur(function () {
    $('#hire .field:first-child input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:nth-child(2) input').blur(function () {
    $('#hire .field:nth-child(2) input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:nth-child(2) input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:nth-child(2) input + label + span').css({'opacity': 0});
        }
    });
});

$( "#messagesent" ).click(function() {
    send();
 });

function send(){
    
    Parse.initialize("HqPdSCfdrgxIhlVRTvgVSPYqVvoxwD9h8B7C6GTv", "7hEXq39F3vb45ML23Voie1m7U8qyhXoD6XOA60qD");
    
    var name, email, message;
    $( "#name" )
      .keyup(function() {
        name = $( this ).val();
      })
      .keyup(); 
    $( "#email" )
      .keyup(function() {
        email = $( this ).val();
      })
    $( "#msg" )
      .keyup(function() {
        message = $( this ).val();
      })
      .keyup();
      
    var Feedback = Parse.Object.extend("Feedback");
    var feedback = new Feedback();

    feedback.set("name", name);
    feedback.set("email", email);
    feedback.set("message", message);

    feedback.save(null, {
      success: function(feedback) {
        alert('Thanks for your feedback, Message Sent!');
      },
      error: function(feedback, error) {
        alert('Sorry Feedback Not Sent: ' + feedback.message);
      }
    });
}