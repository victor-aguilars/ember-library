import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  title: attr(),
  isbn: attr(),
  publishDate: attr(),

  author: DS.belongsTo('author'),
  reviews: DS.hasMany('review')
});
