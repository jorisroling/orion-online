Package.describe({
	name: 'jorisroling:orion-online',
	summary: 'Users Online in Orion',
	version: '0.0.2',
	git: 'https://github.com/jorisroling/orion-online'
});

Package.onUse(function(api) {
	api.versionsFrom('1.0');
	api.use(['meteor-platform', 'orionjs:base@1.5.0','nicolaslopezj:roles@1.5.2']);
	api.use(['konecty:multiple-instances-status@1.0.3'],'server');
	api.use(['konecty:user-presence@1.2.6']);

	api.addAssets(['images/led-red.png','images/led-orange.png','images/led-green.png'], 'client');

	api.use(['orionjs:bootstrap@1.5.0'], 'client', { weak: true });

	api.addFiles('online.js');
	api.addFiles('online_server.js', 'server');
	api.addFiles(['online_bootstrap.html','online_client.js'], 'client');

});
