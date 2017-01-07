(function () {
    function HomeCtrl($scope, $uibModal, Room, Message, BlocChatCookies) {
        //Set the page heading
        this.heading = "Bloc Chat";
          
        //Get a list of all the chat rooms
        $scope.chatRooms = Room.all;
        
        this.openRoomModal = function () {
            $uibModal.open({
                templateUrl: '/templates/newRoom.html',
                controller: 'ModalCtrl as mc'
            }).result.then(function(roomName){                    
                Room.addRoom(roomName);                    
            });
        };
        
        this.setRoom = function (room) {
            this.currentRoom = room;
            this.currentRoom.messages = Message.getByRoomId(room.$id);           
        };
        
        this.addMessage = function () {            
            if (this.newMessageContent) {                                    
                var newMessage = {
                    username: BlocChatCookies.user,
                    content: this.newMessageContent,
                    roomId: this.currentRoom.$id,
                    sentAt: firebase.database.ServerValue.TIMESTAMP
                };
                Message.send(newMessage);
                this.newMessageContent = '';
            }
        };
    }
 
    angular
         .module('blocChat')
         .controller('HomeCtrl', ['$scope', '$uibModal', 'Room', 'Message', 'BlocChatCookies', HomeCtrl]);
})();
