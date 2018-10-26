import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';

import './boolean-radios.html';

Template.afBooleanRadioGroup_bootstrap4.helpers({
  falseAtts() {
    const atts = _.omit(this.atts, 'trueLabel', 'falseLabel', 'nullLabel', 'data-schema-key');
    if ( this.value === false ) {
      atts.checked = '';
    }
    atts.class = atts.class || '';
    atts.class += ' form-check-input';
    return atts;
  },
  falseLabel() {
    return this.atts.falseLabel || 'False';
  },
  trueAtts() {
    const atts = _.omit(this.atts, 'trueLabel', 'falseLabel', 'nullLabel', 'data-schema-key');
    if ( this.value === true ) {
      atts.checked = '';
    }
    atts.class = atts.class || '';
    atts.class += ' form-check-input';
    return atts;
  },
  trueLabel() {
    return this.atts.trueLabel || 'False';
  },
  nullAtts() {
    const atts = _.omit(this.atts, 'trueLabel', 'falseLabel', 'nullLabel', 'data-schema-key');
    if ( this.value !== true && this.value !== false ) {
      atts.checked = '';
    }
    atts.class = atts.class || '';
    atts.class += ' form-check-input';
    return atts;
  },
  dsk() {
    return { 'data-schema-key': this.atts['data-schema-key'] };
  }
})