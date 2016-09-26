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

  this.getProductsByCategory = function(categoryId){
    var deferred = $q.defer();
    $http.get( appConfig.DOMAIN_URL + '/wp-json/wc/v1/products/', {
    params: { consumer_key: appConfig.KEY,
              consumer_secret: appConfig.SECRET_KEY,
              category: categoryId,
              per_page: 24
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

  this.getProductsByCustomer = function(customerId){
    var deferred = $q.defer();
    $http.get( appConfig.DOMAIN_URL + '/wp-json/wc/v1/products', {
    params: { consumer_key: appConfig.KEY,
              consumer_secret: appConfig.SECRET_KEY,
              customer: customerId,
              per_page: 24
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

  this.buy = function(productId, clientId){
    var deferred = $q.defer();
    $http({
    method: 'POST',
    url: appConfig.DOMAIN_URL + '/wp-json/wc/v1/orders' ,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    paramSerializer: '$httpParamSerializerJQLike',
    params: {
          consumer_key: appConfig.KEY,
          consumer_secret: appConfig.SECRET_KEY,
          line_items:[
            {
              product_id: productId,
              quantity: 1
            }
          ],
          customer_id: clientId,
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

})

.service('OrderService', function($q, $http, appConfig){

  this.getOrders = function(userId){
    var deferred = $q.defer();
    $http.get( appConfig.DOMAIN_URL + '/wp-json/wc/v1/orders', {
    params: { consumer_key: appConfig.KEY,
              consumer_secret: appConfig.SECRET_KEY,
              per_page: 24,
              customer: userId
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
})
