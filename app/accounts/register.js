module.exports = function($scope) {
    var ref = new FirebaseUrl;
    var authClient = $firebaseSimpleLogin(ref);
        $scope.createUser = function() { 
            //need to switch to github login
            authClient.createUser(newUser.email, newUser.password,
                function(error, user) {
                    if (!error) {
                         console.log(user.id + ', ' + user.provider);
                    }
                  });
                }
            };