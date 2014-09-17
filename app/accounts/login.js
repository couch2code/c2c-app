module.exports = function($scope, $firebase, $firebaseSimpleLogin, firebaseUrl, $state) {
 var ref = new Firebase(firebaseUrl);
 var authClient = $firebaseSimpleLogin(ref);
 $scope.login = function(user) {
   authClient.login('passord', user, function(err, user) {
     // if error show alert - ugly is good!
     if (err) { return alert(err.message); }
     // logged in - set sessionStorage, when it makes sense
     $state.go('home');
   });
 };
};