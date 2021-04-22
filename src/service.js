angular.module('shoppingapp')
.service('ProductService', ProductService);

ProductService.$inject = ['$http', 'ApiPath'];

function ProductService($http, ApiPath) {
    var service = this;

    service.getCategories = function () {
        console.log(ApiPath);
        return $http.get(ApiPath).then(function (response) {
          return response.data;
        });
      };
    }