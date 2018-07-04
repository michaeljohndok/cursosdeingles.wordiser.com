var app = angular.module('myApp', ['pascalprecht.translate']);
app.config(['$translateProvider', function ($translateProvider) {

    // <h1>{{ 'APP_HEADLINE' | translate }}</h1>

    $translateProvider.translations('spanish', {
        title:  'WORDISER, Learning English Made Simple',
        NAV_HOME:      'Zur Startseite',
        NAV_ABOUT:     'Über',
        APP_TEXT:      'Irgendein Text über eine großartige AngularJS App.'
      });

  // add translation table
  $translateProvider
    .preferredLanguage('spanish');
}]);

app.controller('APPCtrl', ['$scope', function($scope) {
  var parseAppId = 'iXHZYAvuBaX7aXdZrd2Yhu8O0PrKCMad6aIivZNx',
            parseAppKey = '8KMDmMepdWWXnBNF87bEcNlR3ArEFEjzH8oB9Lwo';

            Parse.initialize(parseAppId, parseAppKey);

            Parse.serverURL = 'https://parseapi.back4app.com';

    $scope.subscribe  = function(){
        console.log('$scope.subscribe_email');
        if (!$scope.subscribe_email_succeed) {
            var SBEmail = Parse.Object.extend('SBEmail');
            var email = new SBEmail();
            email.set('email',$scope.subscribe_email);
            email.save();
            $scope.subscribe_email_succeed = true;
        }else{
            $scope.subscribe_email_error = true;
        }
        
    }

    $scope.sendMessage = function() {
        if (!$scope.name || !$scope.email || !$scope.subject || !$scope.message) {
            $scope.empty_info = true;
        };

        if ($scope.success) {
            $scope.already_send = true;
        };

        if ($scope.name && $scope.email && $scope.subject && $scope.message && !$scope.success) {
            $scope.message_feedback = 'Messae has been sent!';

            $scope.success = true;
            $scope.empty_info = false;
            var WEBContact = Parse.Object.extend('WEBContact');
            var contact = new WEBContact();
            contact.set('name', $scope.name);
            contact.set('email', $scope.email);
            contact.set('subject', $scope.subject);
            contact.set('message', $scope.message);
            contact.save().then(function(contact){

                // $scope.message_feedback = 'Messae has been sent!';
                // console.log($scope.message_feedback );
                console.log(contact);
            });
        };


        
    }
}]);