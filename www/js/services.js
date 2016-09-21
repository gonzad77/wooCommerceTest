angular.module('services', [])

.service('ProductService', function($q, $http, appConfig){

  this.getProducts = function(){
    var deferred = $q.defer();
    $http.get( appConfig.DOMAIN_URL + '/wp-json/wc/v1/products?', {
    params: { consumer_key: appConfig.KEY,
              consumer_secret: appConfig.SECRET_KEY,
              per_page: 24}
    })
    .then(function(res){
      console.log(res);
      deferred.resolve(res);
    }, function(error){
      console.log(error);
      deferred.reject(error);
    })
    return deferred.promise;
  }

  this.getProduct = function(productId){
    var deferred = $q.defer();
    $http.get( appConfig.DOMAIN_URL + '/wp-json/wc/v1/products/' + productId, {
    params: { consumer_key: appConfig.KEY,
              consumer_secret: appConfig.SECRET_KEY
            }
    })
    .then(function(res){
      console.log(res);
      deferred.resolve(res);
    }, function(error){
      console.log(error);
      deferred.reject(error);
    })
    return deferred.promise;
  }

  this.getReviews = function(productId){
    var deferred = $q.defer();
    $http.get( appConfig.DOMAIN_URL + '/wp-json/wc/v1/products/' + productId + '/reviews' , {
    params: { consumer_key: appConfig.KEY,
              consumer_secret: appConfig.SECRET_KEY
            }
    })
    .then(function(res){
      console.log(res);
      deferred.resolve(res);
    }, function(error){
      console.log(error);
      deferred.reject(error);
    })
    return deferred.promise;
  }

  this.getCategories = function(){
    var deferred = $q.defer();
    $http.get( appConfig.DOMAIN_URL + '/wp-json/wc/v1/products/categories', {
    params: { consumer_key: appConfig.KEY,
              consumer_secret: appConfig.SECRET_KEY,
              per_page: 24}
    })
    .then(function(res){
      console.log(res);
      deferred.resolve(res);
    }, function(error){
      console.log(error);
      deferred.reject(error);
    })
    return deferred.promise;
  }

})
