
var module = angular.module('app', []);

module.service('tkadmService', function () {
    return { email: "tdka97@yandex.ru" }
});

module.component('myComp', {
    templateUrl: 'src/my-comp.template.html',
    controller: function Controller($http, tkadmService) {
        var self = this;
        self.user = tkadmService.email;
        self.$onInit = function () {
            $http({
                method: "GET",
                url: "http://webora/agreed/common/get_entity_types",
                params: {},
                withCredentials: true
            }).then(function (response) {
                console.log(response);
                console.log(response.data);
            });
        }
        self.buttonClick = function () {
            console.log("clicked!");
            var w_prom = new Promise(function (resolve, reject) {
                setTimeout(resolve, 2000);
            });
            w_prom.then(function (result) {
                console.log("Promise finised!");
            });
        }
    }
});

// module.config(['$httpProvider', function ($httpProvider) {
//     //console.log($httpProvider);
// }]);
