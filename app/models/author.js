import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  first: attr(),
  last: attr(),
  username: attr(),

  books: DS.hasMany('book')
});
