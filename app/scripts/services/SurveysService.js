
'use strict';

angular.module('surveyDesignerApp')
    .constant("baseURL","http://localhost:3000/")

    .service('surveyFactory', ['$resource', 'baseURL',
        function($resource, baseURL) {
            console.log('skataaaaaaaaaaaaaaa')

            this.getSurveys = function(){
                return $resource(baseURL+"surveys/:id",null,
                    {'update':{method:'PUT' }});
            };

    }])
;
