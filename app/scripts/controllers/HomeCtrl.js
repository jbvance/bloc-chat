(function() {
      function HomeCtrl($scope, Room) {
        //Set the page heading
        this.heading = "Bloc Chat";
          
       //Get a list of all the chat rooms
       $scope.chatRooms = Room.all;
                           
     }
 
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['$scope', 'Room', HomeCtrl]);
 })();