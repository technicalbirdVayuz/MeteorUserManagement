import { Meteor } from 'meteor/meteor';
import {User} from './../../collections/user/user.js';

Meteor.publish('fetch_all_user', function() {
      return User.find({});
})
Meteor.publish('fetch_user_based_on_id', function(decodedId) {
      return User.find({"user_id":decodedId});
})
Meteor.methods({
  insert_user_details(userPojo){
    var checkIfCompanyExists = User.find({"email":userPojo.email}).count();
    var password  = Math.random().toString(36).slice(-6);
     if(checkIfCompanyExists != 0){
        var result = {};
        result.code =300;
        result.message ="Email already exists !";
       return result;
      }else{
        var user_details = {
           user_id : "USER_"+Date.now(),
           name : userPojo.name,
           email : userPojo.email,
           password:password,
           is_active : false,
           is_created_by_admin : true,
           created_at : Date.now(),
          }
         User.insert(user_details);
        var result = {};
        result.code =200;
        result.message ="User created successfully !";
       return result;  
     }
  }  ,

  update_user_details(companyObj){

    var userId = companyObj.userId;
    var checkIfUserExists = User.find({"email":companyObj.email,user_id:{$ne:userId}}).count();
     if(checkIfUserExists != 0){
        var result = {};
        result.code =300;
        result.message ="User already exists !";
       return result;
      }else{
        var companyUpdates =  {
                              name:companyObj.name,
                              email: companyObj.email,
                              updated_at:Date.now()
                            }
          var result =  User.update(
                            { "user_id":userId},
                            {$set:companyUpdates},
                            {multi:true}
                          );
          var result = {};
          result.message = "User updated successfully";
          result.code = 200;
          return result;
        }
  },

  change_user_status(userPojo){
    var userId = userPojo.userId;
    var isActive = userPojo.isActive;
    User.update({"user_id":userId},{$set:{"is_active":isActive,updated_at:Date.now()}});
      return false;
  }

 })


