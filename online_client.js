Meteor.startup(function() {
    // Time of inactivity to set user as away automaticly. Default 60000
    UserPresence.awayTime = 300000;
    // Set user as away when window loses focus. Defaults false
    UserPresence.awayOnWindowBlur = true;
    // Start monitor for user activity
    UserPresence.start();
});


/**
 * Register the link
 */

Tracker.autorun(function() {
  orion.links.add({
    index: 9140,
    identifier: 'orion-online',
    title: 'Online Users',
    routeName: 'jorisroling.orionOnline',
    activeRouteRegex: 'jorisroling.orionOnline',
    permission: 'jorisroling.orionOnline'
  });
});


ReactiveTemplates.onCreated('orionOnline', function() {
	this.subscribe('orionOnline');
});

ReactiveTemplates.helpers('orionOnline', {
	users: function() {
		if (Roles.userHasRole(Meteor.userId(),'admin')) {
	        var index = 0;
	        var users = Meteor.users.find({},{sort:{'profile.name':1}});
	        return users.map(function(user, index, cursor) {
	            user._index = ++index;
	            return user;
	        });
		}
	},
	led: function() {
		switch (this.status) {
		case 'online':
			return 'green';
		case 'away':
			return 'orange';
		default:
			return 'red';
		}
	},
	aemail: function() {
		// console.log(this);
		if (this.emails && this.emails.length && this.emails[0].address) {
			return this.emails[0].address;
		} else if (this.services && this.services.facebook && this.services.facebook.email) {
			return this.services.facebook.email;
		}
		return '';
	},
});

ReactiveTemplates.events('orionOnline', {
});

