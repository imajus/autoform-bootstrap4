import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';

import './afObjectField.html';

Template.afObjectField_bootstrap4.helpers({
  quickFieldsAtts: function () {
    return _.pick(this, 'name', 'id-prefix');
  },
  panelClass: function() {
    return this.panelClass || 'panel-default';
  }
});
