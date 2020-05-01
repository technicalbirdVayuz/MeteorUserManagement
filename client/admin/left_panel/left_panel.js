
// Template.left_panel.helpers({
// 	check_active_section:function(activeSection){
// 		return activeSection == Session.get("active_section");	
// 	}
// });
Template.left_panel.onRendered(function(){
    // alert("On Rendered");
});
// Template.left_panel.events({
//     "click #logout_link":function(event){
//         event.preventDefault();

//         //Clear Session var(s)
//         Session.setPersistent("user_role","");
//         Router.go("/admin_login");
//     }
// })
