/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-flatpickr',

  included: function(app) {
    this._super.included(app);

    app.import('bower_components/flatpickr/dist/flatpickr.min.js');
    app.import('bower_components/flatpickr/dist/flatpickr.min.css');
  }

};
