'use strict';

angular.module('SurveysController', ['$scope', 'surveyFactory',
    function($scope, surveyFactory){
        console.log('xxxxxxxxx')

        $scope.showSurveys = false;
        $scope.message = "Loading ...";
        $scope.surveys = surveyFactory.getSurveys().query(
            function(response) {
                console.log(response)
                $scope.surveys = response.names;
                $scope.showSurveys = true;
            },
            function(response) {
                console.log('xxxxxxxxx')
                $scope.message = "Error: "+ response.status + " " + response.statusText;
            }
        );
    }]);
