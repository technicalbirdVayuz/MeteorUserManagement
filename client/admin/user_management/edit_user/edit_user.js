import {User} from './../../../../collections/user/user.js';
import { Base64 } from 'meteor/ostrio:base64';
import {UserPojo} from './../../../../modals/user/userPojo.js';
import {Utils} from './../../../../utility/utils.js';
 import {PopupUtils} from './../../../../utility/PopupUtils.js';


// //FOR COUNTRY LISTING IN COMPANY LISTING PAGE
Template.edit_user.helpers({
    user(){   
      var encodedId  = FlowRouter.current().params.userId;
      var decodedId = Base64.decode(encodedId);
      var user = User.find({"user_id":decodedId}).fetch();
      return user;
   }
})

// // FOR UPDATING COMPANY
Template.edit_user.events({
  
	"click #update_user":function(event){
		event.preventDefault();  
		var userName = $("#user_name").val();
		if(userName == ""){
      $("#invalid_name").removeClass("display_hidden");
      return false;
    }else{
      if(!($("#invalid_name").hasClass("display_hidden")))
        $("#invalid_name").addClass("display_hidden"); 
       }
    
    var emailText = $("#example_email").val();    
    if(emailText==""){   
      $("#email_error").removeClass("display_none_class");
      $("#email_div").addClass("error");
      return false;
    }else if(!Utils.validateEmail(emailText)){
      $("#email_div").addClass("error");
      $("#email_error").removeClass("display_none_class");
      $("#email_error").text("Please enter a valid Email Address");
    }else {
      $("#email_error").addClass("display_none_class");
    }
      
       var encodedId  = FlowRouter.current().params.userId;
       var decodedId = Base64.decode(encodedId);

       var userPojo = new UserPojo();
        userPojo.setUserId(decodedId);
        userPojo.setName(userName);
        userPojo.setEmail(emailText);
       $("#loader_span").removeClass("display_none_class");
      Meteor.call("update_user_details",userPojo,function(error,result)
        {
            $("#loader_span").addClass("display_none_class");
       	if(result.code==300){
        		PopupUtils.showWarningPopup(result.message);
        	}else if(result.code ==200)
        	{
             PopupUtils.showSuccessPopup(result.message);
           FlowRouter.go("/admin/user-listing");
          }
       	
       }); 
	}
})
