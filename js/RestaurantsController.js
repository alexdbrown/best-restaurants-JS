restaurants.controller('RestaurantsCtrl', function RestaurantsCtrl($scope)  {
  $scope.bestRestaurants = [];
  $scope.addRestaurant = function() {
    $scope.bestRestaurants.push(
      { name: $scope.restaurantName,
        description: $scope.restaurantDescription,
        price: $scope.restaurantPrice,
        intimacy: $scope.restaurantIntimacy,
        sickness: $scope.restaurantSickScale }
    );
    $scope.restaurantName = null;
    $scope.restaurantDescription = null;
    $scope.restaurantPrice = null;
    $scope.restaurantIntimacy = null;
    $scope.restaurantSickScale = null;
  };
  $scope.deleteRestaurant = function(restaurant) {
    var index = $scope.bestRestaurants.indexOf(restaurant);
    $scope.bestRestaurants.splice(index, 1);
  };

  $scope.getNumber = function(num) {
    return new Array(num);
  }
});
