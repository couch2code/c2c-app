module.exports = function($scope) {
    var ref = new FirebaseUrl;
    var authClient = $firebaseSimpleLogin(ref);
    
    $scope.createAccount = function(email, pass, username, callback) {
      angularFireAuth._authClient.createAccount( email, pass, function(err, user) {
        if (callback) {
            callback(err,user);
            $rootScope.$apply();
        }
      });
    };
};
  };