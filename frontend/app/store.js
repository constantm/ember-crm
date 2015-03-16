import DS from 'ember-data';

export default DS.RESTAdapter.reopen({
	url: 'https://localhost:3000',
  namespace: 'api/1'
});


// var App = Ember.Application.extend({
//   modulePrefix: config.modulePrefix,
//   podModulePrefix: config.podModulePrefix,
//   Resolver: Resolver,
//   rootElement: '#ember-app'
// });

// loadInitializers(App, config.modulePrefix);

// export default App;
