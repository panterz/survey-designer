'use strict';

angular.module('surveyDesignerApp', [
  'ui.router',
  'ngResource',
  'ngCookies',
  'ngSanitize',
  'pascalprecht.translate',
  'tmh.dynamicLocale'// angular-dynamic-locale
])
  .constant('DEBUG_MODE', /*DEBUG_MODE*/true/*DEBUG_MODE*/)
  .constant('LOCALES', {
    'locales': {
      'gr_GR': 'Ελληνικά',
      'en_GB': 'English'
    },
    'preferredLocale': 'en_GB'
  })
  .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider

      // route for the home page
      .state('app', {
          url:'/',
          views: {
              'header': {
                  templateUrl : 'views/header.html',
              },
              'content': {
                  templateUrl : 'views/home.html'
              }
          }
      });

      $urlRouterProvider.otherwise('/');
  })
  // Angular Translate
  .config(function ($translateProvider, DEBUG_MODE, LOCALES) {
    if (DEBUG_MODE) {
      $translateProvider.useMissingTranslationHandlerLog();// warns about missing translates
    }

    $translateProvider.useStaticFilesLoader({
      prefix: 'resources/locale-',
      suffix: '.json'
    });

    $translateProvider.preferredLanguage(LOCALES.preferredLocale);
    $translateProvider.useLocalStorage();
  })
  .config(function (tmhDynamicLocaleProvider) {
    tmhDynamicLocaleProvider.localeLocationPattern('../node_modules/angular-i18n/angular-locale_{{locale}}.js');
  })
;
