Package.describe({
  name: 'imajus:autoform-bootstrap4',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Bootstrap 4 templates for Meteor AutoForm',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/imajus/autoform-bootstrap4',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.7.0.3');
  api.use(['ecmascript', 'templating', 'aldeed:autoform@6.0.0', 'aldeed:template-extension@4.1.0']);
  api.mainModule('autoform-bootstrap4.js', 'client');
});

// Package.onTest(function(api) {
// });
