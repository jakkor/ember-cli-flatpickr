import Ember from 'ember';

export default Ember.Controller.extend({
  selectedDate: null,

  init: function() {
    this.set('selectedDate', new Date('Fri Aug 29 2014 19:00:00 GMT-0400 (EDT)'));
  }
});
