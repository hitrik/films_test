var angular = require('angular');
var controllers = require('./controllers/controller');
var services = require('./services/service');
var directives = require('./directives/directive');

angular.module("app", [controllers.name, services.name, directives.name]);
