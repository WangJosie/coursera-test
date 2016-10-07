(function () {
'use strict';

angular.module('LunchApp', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope) {
  //$scope.myMessages=[];
  $scope.lunchmenu = "";
  //$scope.lunchlist = document.getElementById('lunch-menu').html;
  //$scope.x=$scope.lunch-menu.length;
  $scope.cout = "";

  $scope.Checkitem = function () {
      if ($scope.lunchmenu.length === 0){
        $scope.cout = "input lunch meun first";
      }
      else if($scope.lunchmenu.length > 4){
        $scope.cout = "Too Much!";
      }
     else{
        $scope.cout = "Enjoy";
      }

  $scope.lunchmenu = "";
  };

  }

})();
