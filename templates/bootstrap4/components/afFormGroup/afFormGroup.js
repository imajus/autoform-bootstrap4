import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';

import './afFormGroup.html';

Template.afFormGroup_bootstrap4.inheritsHelpersFrom('afFormGroup_bootstrap3');

Template.afFormGroup_bootstrap4.helpers({
  bsFieldInputAtts: function bsFieldInputAtts() {
    const ctx = AutoForm.getValidationContext();
    const atts = _.clone(this.afFieldInputAtts);
    if ( ctx.keyIsInvalid(this.name) ) {
      atts.class = atts.class || '';
      atts.class += ' is-invalid';
    }
    return atts;
  }
});
