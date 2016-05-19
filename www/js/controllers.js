(function () {

angular.module('starter.controllers', []);


  thisplaceis.controller('newPlaces',['$scope', function ($scope) {




  }]);


thisplaceis.controller('MapCtrl', ['$scope','$ionicLoading','$ionicActionSheet', function($scope, $ionicLoading, $ionicActionSheet) {
  $scope.mapCreated = function(map) {
    $scope.map = map;
  };

  $scope.centerOnMe = function () {
    console.log("Centering");
    if (!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: false
    });

    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log('Got pos', pos);
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $scope.loading.hide();
    }, function (error) {
      alert('Unable to get location: ' + error.message);
    });
  };


  $scope.showActionsheet = function() {

    $ionicActionSheet.show({
      titleText: 'ActionSheet Example',
      buttons: [
        { text: '<i class="icon ion-share"></i> Share' },
        { text: '<i class="icon ion-arrow-move"></i> Move' },
      ],
      destructiveText: 'Delete',
      cancelText: 'Cancel',
      cancel: function() {
        console.log('CANCELLED');
      },
      buttonClicked: function(index) {
        console.log('BUTTON CLICKED', index);
        return true;
      },
      destructiveButtonClicked: function() {
        console.log('DESTRUCT');
        return true;
      }
    });
  };


}]);

}());
