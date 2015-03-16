import DS from "ember-data";

var ApplicationAdapter = DS.ActiveModelAdapter.extend({
    host: 'http://localhost:3000',
    namespace: 'api/v1'
});

export default ApplicationAdapter;

// // import config from '../config/environment';
// // import DS from 'ember-data';
// // export default DS.ActiveModelAdapter.extend({});

// var ApplicationAdapter = DS.ActiveModelAdapter.extend({});
// export default ApplicationAdapter;
// // // // export default DS.Store.extend({
// // // // //   revision: 11,
// // // //   adapter: DS.RESTAdapter.create()
// // // // });