restaurants.controller('RestaurantsCtrl', function RestaurantsCtrl($scope)  {
  $scope.bestRestaurants = [];
  $scope.addRestaurant = function() {
    $scope.bestRestaurants.push({ name: $scope.restaurantName });
    $scope.restaurantName = null;
  };
});
