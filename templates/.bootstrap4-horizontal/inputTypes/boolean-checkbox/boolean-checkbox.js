Template["afCheckbox_bootstrap4-horizontal"].helpers({
  attsPlusSpecialClass: function () {
    var atts = _.clone(this.atts);
    atts = AutoForm.Utility.addClass(atts, "autoform-checkbox-margin-fix");
    return atts;
  },
  useLeftLabel: function () {
    return this.atts.leftLabel;
  }
});
