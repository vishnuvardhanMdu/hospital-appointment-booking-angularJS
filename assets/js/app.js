!function(){
    "use strict";   
    var appointment_details= [ 
        { dept:"Medical Lab", doctor:"Vishnu Vardhan", name:"Roshan" , date:"10.10.2020",  time:6},
        { dept:"Dental Care", doctor:"Ram", name:"Dhoni" , date:"10.10.2020", time:7},
        { dept:"Surgery", doctor:"Sanjay", name:"Virat" , date:"10.10.2020", time:8}
    ];  
    
    var app =angular.module('repApp', []);
    app.controller('repController', repController);
    
    

    
    // custom factory
    app.factory('myFactory', function () {
        
        return {
        gettime: function (input) {
                return ((input+1)%12);}      
        };});
        

    // custom service
    app.service('myService', function () {
        var chkEmail = function (mail) {
            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (reg.test(mail) == false) 
            { return false; }
                return true;
            }
            this.validateEmail = function (email) {
            return chkEmail(email);
            }
    });

    //custom directives
    app.directive("mydir", function() {
        return {
            restrict : "A",
            template : "<p>info@gmail.com<br>contact@gmail.com</p>"
        };
    });

    app.directive("number", function() {
        return {
            restrict : "A",
            template : "<p>8220449871</p>"
        };
    });

    var time = 8;
    repController.$inject = ['$scope','myFactory','myService'];
    function repController($scope,myFactory,myService) {
        $scope.appointment_details = appointment_details;
        $scope.addToTable = function(){
            var pass = myService.validateEmail($scope.newemail);
            time=myFactory.gettime(time);
            $scope.time=time;
            var newItem = {
                dept: $scope.newdept,
                doctor:$scope.newdoctor,
                name: $scope.newname,
                date:$scope.newdate,
                time:$scope.time
            };
        
        if(pass){
            $scope.appointment_details.push(newItem);
        }
        };
        $scope.pasted= function(){
            $scope.pastect= "You have pasted 1 time";
        };
        

    }
    
    app.controller('mouse', function($scope) {
    $scope.showMe = false;
    $scope.myFunc = function() {
    $scope.showMe = !$scope.showMe;
    }

    });
}();