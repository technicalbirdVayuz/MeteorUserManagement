// BlazeLayout.setRoot('body');

FlowRouter.route('/dashboard', {
    action: function(params, queryParams) {
            BlazeLayout.render('left_panel', {child_template: 'dashboard'});
    }
});
FlowRouter.route('/create_sector', {
    action: function(params, queryParams) {
            BlazeLayout.render('left_panel', {child_template: 'create_sector'});
    }
});

FlowRouter.route('/info', {
    action: function(params, queryParams) {
            BlazeLayout.render('info');
    }
});