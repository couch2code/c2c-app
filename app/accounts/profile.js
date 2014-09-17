module.exports = function($scope, $firebase, firebaseUrl, $firebaseSimpleLogin, $state) {
  // when we require firebase/firebase in the index file, it creates
  // a glocal object called Firebase
  //
  // we are creating a new reference to https://couch2code.firebaseio.com (aka firebaseUrl)
  var ref = new Firebase(firebaseUrl);
  // Now we want to order another service: called firebaseSimpleLogin -> ( needs to go in the params ^^^)
  var authClient = $firebaseSimpleLogin(ref);
  // now we are creating a function that will be bound to the dom form submit method  
  $scope.createUser = function(user) {
    // we now need to create the account using the authClient Object
    authClient.createUser(user.email, user.password, function(err, user) {
      // now we need to go to another state
      $state.go('home');
    });
  };
};