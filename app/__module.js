import '../assets/css/app.css';


import './agent/_module';
import './azure/_module';
import './docker/__module';
import './extensions/storidge/__module';
import './portainer/__module';

angular.module('portainer', [
  'ui.bootstrap',
  'ui.router',
  'ui.select',
  'isteven-multi-select',
  'ngCookies',
  'ngSanitize',
  'ngFileUpload',
  'ngMessages',
  'ngResource',
  'angularUtils.directives.dirPagination',
  'LocalStorageModule',
  'angular-jwt',
  'angular-google-analytics',
  'angular-json-tree',
  'angular-loading-bar',
  'angular-clipboard',
  'ngFileSaver',
  'luegg.directives',
  // 'portainer.templates',
  'portainer.app',
  'portainer.agent',
  'portainer.azure',
  'portainer.docker',
  'extension.storidge',
  'rzModule'
]);

if (require) {
  var req = require.context('./', true, /^(.*\.(js$))[^.]*$/im);
  req.keys().forEach(function(key) {
    req(key);
  });
}
