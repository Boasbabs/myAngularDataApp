myAngularData.controller("MeetingsController", ["$scope", "$firebase", "$firebaseObject", function($scope, $firebase, $firebaseObject) {

  // Get a reference to the database service
  var database = firebase.database();

  var rootRef = firebase.database().ref(); //Gets the database of meetings

  $scope.meetings = $firebaseObject(rootRef); //The data gotten from the Firebase is passed into $scope.meetings

  $scope.addMeeting = function() {
    rootRef.push({
      name: $scope.meetingname,
      date: firebase.database.ServerValue.TIMESTAMP // this assigned date to the data not rootRef.update(firebase.database.ServerValue.TIMESTAMP)
    }).then(function () {
      $scope.meetingname = ""; // to clear the input field
    });
  }// add meetings to database

  $scope.deleteMeeting = function(key) {
    rootRef.child(key).remove();
  }

}]); // MeetingsController
