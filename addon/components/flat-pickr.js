import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'input',
  type: 'text',
  classNames: ['some-class'],
  attributeBindings: ['value', 'placeholder'],

  // Default settings
  enableTime: false,
  dateFormat: 'F j, Y',
  timeFormat: "H:i",
  defaultDate: null,
  minDate: null,
  maxDate: null,
  disable: null,
  altInput: null,
  altFormat: null,
  inline: false,
  shorthandCurrentMonth: false,
  value: null,
  hourIncrement: 1,
  minuteIncrement: 5,

  didInsertElement() {
    /*globals flatpickr */
    flatpickr('#' + this.elementId, {

      // Options
      enableTime: this.get('enableTime'),
      dateFormat: this.get('dateFormat'),
      timeFormat: this.get('timeFormat'),
      defaultDate: this.get('defaultDate'),
      minDate: this.get('minDate'),
      maxDate: this.get('maxDate'),
      disable: this.get('disable'),
      altInput: this.get('altInput'),
      altFormat: this.get('altFormat'),
      inline: this.get('inline'),
      value: this.get('value'),
      shorthandCurrentMonth: this.get('shorthandCurrentMonth'),
      onChange: this.get('onChange'),
      hourIncrement: this.get('hourIncrement'),
      minuteIncrement: this.get('minuteIncrement')


    });
  }

});
