(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages");             
        var messages = $firebaseArray(ref);             
      
        return {
            all: messages,
            
            send: function (newMessage) {
                messages.$add(newMessage);
                
            },

            getByRoomId: function (roomId) {         
                return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
            }

        };
                        
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);      
})();