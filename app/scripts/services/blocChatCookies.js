(function() {
    'use strict';
    function BlocChatCookies($cookies, $uibModal) {           
        var currentUser = $cookies.get('blocChatCurrentUser');
        console.log("currentUser = " + currentUser);       
        if (!currentUser || currentUser === '') {
            $uibModal.open({                
                templateUrl: '/templates/userName.html',
                controller: 'ModalCtrl as mc',               
                backdrop: 'static'
            }).result.then(function(newUser) {
                console.log("User = " + newUser);
                $cookies.put("blocChatCurrentUser", newUser);
                currentUser = $cookies.get('blocChatCurrentUser');
            });
        }
        
        return {
            user: currentUser
            
        };
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies])
        .factory('BlocChatCookies', ['$cookies', '$uibModal', BlocChatCookies]);
})();