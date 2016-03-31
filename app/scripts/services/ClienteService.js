angular.module('AngularScaffold.Services').factory('ClienteService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://oscar-ordonez-backend.herokuapp.com/';
		return {
				UpdateUser: function(param,payload){
          return $http.post(baseUrl + "v1/updateUser/"+ param, payload);
        },
				DeleteUser: function(params){
          return $http.delete(baseUrl + "v1/deleteUser/"+ params);
        },
				GetUser: function(params){
					return $http.get(baseUrl + "v1/getUser/"+ params);
        },
				GetUsers: function(){
					return $http.get(baseUrl + "v1/users");
				},
				Logout: function(){
					return $http.get(baseUrl + "v1/logout");
				},
        Register: function(payload){
          return $http.post(baseUrl + "v1/register", payload);
        }
	    };
}]);
