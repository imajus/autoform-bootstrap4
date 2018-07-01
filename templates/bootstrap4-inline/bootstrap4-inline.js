import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';

import './bootstrap4-inline.html';

Template['quickForm_bootstrap4-inline'].inheritsHelpersFrom('quickForm_bootstrap3-inline');
  
Template['afFormGroup_bootstrap4-inline'].helpers({
  afFieldInputAtts: function () {
    const atts = _.clone(this.afFieldInputAtts || {});
    // Use the same templates as those defined for bootstrap4 template.
    atts.template = 'bootstrap4';
    return atts;
  }
});
