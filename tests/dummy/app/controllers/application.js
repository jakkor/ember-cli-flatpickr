import Ember from 'ember';

export default Ember.Controller.extend({
  selectedDate: null,

  dateToShow: null,

  init: function() {
    this.set('selectedDate', new Date('Fri Aug 29 2014 19:00:00 GMT-0400 (EDT)'));
  },

  actions: {
    dateChanged: function(newDate) {
      console.log("Date has changed");
      this.set('dateToShow', newDate.toString());
    }
  }
});
