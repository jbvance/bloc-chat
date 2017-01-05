(function () {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms"),
            rooms = $firebaseArray(ref);
        
        return {
            all: rooms,
    
            addRoom: function (roomName) {
                if (roomName) {
                    rooms.$add({name: roomName})
                }
            }
        };
      
    }

  angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();