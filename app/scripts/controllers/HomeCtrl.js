(function () {
    function HomeCtrl($scope, $uibModal, Room) {
        //Set the page heading
        this.heading = "Bloc Chat";
          
        //Get a list of all the chat rooms
        $scope.chatRooms = Room.all;
        
        this.open = function () {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/newRoom.html',
                controller: 'ModalCtrl as mc'
            });
        };
                           
    }
 
    angular
         .module('blocChat')
         .controller('HomeCtrl', ['$scope', '$uibModal', 'Room', HomeCtrl]);
})();