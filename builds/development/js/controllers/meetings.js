myAngularData.controller("MeetingsController", ["$scope", "$firebase", "$firebaseObject", function($scope, $firebase, $firebaseObject) {

  // Get a reference to the database service
  var database = firebase.database();

  var rootRef = firebase.database().ref(); //Gets the database of meetings

  $scope.meetings = $firebaseObject(rootRef); //The data gotten from the Firebase is passed into $scope.meetings

}]); // MeetingsController
