angular.module('AngularScaffold.Services').factory('HomeService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://nelson-cardenas-backend.herokuapp.com/';
		return {
				GetOffers: function(){
					return $http.get(baseUrl + "v1/offers");
				},
				PostOffers: function(payload){
					return $http.post(baseUrl + "v1/offers", payload);
				}
	    };
}]);
