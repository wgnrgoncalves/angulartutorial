'use strict';
angular
    .module('phoneList')
    .component('phoneList', {
        templateUrl: '010_phone-list/010_phone-list.template.html',
        controller : function PhoneListController($http){
            var self = this;
            self.orderProp = 'age';

            $http.get('phones/phones.json').then(function(response){
                self.phones = response.data;
            });
        }
    });
