import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';

import './boolean-checkbox.html';

Template.afCheckbox_bootstrap4.helpers({
  atts() {
    const atts = _.clone(this.atts);
    atts.class = atts.class || '';
    atts.class += ' form-check-input';
    return atts;
  }
})

