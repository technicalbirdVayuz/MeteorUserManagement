import { Base64 } from 'meteor/ostrio:base64';


var adminRoutes = FlowRouter.group({
  prefix: '/admin',
  name: 'admin',
  triggersEnter: [function(context, redirect) {
   // console.log('running group triggers');
  }]
});

adminRoutes.route('/create-user', {
  action: function() {
    BlazeLayout.render('left_panel', {child_template: 'create_user'});
  }
});
adminRoutes.route('/edit-user/:userId', {
  action: function() {
    BlazeLayout.render('left_panel', {child_template: 'edit_user'});
  },
   subscriptions: function() {
         var encodedId  = FlowRouter.current().params.userId;
         var decodedId = Base64.decode(encodedId);
        this.register('edit_user', Meteor.subscribe('fetch_user_based_on_id',decodedId));
    }
});
adminRoutes.route('/user-listing', {
  action: function() {
    BlazeLayout.render('left_panel', {child_template: 'user_listing'});
  },
  //fetch_all_user
  subscriptions: function() {
        this.register('user_listing', Meteor.subscribe('fetch_all_user'));
    }
});
