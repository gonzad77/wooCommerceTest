angular.module('controllers', [])

.controller('MenuCtrl', function($scope, $state, products, categories, ProductService){
  $scope.allProducts = products.data;
  $scope.allCategories = categories.data;

  $scope.categoryS = {
                    name: categories.data[0].name,
                    id: categories.data[0].id
                    };

  $scope.showDetails = function(product){
    $state.go('details', {productId: product.id});
  }

  $scope.doFilter = function(id){
    ProductService.getProductsByCategory(id)
    .then(function(res){
      $scope.allProducts = res.data;
    }, function(error){
      console.log(error);
    })
  }
})

.controller('DetailsCtrl', function($scope, $state, product, reviews, $ionicPopup, ProductService){
  $scope.reviews = reviews.data;
  $scope.product = product.data;
  $scope.images = product.data.images;
  var categoriesString = "" ;
  var tagsString = "" ;
  for(var i=0; i< product.data.categories.length; i++){
    if(i === product.data.categories.length - 1){
      categoriesString = categoriesString + product.data.categories[i].name ;
    }
    else{
    categoriesString = categoriesString + product.data.categories[i].name + ", ";
    }
  }

  for(var x=0; x<product.data.tags.length; x++){
    if(x=== product.data.tags.length -1){
      tagsString = tagsString + product.data.tags[x].name;
    }
    else{
      tagsString = tagsString + product.data.tags[x].name + ", " ;
    }
  }

  $scope.categories = categoriesString;
  $scope.tags = tagsString;

  $scope.confirm = function(){
    var confirmPopup = $ionicPopup.confirm({
     title: 'Buy',
     template: 'Are you sure you want to buy this item?'
   })

   confirmPopup.then(function(res) {
     if(res) {
       console.log('You are sure');
       ProductService.buy(product.data.id, 2)
       .then(function(res){
          $state.go('order');
       },function(error){
         console.log(error);
       })

     } else {
       console.log('You are not sure');
     }
   });
 };

})

.controller('OrderCtrl', function($scope,$state){

})

.controller('ProfileCtrl' , function($scope, $state, orders, OrderService){

})
