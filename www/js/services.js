angular.module('services', [])

.service('ProductService', function($q, $http){

  this.getProducts = function(){
    var deferred = $q.defer();
    $http.get('https://wordpress.startapplabs.com/woocommerce/wp-json/wc/v1/products?', {
    params: { consumer_key: 'ck_ea926aa257bbfd5782f06a55f532a6462ceb0004',
              consumer_secret: 'cs_2b544673cb8baf2776407fd05d643e4d69c4b00d',
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
