var os = Meteor.npmRequire('os')
var onlineQuery={$and:[{status:{$exists:true}},{status:{$type:2}},{status:{$ne:'offline'}}]};

Meteor.startup(function() {
    if (InstanceStatus) InstanceStatus.registerInstance(os.hostname());

	// Listen for new connections, login, logoff and application exit to manage user status and register methods to be used by client to set user status and default status
	UserPresence.start();
	// Active logs for every changes
	// Listen for changes in UserSessions and Meteor.users to set user status based on active connections
	UserPresenceMonitor.start();	
	
});


Meteor.publish('orionOnline',function() {
	if (!this.userId || !Roles.userHasRole(this.userId,'admin')) {
		this.ready();
		return;
	}
	return Meteor.users.find(onlineQuery,{fields:{emails:1,profile:1,status:1}});
});

