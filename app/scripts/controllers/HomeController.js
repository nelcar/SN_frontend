angular.module('AngularScaffold.Controllers')
  .controller('HomeController', ['$scope', 'HomeService', '$sessionStorage', function ($scope, HomeService, $sessionStorage) {
    	$scope.title = "Tabla de Ofertas"
      $scope.titleObject = {text: "Bienvenidos a .."}
      $scope.offers = [];
      $scope.offer = {};

      $scope.getOffers = function(){
        HomeService.GetOffers().then(function(response){
          $scope.offers = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }

      $scope.postOffers = function(){
        HomeService.PostOffers($scope.offer).then(function(response){
          alert("Posted to /offers");
          $scope.getOffers();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }

      $scope.isAdmin = function(){
        return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('admin') > -1;
      }

      $scope.isRegular = function(){
        return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('regular') > -1;
      }

  }]);
