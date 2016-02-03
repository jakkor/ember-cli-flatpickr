import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'input',
  type: 'text',
  classNames: ['some-class'],
  attributeBindings: ['value'],

  // Default settings
  dateFormat: 'F j, Y',
  defaultDate: null,
  minDate: null,
  maxDate: null,
  disable: null,
  altInput: null,
  altFormat: null,
  inline: false,
  shorthandCurrentMonth: false,
  value: null,

  didInsertElement() {
    /*globals flatpickr */
    flatpickr('#' + this.elementId, {

      // Options
      dateFormat: this.get('dateFormat'),
      defaultDate: this.get('defaultDate'),
      minDate: this.get('minDate'),
      maxDate: this.get('maxDate'),
      disable: this.get('disable'),
      altInput: this.get('altInput'),
      altFormat: this.get('altFormat'),
      inline: this.get('inline'),
      value: this.get('value'),
      shorthandCurrentMonth: this.get('shorthandCurrentMonth')

    });
  }

});
