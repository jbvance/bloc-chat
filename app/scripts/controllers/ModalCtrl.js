(function () {
    'use strict';
    function ModalCtrl($scope, $uibModalInstance, Room) {
        
        var mc = this;
        mc.close = function (value) {
            $uibModalInstance.close(value);
        };
        
        mc.closeCancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
        
        
                               
    }
 
    angular
         .module('blocChat')
         .controller('ModalCtrl', ['$scope', '$uibModalInstance', 'Room', ModalCtrl]);
})();