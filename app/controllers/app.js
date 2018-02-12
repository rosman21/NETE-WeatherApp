var app = angular.module("weatherApp", ["directives","ngRoute"]);
app.filter('roundUp', function(){
    return function(input) {
      return Math.ceil(+input);
    };
  })
app.config(function($routeProvider,$locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "app/views/home.html",
        controller: 'HomeCtrl',
    })
});
app.controller('HomeCtrl', function($scope, $window, weatherService) {
  $scope.searchZipCode = "";
  $scope.dateNow = new Date();
  $scope.findWeatherByZip = function(){
    weatherService.findByZip($scope.searchZipCode).then(function(response) {
        console.log(response.data)
        $scope.zipCodeData = response.data;
        $scope.weatherData = $scope.zipCodeData.weather;
        $scope.cityName = $scope.zipCodeData.name;
        $scope.countryCode = $scope.zipCodeData.sys.country;
        $scope.mainWeatherData = $scope.zipCodeData.main;
      }).catch(function(error){
        $scope.findWeatherByZipErrorMessage = error.data.message;
      });
  }
  $scope.fiveDayForcast = function(){
    weatherService.fiveForcastByZip($scope.searchZipCode).then(function(response){
        console.log(response.data)
        $scope.fiveday = response.data;
        $scope.fiveDayMainWeatherData = $scope.zipCodeData.main;
        $scope.fiveDayWeatherData = $scope.zipCodeData.weather;
        $scope.unixDate = function(dateValue){
            return moment.unix(dateValue).format("ddd");
        }
    }).catch(function(error){
        $scope.fiveDayForcastErrorMessage = error.data.message;
    });
} 

});
