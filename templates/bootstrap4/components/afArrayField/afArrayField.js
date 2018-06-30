import { Template } from 'meteor/templating';

import './afArrayField.html';

Template.afArrayField_bootstrap4.helpers({
  panelClass: function () {
    return this.panelClass || 'panel-default';
  },
  headingClass: function () {
    return this.atts.headingClass || '';
  },
});
