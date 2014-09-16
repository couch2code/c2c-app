module.exports = function($scope) {
   var ref = new FirebaseUrl;
   var authClient = $firebaseSimpleLogin(ref);
    
   $scope.loginWithGithub = function () {
       authClient.$login("github").then(function(user) {
           console.log("logged in as: " + user.uid);
       },
           function(error) {
               console.error("no login for you b/c" + error)
           });
       }
};
   