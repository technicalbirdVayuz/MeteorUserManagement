 import {UserPojo} from './../../../../modals/user/userPojo.js';
 import {Utils} from './../../../../utility/utils.js';
 import {PopupUtils} from './../../../../utility/PopupUtils.js';

Template.create_user.events({
	"click #save_user":function(event){
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
      
       var userPojo = new UserPojo();
        userPojo.setName(userName);
        userPojo.setEmail(emailText);
       $("#loader_span").removeClass("display_none_class");
      Meteor.call("insert_user_details",userPojo,function(error,result)
        {
            $("#loader_span").addClass("display_none_class");
       	if(result.code==300){
        		PopupUtils.showWarningPopup(result.message);
            //alert(result.message);
        	}else if(result.code ==200){
          PopupUtils.showSuccessPopup(result.message);
           //alert(result.message);
           FlowRouter.go("/admin/user-listing");
          }
       	
       }); 
	 
 }
})
