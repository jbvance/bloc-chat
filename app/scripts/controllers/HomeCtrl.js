(function () {
    function HomeCtrl($scope, $uibModal, Room, Message) {
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
        
        this.setRoom = function (room) {
            this.currentRoom = room;
            this.currentRoom.messages = Message.getByRoomId(room.$id);
            console.log("Room Set");
        };
                           
    }
 
    angular
         .module('blocChat')
         .controller('HomeCtrl', ['$scope', '$uibModal', 'Room', 'Message', HomeCtrl]);
})();