(function () {
    
    function config($stateProvider, $locationProvider) {
        console.log("Configuring");
         $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
         
         $stateProvider                
            .state('home', {
                 url: '/',
                 //controller: 'CollectionCtrl as collection',
                 templateUrl: 'templates/home.html'
            });
        
        
     }
     angular
         .module('blocChat', ['ui.router', 'firebase'])
         .config(config);               
 })();
console.log("Test");

