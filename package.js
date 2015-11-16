Package.describe({
  name: 'redhead:angular-cloudinary',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/redhead-web/cloudinary_angular',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['jquery', 'angular', 'danialfarid:ng-file-upload'], 'client');
  api.addFiles('js/angular.cloudinary.js', 'client');
  api.addFiles('bower_components/cloudinary_js/js/jquery.cloudinary.js', 'client');
});

// Package.onTest(function(api) {
//   api.use('ecmascript');
//   api.use('tinytest');
//   api.use('fixtures');
//   api.addFiles('fixtures-tests.js');
// });
