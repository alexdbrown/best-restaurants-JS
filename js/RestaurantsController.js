restaurants.controller('RestaurantsCtrl', function RestaurantsCtrl($scope)  {
  $scope.bestRestaurants = [];
  $scope.addRestaurant = function() {
    $scope.bestRestaurants.push({ name: $scope.restaurantName });
    $scope.restaurantName = null;
  };
  $scope.deleteRestaurant = function(restaurant) {
    var index = $scope.bestRestaurants.indexOf(restaurant);
    $scope.bestRestaurants.splice(index, 1);
  };
});
