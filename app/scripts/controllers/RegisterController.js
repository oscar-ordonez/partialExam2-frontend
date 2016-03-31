angular.module('AngularScaffold.Controllers')
  .controller('RegisterController', ['AuthService', '$state', '$scope', '$rootScope', '$sessionStorage',  function (authService, $scope, $state,$rootScope, $sessionStorage) {
      $scope.user = {};
      $scope.$sessionStorage = $sessionStorage;

      $scope.login = function(user){
        authService.Login(user).then(function(response){
          $sessionStorage.currentUser = response.data;
          $scope.user = {};
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }

      $scope.register = function(){
        var user = {username: $scope.user.username, password:  $scope.user.password, scope: ['regular']};
        authService.Register(user).then(function(response){
          alert('Registered in correctly!');
          $scope.login({username: user.username, password: user.password});
        }).catch(function(err){
          console.log(err);
          alert(err.data.error + " " + err.data.message);
        })
      }

  }]);
