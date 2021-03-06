import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  phone: DS.attr('string'),
  status: DS.attr('string', { defaultValue: 'new' }),
  notes: DS.attr('string'),
});

// App.Lead = DS.Model.extend({
//   firstName: DS.attr('string'),
//   lastName: DS.attr('string'),
//   email: DS.attr('string'),
//   phone: DS.attr('string'),
//   status: DS.attr('string', { defaultValue: 'new' }),
//   notes: DS.attr('string'),
// })