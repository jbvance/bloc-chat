(function () {
    'use strict';
    function ModalCtrl($scope, $uibModalInstance, Room) {
        
        var mc = this;
        mc.close = function (value) {
            $uibModalInstance.close(value);
            console.log("Closing modal");
        };
        
        mc.closeCancel = function() {
            console.log("Canceling");
            $uibModalInstance.dismiss('cancel');
        };
        
        
                               
    }
 
    angular
         .module('blocChat')
         .controller('ModalCtrl', ['$scope', '$uibModalInstance', 'Room', ModalCtrl]);
})();