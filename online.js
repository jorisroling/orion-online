/**
 * Init the template name variable
 */
ReactiveTemplates.request('orionOnline', 'jorisroling_orionOnline_bootstrap');

/**
 * Init the role action
 */
Roles.registerAction('jorisroling.orionOnline', true);

/**
 * Register the route
 */
RouterLayer.route('/admin/online', {
  layout: 'layout',
  template: 'orionOnline',
  name: 'jorisroling.orionOnline',
  reactiveTemplates: true
});

/**
 * Ensure user is logged in
 */
orion.accounts.addProtectedRoute('jorisroling.orionOnline');

