Package.describe({
	name: 'jorisroling:orion-online',
	summary: 'Users Online in Orion',
	version: '0.0.13',
	git: 'https://github.com/jorisroling/orion-online'
});

Package.onUse(function(api) {
	api.versionsFrom('1.0');
	api.use(['meteor-platform', 'orionjs:base@1.6.0','nicolaslopezj:roles@2.0.0']);
	api.use(['konecty:multiple-instances-status@1.0.3'],'server');
	api.use(['konecty:user-presence@1.2.6']);
	api.use(['utilities:avatar@0.9.2']);

	api.addAssets(['images/led-red.png','images/led-orange.png','images/led-green.png'], 'client');

	api.use(['orionjs:bootstrap@1.6.0'], 'client', { weak: true });

	api.addFiles('online.js');
	api.addFiles('online_server.js', 'server');
	api.addFiles(['online_bootstrap.html','online_client.js'], 'client');

});
