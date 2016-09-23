// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'controllers', 'services', 'config'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('menu', {
    url: '/menu',
    templateUrl: "views/menu.html",
    controller: 'MenuCtrl',
    resolve:{
          products: function(ProductService){
            return ProductService.getProducts();
          },
          categories: function(ProductService){
            return ProductService.getCategories();
          }
      }
  })

  .state('details',{
    url:'/details/:productId',
    templateUrl: 'views/details.html',
    controller: 'DetailsCtrl',
    resolve:{
      product: function(ProductService, $stateParams){
        return ProductService.getProduct($stateParams.productId);
      },
      reviews: function(ProductService, $stateParams){
        return ProductService.getReviews($stateParams.productId);
      }
    }
  })

  .state('order', {
    url: '/order',
    templateUrl: "views/order.html",
    controller: 'OrderCtrl',
  })

  .state('profile',{
    url: '/profile/:userId',
    templateUrl: 'views/profile.html',
    controller: 'ProfileCtrl',
    resolve:{
      orders: function(OrderService, $stateParams){
        return OrderService.getOrders($stateParams.userId);
      }
    }
  })

  $urlRouterProvider.otherwise('/menu');
})

;
