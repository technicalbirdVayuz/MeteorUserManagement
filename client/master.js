// import {Utils} from './../../common/common_classes/Utils.js';
// import {ProfileNonreactive} from './../../import/collections/insert.js';
// Template.registerHelper("check_array_size" , function(array,validation_limit){
//      if(array.length == validation_limit){
//      	return true;
//      }
// })
// Template.registerHelper("companyIdExistsInSession" , function(){
//      if(Session.get("companyId") == undefined || Session.get("companyId") == ""){
//        return false;
//      }else{
//        return true;
//      }
// })
// Template.registerHelper("fetch_logged_in_company_name" , function(){
//      Meteor.subscribe("fetch_profile_data",Session.get("companyId"));
//      var profileData =  ProfileNonreactive.find({"company_id":Session.get("companyId")}).fetch();
//      return profileData;
// })

// Template.registerHelper("increment_by_value" , function(actual_value,incremented_value){
//      return actual_value+incremented_value;
// })

// Template.registerHelper("equals" , function(a,b){
//      return a==b;
// })
// Template.registerHelper("not_true" , function(a){
//      return a!=true;
// })
// Template.registerHelper("equals_check_for_dropdown_or_radio" , function(question_type){
//      return question_type == "radio" || question_type == "dropdown";
// })

// Template.registerHelper("equals_removed_cloned" , function(a,b){
//      return a.replace("cloned_","")==b;
// })
// Template.registerHelper("check_for_zero" , function(a){
//      return a==0;
// })
// // Template.registerHelper("equals_removed_cloned_indicator" , function(a,b){
// //   console.log("Received Values");
// //   console.log(a);
// //   console.log("cloned_"+b);
// //      return a==b;
// // })
// Template.registerHelper("not_equal_to" , function(a,b){
//      return a!=b;
// })
// Template.registerHelper("not_equal_to_for_two" , function(a,b,c){
//      return a!=b && a!=c;
// })
// Template.registerHelper("check_for_blank" , function(a){
//       return a=="";
// })
// Template.registerHelper("greater_than_1" , function(index){
//      return index>=1;
// })
// Template.registerHelper("change_date_format" , function(timeStamp){
// 	var fullDate = new Date(timeStamp);
// 	var date = fullDate.getDate();
// 	var month = fullDate.getMonth();
// 	var year = fullDate.getFullYear();

//         if(date<10) {
//             date = '0'+date
//         } 
//         if(month<10) {
//             month = '0'+month
//         } 
//      return year+"-"+month+"-"+date;
// })

// Template.registerHelper("pagination_numbers",function(total_count){
//  total_count  = parseInt(Session.get("total_count"));
//    total_count = total_count/ 5;
//      var current_limitation = [];
//      for(var i=1;i<=Math.ceil(total_count);i++){
//        current_limitation.push({value: i+""});
//      }
//      return current_limitation;
// });

// Template.registerHelper("convert_to_desired_format",function(date){
//     var d = new Date(date);
//     var date = d.getDate();
//     var month = d.getMonth()+1;
//     var year = d.getFullYear();
//     var months = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
//     return months[month-1]+ " " +date +", " +year;
// });

// Template.registerHelper("helper_name",function(arr1,arr2){  
//     var b  =  arr1.length == arr2.length && arr1.filter(elt=>arr2.includes(elt)).length == arr1.length;
//     return b;
// });

// Template.registerHelper("not_helper_name",function(arr1,arr2){
//   return JSON.stringify(arr1)!=JSON.stringify(arr2);
// });

// Template.registerHelper("check_legal",function(legalEntity){  
//       if(legalEntity=="For Profit"){
//        $("#customRadio1").prop("checked", true);
//        console.log("check_legal :" + legalEntity);
      
//      }
//       return "false";
// });

// Template.registerHelper("make_first_letter_captial",function(string){  
//        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
// });

// Template.registerHelper("check_group_operation",function(group_operation){  
//        if(group_operation=="")
//        return "None";
// });

// Template.registerHelper("checkForNoGroup",function(group_id){  
//       return group_id== Utils.unidentifiedGroup();
// });

// Template.registerHelper("fetch_unidentified_group",function(){  
//       return Utils.unidentifiedGroup();
// });

Template.registerHelper("check_active_section",function(){  
      return "dashboard";
});