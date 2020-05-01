import { Template } from 'meteor/templating';
import {UserPojo} from './../../../../modals/user/userPojo.js';
import {User} from './../../../../collections/user/user.js';
import { Base64 } from 'meteor/ostrio:base64';
 import {PopupUtils} from './../../../../utility/PopupUtils.js';

Template.user_listing.helpers({
	
  fetch_all_user(){
  	 var user = User.find({}).fetch();
    return user;
    }
});

Template.user_listing.events({

    'click .change_status':function(event){
		event.preventDefault();
		var userPojo = new UserPojo(); 
		userPojo.setUserId(this.user_id);
		var isActive = this.is_active;
		isActive = !isActive;
		userPojo.setStatus(isActive);
		Meteor.call("change_user_status",userPojo,function(error,result){
			if(error){
				PopupUtils.showErrorPopup("Something went wrong!");
			}else{
				PopupUtils.showSuccessPopup("Status Changed Successfully");
			}
		})
	},

	'click .edit_user': function(events,instanse){
	     var userId = this.user_id;
	     var encodedId = Base64.encode(userId);
	     FlowRouter.go(`/admin/edit-user/${encodedId}`);
	 }
})