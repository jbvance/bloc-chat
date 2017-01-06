(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages");             
        var messages = $firebaseArray(ref);             
      
        return {
            all: messages,

            addMessage: function(content, username, roomId){
                if (content) {
                    messages.$add(
                        {
                            username: username,
                            content: content,
                            sentAt: firebase.database.ServerValue.TIMESTAMP,
                            roomId: roomId
                        }                   

                    );
                }
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