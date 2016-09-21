angular.module('controllers', [])

.controller('MenuCtrl', function($scope, $state, products){
  $scope.allProducts = products.data;

  $scope.showDetails = function(product){
    $state.go('details', {productId: product.id});
  }
})

.controller('DetailsCtrl', function($scope, $state, product, reviews){
  $scope.reviews = reviews.data;
  $scope.product = product.data;
  $scope.images = product.data.images;
  var categoriesString = "" ;
  for(var i=0; i< product.data.categories.length; i++){
    if(i === product.data.categories.length - 1){
      categoriesString = categoriesString + product.data.categories[i].name
    }
    else{
    categoriesString = categoriesString + product.data.categories[i].name + ", ";
    }
  }
  $scope.categories = categoriesString;
})
