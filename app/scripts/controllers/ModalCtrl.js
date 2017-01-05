(function () {
    'use strict';
    function ModalCtrl($scope, $uibModalInstance, Room) {
        
        var mc = this;
        mc.close = function () {
            $uibModalInstance.close();
        };
        
        mc.saveRoom = function () {
            Room.addRoom(mc.roomName);
            $uibModalInstance.close();
        };
    
                           
    }
 
    angular
         .module('blocChat')
         .controller('ModalCtrl', ['$scope', '$uibModalInstance', 'Room', ModalCtrl]);
})();